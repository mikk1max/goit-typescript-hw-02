export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface SocialLinks {
  instagram_username: string;
  paypal_email?: string | null;
  portfolio_url: string;
  twitter_username: string;
}

export interface UserProfile {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: {
    self: string;
    html: string;
  };
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: ProfileImage;
  social: SocialLinks;
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
}

export interface ImageUrls {
  full: string;
  regular: string;
  small: string;
  raw?: string;
  small_s3?: string;
  thumb?: string;
}

export interface Image {
  id: string;
  description: string;
  alt_description: string;
  alternative_slugs: object;
  asset_type: string;
  blur_hash: string;
  breadcrumbs?: [];
  color: string;
  created_at: string;
  current_user_collections?: [];
  height: number;
  width: number;
  liked_by_user: boolean;
  likes: number;
  links: object;
  promoted_at: string;
  slug: string;
  sponsorship?: null;
  topic_submissions: object;
  updated_at: string;
  urls: ImageUrls;
  user: UserProfile;
}

export interface UnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
