import React, { useState } from 'react';
import Router from 'next/Router';

import './search.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleValueChange = e => setSearchValue(e.target.value);

  const handleSubmit = () => {
    Router.push(`/search/${searchValue}`);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__input-container">
        <input className="search__input" type="text" value={searchValue} onChange={handleValueChange} placeholder="Search by attraction or destination" />
        <button type="submit" className="search__button">Search</button>
      </div>
      <button type="submit" className="search__button search__button--mobile">Search</button>
    </form>
  );
}

export default Search;
