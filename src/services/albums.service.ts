import { SearchAlbumsResponse, SearchResponse } from '../types/album.type';
import { API_KEY, ALBUM_BASE_URL, SEARCH_DEFAULT_LIMIT, DEFAULT_API_HEADERS } from '../constants'

export const searchAlbums = async (query: string): Promise<SearchAlbumsResponse> => {
  if (!query?.trim()) return { albums: [] };

  const params = new URLSearchParams({
    method: 'album.search',
    album: query,
    api_key: API_KEY,
    format: 'json',
    // used toString() to avoid TS error as URLSearchParams accepts only string
    limit: SEARCH_DEFAULT_LIMIT.toString(),
  });

  const response = await fetch(`${ALBUM_BASE_URL}?${params}`, {
    headers: DEFAULT_API_HEADERS,
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch albums');
  }

  const data = await response.json() as SearchResponse;

  return {
    albums: data.results.albummatches.album,
  };
};