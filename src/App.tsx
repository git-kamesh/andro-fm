import { AlbumCard } from './components/AlbumCard';
import { SearchInput } from './components/SearchInput';

function App() {
  return (
    <div className='h-screen w-screen flex justify-center'>
      <div className='h-full w-full sm:max-w-[800px] mx-3 flex flex-col'>
        <SearchInput className='mt-6' onChange={(e) => { }} />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max mt-5 pb-12 overflow-auto'>
          {Array.from({ length: 10 }).map((_, i) =>
            <AlbumCard
              key={i} coverImage='https://lastfm.freetls.fastly.net/i/u/300x300/4386a469e620103f8436b3e969075959.png' 
              albumName='AMs' albumUrl='https://www.last.fm/music/Arctic+Monkeys/AM' artistName='Arctic Monkeys' />)}
        </div>
      </div>
    </div>
  )
}

export default App;
