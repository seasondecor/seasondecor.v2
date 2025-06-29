import { useQuery } from "@tanstack/react-query";
import { ProductPaginationParamsSchema } from "@/types";
import {
  getProductListQuery,
  getProductByProviderQuery,
  getProductByIdQuery,
} from "./queries";

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

export function useGetProductList(
  pagination: Partial<ProductPaginationParamsSchema> = {}
) {
  const params = { ...defaultPagination, ...pagination };

  return useQuery({
    ...getProductListQuery(params),
    staleTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export function useGetProductByProvider(
  slug: string,
  pagination: Partial<ProductPaginationParamsSchema> = {}
) {
  const params = { ...defaultPagination, ...pagination };

  return useQuery({
    ...getProductByProviderQuery(slug, params),
    enabled: !!slug,
    staleTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export function useGetProductById(id: number) {
  return useQuery({
    ...getProductByIdQuery(id),
    enabled: !!id,
    staleTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
