import { ProviderSchema } from "./provider";
import { Season } from "../enums";

export interface DecorServiceImage {
  id: number;
  imageURL: string;
}

export interface DecorServiceSchema {
  id: number;
  style: string;
  categoryName: string;
  createAt: string;
  decorCategoryId: number;
  description: string;
  design: string[];
  favoriteCount: number;
  images: DecorServiceImage[];
  isBooked: boolean;
  provider: ProviderSchema;
  seasons: Season[];
  subLocation: string;
}
