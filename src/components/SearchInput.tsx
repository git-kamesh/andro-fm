import classNames from 'classnames';
import { ChangeEvent } from 'react';


interface SearchInputProps {
  onChange: (value: string) => void;
  className?: string;
  autoFocus?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, className, autoFocus = true }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classNames(className)}>
      <input
        onChange={handleChange}
        className='border border-secondary-500 text-lg w-full p-1.5 rounded-sm'
        placeholder='Search Albums...'
        autoFocus={autoFocus}
      />
    </div>
  )
}