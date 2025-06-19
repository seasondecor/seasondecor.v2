export interface ProductPaginationParamsSchema {
  pageIndex: number;
  pageSize: number;
  productName?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
  descending?: boolean;
  status?: string;
}