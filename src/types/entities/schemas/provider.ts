export interface ProviderSchema {
  id: number;
  businessName: string;
  slug: string;
  bio: string;
  avatar: string;
  phone: string;
  address: string;
  skillName: string | null;
  yearsOfExperience: number;
  pastWorkPlaces: string;
  pastProjects: string;
  certificateImageUrls: string[];
  isProvider: boolean;
  providerVerified: boolean;
  providerStatus: number;
  joinedDate: string;
  followersCount: number;
  followingsCount: number;
}