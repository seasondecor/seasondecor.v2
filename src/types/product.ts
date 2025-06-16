import { Season, ProductStatus } from "./enums";

export interface Product {
  id: number;
  productName: string;
  quantity: number;
  rate: number;
  productPrice: number;
  totalSold: number;
  status: ProductStatus;
  productCategory: {
    id: number;
    categoryName: string;
  };
  imageUrls: string[];
  seasons: Season[];
}
