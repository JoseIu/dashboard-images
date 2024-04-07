import InputSearch from '../InputSearch/InputSearch';
import ArrowIcon from '../icons/ArrowIcon';
import style from './MyPhotosFilters.module.scss';

interface MyPhotosFilersProps {
  search: string;
  setSearchByDescription: (search: string) => void;
  setSort: (sort: number) => void;
  sort: number;
}

const MyPhotosFilers = ({ search, setSearchByDescription, sort, setSort }: MyPhotosFilersProps) => {
  return (
    <div className={style.filters}>
      <InputSearch
        value={search}
        className={style.filters__search}
        placeholder="Filter by description..."
        onChange={(event) => setSearchByDescription(event.target.value)}
      />
      <div className={style.filters__container}>
        <select
          value={sort}
          name="select"
          id="selet"
          className={style.filters__select}
          onChange={(event) => setSort(Number(event.target.value))}
        >
          <option className={style.filters__option} value="0">
            Default
          </option>
          <option className={style.filters__option} value="1">
            Import date
          </option>
          <option className={style.filters__option} value="2">
            Width
          </option>
          <option className={style.filters__option} value="3">
            Height
          </option>
          <option className={style.filters__option} value="4">
            Likes
          </option>
        </select>
        <ArrowIcon className={style.filters__arow} />
      </div>
    </div>
  );
};

export default MyPhotosFilers;
