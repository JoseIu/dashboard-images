import { FormEvent, useState } from 'react';
import InputSearch from '../components/InputSearch/InputSearch';
import style from './SearchPage.module.scss';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  // `${VITE_URL}/?query=${value}&client_id=${VITE_API_KEY}`

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <section className={style.search}>
      <h2 className={style.search__title}>Search Image</h2>
      <form action="GET" onSubmit={handleSubmit}>
        <InputSearch
          placeholder="Search an image..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <input type="submit" value="search" /> */}
      </form>
    </section>
  );
};

export default SearchPage;
