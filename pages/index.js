import React, { Fragment, Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Hero from '../components/hero/hero';
import DestinationList from '../components/destination_list/destination_list';

import './application.scss';

class Index extends Component {
  static async getInitialProps({ req }) {
    const res = await fetch('http://localhost:3000/api/popular_locations');
    const json = await res.json();
    return { popular_locations: json };
  }

  render() {
    return (
      <Fragment>
        <header>
          <Hero />
        </header>
        <main>
          {/* <DestinationList
            header="Popular Attractions"
          /> */}
          <DestinationList
            header="Trending Destinations"
            data={ this.props.popular_locations }
          />
        </main>
      </Fragment>
    );
  }
}

export default Index;
