import React from 'react';

import './search.scss';

function Search() {
  return (
    <form className="search">
      <div className="search__input-container">
        <input className="search__input" type="text" placeholder="Search by attraction or destination" />
        <button className="search__button">Search</button>
      </div>
      <button className="search__button search__button--mobile">Search</button>
    </form>
  );
}

export default Search;
