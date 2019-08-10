import React from 'react';

import './search.scss';

function Search() {
  return (
    <form className="search">
      <input className='search__input' type='text' placeholder='Search by attraction or destination' />
    </form>
  );
}

export default Search;
