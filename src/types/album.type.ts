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
}

export interface SearchResponse {
  results: {
    albummatches: {
      album: Album[];
    };
  };
}

export interface SearchAlbumsResponse {
  albums: Album[];
}

