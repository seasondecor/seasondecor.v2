import { Season } from "../enums";

export interface ProductSchema {
  id: number;
  productName: string;
  quantity: number;
  rate: number;
  productPrice: number;
  shipFrom: string;
  totalSold: number;
  status: string;
  categoryName: string;
  productCategory: {
    id: number;
    categoryName: string;
  };
  imageUrls: string[];
  seasons: Season[];
}
