import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

import {
  DecorServicePaginationParamsSchema,
  PaginatedApiResponseSchema,
  DecorServiceSchema,
} from "@/types";

const SUB_URL = `api/DecorService`;

const defaultPagination: DecorServicePaginationParamsSchema = {
  pageIndex: 1,
  pageSize: 10,
  subLocation: "",
  style: "",
  sortBy: "",
  descending: true,
  seasonId: "",
};

export function useGetDecorServiceByProvider(
  paginationParams: Partial<DecorServicePaginationParamsSchema> = {}
) {
  const params: DecorServicePaginationParamsSchema = {
    ...defaultPagination,
    ...paginationParams,
  };

  return useQuery({
    queryKey: ["decor_service_list_by_provider", params],
    queryFn: async () => {
      nProgress.start();
      try {
        let url = `/${SUB_URL}/getDecorServiceListByProvider?`;

        url += `&PageIndex=${params.pageIndex}`;

        url += `&PageSize=${params.pageSize}`;

        if (params.sortBy)
          url += `&SortBy=${encodeURIComponent(params.sortBy)}`;

        if (params.seasonId) url += `&SeasonId=${params.seasonId}`;

        const response = await BaseRequest.Get<
          PaginatedApiResponseSchema<DecorServiceSchema>
        >(url, false);

        if (!response.success) {
          throw new Error(response.message || "Failed to fetch decor services");
        }

        return {
          items: response.data.data,
          totalCount: response.data.totalCount,
          totalPages: Math.ceil(response.data.totalCount / params.pageSize),
        };
      } finally {
        nProgress.done();
      }
    },
    staleTime: 30000,
  });
}

export function useGetDecorServiceOfProvider(
  paginationParams: Partial<DecorServicePaginationParamsSchema> = {}
) {
  const params: DecorServicePaginationParamsSchema = {
    ...defaultPagination,
    ...paginationParams,
  };

  return useQuery({
    queryKey: ["decor_service_list_of_provider", params, params.providerId],
    queryFn: async () => {
      nProgress.start();
      try {
        let url = `/${SUB_URL}/getDecorServiceListByCustomer?`;

        url += `&PageIndex=${params.pageIndex}`;

        url += `&PageSize=${params.pageSize}`;

        if (params.providerId) url += `&providerId=${params.providerId}`;

        if (params.sortBy)
          url += `&SortBy=${encodeURIComponent(params.sortBy)}`;

        if (params.seasonId) url += `&SeasonId=${params.seasonId}`;

        const response = await BaseRequest.Get<
          PaginatedApiResponseSchema<DecorServiceSchema>
        >(url, false);

        if (!response.success) {
          throw new Error(response.message || "Failed to fetch decor services");
        }

        return {
          items: response.data.data,
          totalCount: response.data.totalCount,
          totalPages: Math.ceil(response.data.totalCount / params.pageSize),
        };
      } finally {
        nProgress.done();
      }
    },
    staleTime: 30000,
  });
}
