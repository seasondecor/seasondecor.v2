import { useQuery } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import {
  ProductPaginationParamsSchema,
  PaginatedApiResponseSchema,
  ProductSchema,
} from "@/types";

const SUB_URL = `api/Product`;

const defaultPagination: ProductPaginationParamsSchema = {
  pageIndex: 1,
  pageSize: 10,
  productName: "",
  minPrice: "",
  maxPrice: "",
  sortBy: "",
  descending: false,
  status: "",
};

export function useGetListProduct(
  paginationParams: Partial<ProductPaginationParamsSchema> = {}
) {
  const params: ProductPaginationParamsSchema = {
    ...defaultPagination,
    ...paginationParams,
  };

  return useQuery({
    queryKey: ["product_list", params],
    queryFn: async () => {
      nProgress.start();
      try {
        let url = `/${SUB_URL}/getPaginatedList?`;

        const queryParams = [];

        queryParams.push(`PageIndex=${params.pageIndex}`);
        queryParams.push(`PageSize=${params.pageSize}`);

        if (params.productName)
          queryParams.push(`ProductName=${params.productName}`);
        if (params.minPrice) queryParams.push(`MinPrice=${params.minPrice}`);
        if (params.maxPrice) queryParams.push(`MaxPrice=${params.maxPrice}`);
        if (params.status)
          queryParams.push(`Status=${encodeURIComponent(params.status)}`);
        if (params.sortBy) queryParams.push(`SortBy=${params.sortBy}`);
        if (params.descending !== undefined)
          queryParams.push(`Descending=${params.descending}`);

        url += queryParams.join("&");

        const response = await BaseRequest.Get<
          PaginatedApiResponseSchema<ProductSchema>
        >(url, false);

        if (!response.success) {
          throw new Error(response.message || "Failed to fetch products");
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
