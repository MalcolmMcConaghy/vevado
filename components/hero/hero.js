import React from 'react';
import Header from '../header/header';
import Search from '../search/search';

import './hero.scss';

function Hero({ small }) {
  return (
    <div className={`${small ? "hero hero--small" : "hero"}`}>
      <h1 className="hero__tagline">
          <span className="hero__see">SEE</span>&nbsp;
          <span className="hero__go">GO</span>&nbsp;
          <span className="hero__do">DO</span>&nbsp;
      </h1>
      <Search />
    </div>
  );
}

export default Hero;
