import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RooState } from '../../app/store';
import ImagesList from '../../components/ImagesList/ImagesList';
import InputSearch from '../../components/InputSearch/InputSearch';
import { getImages } from '../../features/imagesSlice/imageThunk';
import style from './SearchPage.module.scss';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const { images } = useSelector((state: RooState) => state.images);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getImages(search));
  };

  return (
    <section className={`${style.search} wrapper`}>
      <h2 className={style.search__title}>Search Image</h2>
      <form action="GET" onSubmit={handleSubmit}>
        <InputSearch
          placeholder="Search an image..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ImagesList images={images} />
    </section>
  );
};

export default SearchPage;
