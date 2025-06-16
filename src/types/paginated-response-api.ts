export interface PaginatedApiResponse<T> {
  success: boolean;
  message: string;
  errors: Error[];
  data: {
    data: T[];
    totalCount: number;
  };
}

export type ListApiResponse<T> = PaginatedApiResponse<T>;

export interface ProductPaginationParams {
  pageIndex: number;
  pageSize: number;
  productName?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
  descending?: boolean;
  status?: string;
}

export interface ProductListResult<T> {
  data: T[];
  totalCount: number;
  totalPages: number;
}
