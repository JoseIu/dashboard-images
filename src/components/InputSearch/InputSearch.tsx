import { InputHTMLAttributes } from 'react';
import SearchIcon from '../icons/SearchIcon';
import style from './InputSearch.module.scss';

interface InputSearch extends InputHTMLAttributes<HTMLInputElement> {}

const InputSearch = (props: InputSearch) => {
  return (
    <div className={style.search}>
      <input className={style.search__input} {...props} type="text" />
      <SearchIcon className={style.search__icon} />
    </div>
  );
};

export default InputSearch;
