import { useState } from 'react';
import { AlbumCard } from './components/AlbumCard';
import { SearchInput } from './components/SearchInput';

import { useQuery } from '@tanstack/react-query';
import { SearchAlbumsResponse } from './types/album.type';
import { searchAlbums } from './services/albums.service';
import debounce from 'lodash/debounce';
import { AlbumsLoading } from './components/AlbumLoading';
import { EmptyState } from './components/EmptyState';
import { LOADING_PLACEHOLDER_COUNT } from './constants';

const StateConfig = {
  initial: {
    imageUrl: '/search.svg',
    description: 'Search for your favorite albums'
  },
  error: {
    imageUrl: '/server-down.svg',
    description: 'Something went wrong, please try again!',
    descriptionClassName: '!text-red-500'
  },
  noResults: {
    imageUrl: '/no-data.svg',
    description: 'No albums found! Try searching with different keywords'
  }
};

function App() {
  const [query, updateQuery] = useState('');

  const { data, isLoading, error } = useQuery<SearchAlbumsResponse, Error>({
    queryKey: ['albums', query],
    queryFn: () => searchAlbums(query),
  });

  const debouncedUpdateQuery = debounce(updateQuery, 500);

  const hasNoQuery = !query.trim();
  const hasNoResult = !hasNoQuery && !isLoading && !error && !data?.albums.length;

  const ErrorState = () => {
    return (<>
      {/* State: has no query */}
      {hasNoQuery && <EmptyState imageUrl={StateConfig.initial.imageUrl} description={StateConfig.initial.description} />}

      {/* State: error in fetching data */}
      {error && <EmptyState imageUrl={StateConfig.error.imageUrl}
        description={StateConfig.error.description} descriptionClassName='!text-red-500' />}

      {/* State: search result is empty */}
      {hasNoResult && <EmptyState imageUrl={StateConfig.noResults.imageUrl}
        description={StateConfig.noResults.description} />}
    </>);
  };

  return (
    <div className='h-screen w-screen flex justify-center'>
      <div className='h-full w-full sm:max-w-[800px] mx-3 flex flex-col'>
        <SearchInput className='mt-6' onChange={debouncedUpdateQuery} />

        <ErrorState />

        {!hasNoQuery && !error && !hasNoResult &&
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max mt-5 pb-12 overflow-auto'>

            {/* State: rendering albums */}
            {!isLoading && data?.albums.map((album) => <AlbumCard key={album.mbid} album={album} />)}

            {/* State: loading albums, data fetching */}
            {isLoading && Array.from({ length: LOADING_PLACEHOLDER_COUNT }).map((_, index) =>
              <AlbumsLoading key={index} />
            )}
          </div>}
      </div>
    </div>
  )
}

export default App;
