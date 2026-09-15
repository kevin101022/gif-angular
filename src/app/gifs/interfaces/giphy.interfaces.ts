export interface GiphyResponse {
  data: GiphyItem[];
  pagination: Pagination;
  meta: Meta;
}

export interface GiphyItem {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Images {
  original: Original;
  downsized: Downsized;
  downsized_large: Downsized;
  downsized_medium: Downsized;
  downsized_small: DownsizedSmall;
  downsized_still: Downsized;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeightDownsampled;
  fixed_height_small: FixedHeightSmall;
  fixed_height_small_still: FixedHeightSmallStill;
  fixed_height_still: FixedHeightStill;
  fixed_width: FixedWidth;
  fixed_width_downsampled: FixedWidthDownsampled;
  fixed_width_small: FixedWidthSmall;
  fixed_width_small_still: FixedWidthSmallStill;
  fixed_width_still: FixedWidthStill;
  looping: Looping;
  original_still: OriginalStill;
  original_mp4: OriginalMp4;
  preview: Preview;
  preview_gif: PreviewGif;
  preview_webp: PreviewWebp;
  '480w_still': The480WStill;
}

export interface The480WStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Downsized {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedSmall {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface FixedHeightDownsampled {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface FixedHeightSmall {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface FixedHeightSmallStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedHeightStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedWidth {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface FixedWidthDownsampled {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface FixedWidthSmall {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface FixedWidthSmallStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedWidthStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}

export interface Original {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface OriginalMp4 {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface OriginalStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Preview {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface PreviewGif {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface PreviewWebp {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_public: boolean;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
