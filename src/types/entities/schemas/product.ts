import { Season } from "../enums";

export interface ProductSchema {
  id: number;
  productName: string;
  quantity: number;
  rate: number;
  productPrice: number;
  totalSold: number;
  status: string;
  productCategory: {
    id: number;
    categoryName: string;
  };
  imageUrls: string[];
  seasons: Season[];
}
