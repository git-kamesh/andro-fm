import classNames from 'classnames';
import { Album } from '../types/album.type';

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <a
      className={classNames(
        'flex flex-col hover:shadow-sm p-2 transition-all duration-200',
        'rounded border border-transparent hover:border-slate-200'
      )}
      href={album.url} target='_blank'
    >
      <img src={album.image[2]['#text']} className='w-full' width={300} height={300} />
      <div className='text-base text-blue-600 font-semibold mt-2'>{album.name}</div>
      <div className='text-sm text-slate-600 font-medium'>{album.artist}</div>
    </a>
  );
}