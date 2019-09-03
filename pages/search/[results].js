import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';

import Hero from './../../components/hero/hero';

function SearchResults({ data }) {
  return (
    <Fragment>
      <Hero
        small
      />
      {data.map(attraction => {
        return (
          <div>
            <p>Result: { attraction.id }</p>
            <p>{attraction.attraction}</p>
            <p>{attraction.tour_type}</p>
            <p>{attraction.price}</p>
            <p>{attraction.provider}</p>
          </div>
        )
      })}
    </Fragment>
  )
};

SearchResults.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/api/search/${query.results}`);
  const json = await res.json();
  return { data: json }
}

export default SearchResults;
