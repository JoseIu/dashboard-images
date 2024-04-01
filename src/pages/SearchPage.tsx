import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RooState } from '../app/store';
import ImagesList from '../components/ImagesList/ImagesList';
import InputSearch from '../components/InputSearch/InputSearch';
import style from './SearchPage.module.scss';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const { images } = useSelector((state: RooState) => state.images);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const BASE_URL = import.meta.env.VITE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    try {
      // const response = await fetch(`${BASE_URL}/?query=${search}&client_id=${API_KEY}`);
      // const data = (await response.json()) as Result;
      // dispatch(addResult(data.results));
    } catch (error) {
      console.log(error);
    }
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
