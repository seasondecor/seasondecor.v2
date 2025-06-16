import { useMutation } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const SUB_URL = `api/Auth`;

export function useSignup() {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: {
      email: string;
      password: string;
    }) => {
      nProgress.start();
      try {
        const response = await BaseRequest.Post(`/${SUB_URL}/register-customer`, data);
        return response;
      } catch (error) {
        nProgress.done();
        throw error;
      } finally {
        nProgress.done();
      }
    },
  });
}
