import { useState } from 'react';

export const useFilters = () => {
  const [filters, setFilters] = useState({
    searchByDescription: '',
    sort: 0,
  });

  const setSearchByDescription = (search: string) => setFilters({ ...filters, searchByDescription: search });
  const setSort = (sort: number) => setFilters({ ...filters, sort });

  return {
    filters,
    setSearchByDescription,
    setSort,
  };
};
