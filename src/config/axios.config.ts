import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";
import { toaster } from "@/components/ui/toaster";

// Define a common interface for API error responses
interface ApiResponseError {
  message?: string;
  errors?: string | string[] | Record<string, string | string[]>;
}

// Extend AxiosRequestConfig to include custom properties like showToast
declare module 'axios' {
  export interface AxiosRequestConfig {
    showToast?: boolean;
  }
}

// Extend NextAuth's Session to include accessToken
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}

export const BASE_URL = "https://seasondecor.azurewebsites.net";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Request Interceptor: Attach token
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const session = await getSession();

    if (!config.headers) {
      config.headers = new axios.AxiosHeaders();
    }

    if (session?.accessToken) {
      config.headers.set("Authorization", `Bearer ${session.accessToken}`);
    }
    if (!(config.data instanceof FormData)) {
      // AxiosHeaders automatically handles Content-Type when setting data, but explicitly setting won't hurt.
      config.headers.set("Content-Type", "application/json");
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    toaster.error({ title: "Request failed! Please try again." });
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle errors
apiClient.interceptors.response.use(
  (response: AxiosResponse<unknown>): AxiosResponse<unknown> => {
    if (response && response.data) {
      const { success, message } = response.data as { success?: boolean; message?: string };

      if (success && message && (response.config as AxiosRequestConfig).showToast !== false) {
        toaster.success({ title: message });
      }
      return response;
    }

    toaster.error({ title: "Unexpected server response. Please try again." });
    throw new Error("Invalid response from server");
  },
  async (error: AxiosError<ApiResponseError>): Promise<AxiosError> => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 400) {
        handleValidationErrors(data?.errors);
      } else if (status === 401) {
        await handleUnauthorized();
        return Promise.reject(error.response);
      } else if (status === 403) {
        toaster.error({ title: "You do not have permission to perform this action." });
      } else if (status === 500) {
        toaster.error({ title: "Server error! Please try again later." });
      } else {
        toaster.error({ title: data?.message || "An error occurred." });
      }

      return Promise.reject(error.response);
    }

    toaster.error({ title: "Network error. Please check your internet connection." });
    return Promise.reject(error);
  }
);

// Utility: Handle validation errors
const handleValidationErrors = (errors: string[] | Record<string, string | string[]> | string | undefined): void => {
  if (Array.isArray(errors)) {
    errors.forEach((message: string) => toaster.error({ title: message }));
  } else if (typeof errors === "object" && errors !== null) {
    Object.entries(errors).forEach(([field, messages]: [string, string | string[]]) => {
      if (Array.isArray(messages)) {
        messages.forEach((message: string) => toaster.error({ title: `${field}: ${message}` }));
      } else {
        toaster.error({ title: `${field}: ${messages}` });
      }
    });
  } else {
    toaster.error({ title: errors || "An error occurred." });
  }
};

const handleUnauthorized = async (): Promise<void> => {
  toaster.warning({ title: "Please login to continue" });
  await signOut({ redirect: false });
  window.location.href = "/authen/login";
};

// API request functions
const BaseRequest = {
  Get: async <T>(url: string, showToast: boolean = true): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiClient.get<T>(url, { showToast });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  Post: async <T>(url: string, data: unknown, showToast: boolean = true): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiClient.post<T>(url, data, { showToast });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  Put: async <T>(url: string, data: unknown, showToast: boolean = true): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiClient.put<T>(url, data, { showToast });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  Delete: async <T>(url: string, showToast: boolean = true): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiClient.delete<T>(url, { showToast });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

export default BaseRequest;