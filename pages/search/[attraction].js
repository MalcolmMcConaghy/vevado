import React from 'react';
import fetch from 'isomorphic-unfetch';

function SearchResults({ data }) {
  return (
    data.map(attraction => {
      return (
        <div>
          <p>Result: { attraction.id }</p>
          <p>{attraction.attraction}</p>
          <p>{attraction.tour_type}</p>
          <p>{attraction.price}</p>
          <p>{attraction.provider}</p>
        </div>
      )
    })
  )
};

SearchResults.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/api/search/${query.attraction}`);
  const json = await res.json();
  return { data: json }
}

export default SearchResults;
