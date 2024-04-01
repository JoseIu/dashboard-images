import { InputHTMLAttributes } from 'react';
import SearchIcon from '../icons/SearchIcon';
import style from './InputSearch.module.scss';

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputSearch = ({ className, ...props }: InputSearchProps) => {
  return (
    <div className={`${style.search} ${className || ''}`}>
      <input className={style.search__input} {...props} type="text" />
      <SearchIcon className={style.search__icon} />
    </div>
  );
};

export default InputSearch;
