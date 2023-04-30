import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

import s from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please, enter search query.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <>
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.searchFormBtn}>
            <FaSearch />
          </button>
          <input
            className={s.searchFormInput}
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
