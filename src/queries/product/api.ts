import { ProductPaginationParamsSchema } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
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

function buildQuery(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .filter(([, value]) => value !== "" && value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    );
  return query.join("&");
}

export async function fetchProductList(
  paginationParams: Partial<ProductPaginationParamsSchema> = {}
) {
  const params = { ...defaultPagination, ...paginationParams };

  const queryParams = buildQuery({
    PageIndex: params.pageIndex,
    PageSize: params.pageSize,
    ProductName: params.productName,
    MinPrice: params.minPrice,
    MaxPrice: params.maxPrice,
    Status: params.status,
    SortBy: params.sortBy,
    Descending: params.descending,
  });

  const endpoint = `${BASE_URL}/${SUB_URL}/getPaginatedList?${queryParams}`;

  const res = await fetch(endpoint, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return {
    items: json.data.data,
    totalCount: json.data.totalCount,
    totalPages: Math.ceil(json.data.totalCount / params.pageSize),
  };
}

export async function fetchProductByProvider(
  slug: string,
  paginationParams: Partial<ProductPaginationParamsSchema> = {}
) {
  const params = { ...defaultPagination, ...paginationParams };

  const queryParams = buildQuery({
    Slug: slug,
    PageIndex: params.pageIndex,
    PageSize: params.pageSize,
    ProductName: params.productName,
    MinPrice: params.minPrice,
    MaxPrice: params.maxPrice,
    Status: params.status,
    SortBy: params.sortBy,
    Descending: params.descending,
  });

  const endpoint = `${BASE_URL}/${SUB_URL}/getPaginatedListByProvider?${queryParams}`;

  const res = await fetch(endpoint, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch products by provider");

  const json = await res.json();
  return {
    items: json.data.data,
    totalCount: json.data.totalCount,
    totalPages: Math.ceil(json.data.totalCount / params.pageSize),
  };
}

export async function fetchProductById(id: string) {
  if (!id) return null;

  const endpoint = `${BASE_URL}/${SUB_URL}/getById/${id}`;

  const res = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) return null;
  const json = await res.json();

  return json.data;
}
