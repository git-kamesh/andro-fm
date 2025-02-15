import { useState } from 'react';
import { AlbumCard } from './components/AlbumCard';
import { SearchInput } from './components/SearchInput';

import { useQuery } from '@tanstack/react-query';
import { SearchAlbumsResponse } from './types/album.type';
import { searchAlbums } from './services/albums.service';
import debounce from 'lodash/debounce';
import { AlbumsLoading } from './components/AlbumLoading';

function App() {
  const [query, updateQuery] = useState('');

  const { data, isLoading } = useQuery<SearchAlbumsResponse, Error>({
    queryKey: ['albums', query],
    queryFn: () => searchAlbums(query),
  });

  const debouncedUpdateQuery = debounce(updateQuery, 500);

  return (
    <div className='h-screen w-screen flex justify-center'>
      <div className='h-full w-full sm:max-w-[800px] mx-3 flex flex-col'>
        <SearchInput className='mt-6' onChange={debouncedUpdateQuery} />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max mt-5 pb-12 overflow-auto'>
          {!isLoading && data?.albums.map((album) =>
            <AlbumCard
              key={album.mbid} coverImage={album.image[2]['#text']}
              albumName={album.name} albumUrl={album.url} artistName={album.artist} />
          )}

          {isLoading && Array.from({ length: 5 }).map((_, index) =>
            <AlbumsLoading key={index} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
