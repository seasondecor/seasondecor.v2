import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import {
  ProductPaginationParams,
  Product,
  PaginatedApiResponse,
  ProductListResult,
} from "@/types";

const SUB_URL = `api/Product`;

const defaultPagination: ProductPaginationParams = {
  pageIndex: 1,
  pageSize: 10,
  productName: "",
  minPrice: "",
  maxPrice: "",
  sortBy: "",
  descending: false,
  status: "",
};

export function useGetListProduct(paginationParams: Partial<ProductPaginationParams> = {}) {
  const params: ProductPaginationParams = {
    ...defaultPagination,
    ...paginationParams,
  };

  return useQuery<ProductListResult<Product>>({
    queryKey: ["getListProduct", params],
    queryFn: async (): Promise<ProductListResult<Product>> => {
      nProgress.start();
      try {
        let url = `/${SUB_URL}/getPaginatedList?`;

        const queryParams: string[] = [];

        queryParams.push(`PageIndex=${params.pageIndex}`);
        queryParams.push(`PageSize=${params.pageSize}`);

        if (params.productName) queryParams.push(`ProductName=${params.productName}`);
        if (params.minPrice) queryParams.push(`MinPrice=${params.minPrice}`);
        if (params.maxPrice) queryParams.push(`MaxPrice=${params.maxPrice}`);
        if (params.status) queryParams.push(`Status=${encodeURIComponent(params.status)}`);
        if (params.sortBy) queryParams.push(`SortBy=${params.sortBy}`);
        if (params.descending !== undefined) queryParams.push(`Descending=${params.descending}`);

        url += queryParams.join('&');

        const apiResponse = await BaseRequest.Get<PaginatedApiResponse<Product>>(url, false);

        if (apiResponse && apiResponse.success && apiResponse.data) {
          return {
            data: apiResponse.data.data,
            totalCount: apiResponse.data.totalCount,
            totalPages: Math.ceil(apiResponse.data.totalCount / params.pageSize),
          };
        } else {
          return {
            data: [],
            totalCount: 0,
            totalPages: 0,
          };
        }
      } finally {
        nProgress.done();
      }
    },
    placeholderData: (previousData: ProductListResult<Product> | undefined) => {
      if (previousData) {
        return previousData;
      }
      return {
        data: [],
        totalCount: 0,
        totalPages: 0,
      };
    },
    staleTime: 30000,
  });
}
