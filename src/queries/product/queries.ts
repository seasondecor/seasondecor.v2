import { fetchProductList, fetchProductByProvider, fetchProductById } from "./api";
import { ProductPaginationParamsSchema } from "@/types";

export const getProductListQuery = (
  params: ProductPaginationParamsSchema
) => ({
  queryKey: ["get_product_list", params],
  queryFn: () => fetchProductList(params),
});

export const getProductByProviderQuery = (
  slug: string,
  params: ProductPaginationParamsSchema
) => ({
  queryKey: ["get_product_by_provider", slug, params],
  queryFn: () => fetchProductByProvider(slug, params),
});

export const getProductByIdQuery = (id: string) => ({
  queryKey: ["get_product_by_id", id],
  queryFn: () => fetchProductById(id), 
})
