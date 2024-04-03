import InputSearch from '../InputSearch/InputSearch';
import style from './MyPhotosFilters.module.scss';

interface MyPhotosFilersProps {
  search: string;
  setSearchByDescription: (search: string) => void;
  setSort: (sort: number) => void;
  sort: number;
  setSearchByTag: (search: string) => void;
}

const MyPhotosFilers = ({
  search,
  setSearchByDescription,
  sort,
  setSort,
  setSearchByTag,
}: MyPhotosFilersProps) => {
  return (
    <div className={style.filters}>
      <InputSearch
        value={search}
        className={style.filters__search}
        placeholder="Search an image..."
        onChange={(event) => setSearchByDescription(event.target.value)}
      />

      <select
        className={style.filters__select}
        value={sort}
        name="select"
        id="selet"
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
    </div>
  );
};

export default MyPhotosFilers;
