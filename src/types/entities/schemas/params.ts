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

export interface DecorServicePaginationParamsSchema {
  pageIndex: number;
  pageSize: number;
  subLocation: string;
  style?: string;
  sortBy?: string;
  descending?: boolean;
  seasonId?: string;
  providerId?: number;
}