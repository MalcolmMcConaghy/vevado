import React from 'react';
import Header from '../header/header';
import Search from '../search/search';

import './hero.scss';

function Hero() {
  return (
    <div className="hero">
      <Header />
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
