export type ImageSize = 'small' | 'medium' | 'large' | 'extralarge';

export interface AlbumImage {
  '#text': string;
  size: ImageSize;
}

export interface Album {
  name: string;
  artist: string;
  url: string;
  image: AlbumImage[];
  streamable: string;
  mbid: string;
}