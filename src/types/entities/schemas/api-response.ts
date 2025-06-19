export interface PaginatedApiResponseSchema<T> {
  success: boolean;
  message: string;
  errors: Error[];
  data: {
    data: T[];
    totalCount: number;
  };
}