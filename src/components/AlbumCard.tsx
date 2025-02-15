import classNames from 'classnames';

interface AlbumCardProps {
  coverImage: string;
  albumName: string;
  albumUrl: string;
  artistName: string;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ coverImage, albumName, albumUrl, artistName }) => {
  return (
    <a
      className={classNames(
        'flex flex-col hover:shadow-sm p-2 transition-all duration-200',
        'rounded border border-transparent hover:border-slate-200'
      )}
      href={albumUrl} target='_blank'
    >
      <img src={coverImage} className='w-full' width={300} height={300}/>
      <div className='text-base text-blue-600 font-semibold mt-2'>{albumName}</div>
      <div className='text-sm text-slate-600 font-medium'>{artistName}</div>
    </a>
  );
}