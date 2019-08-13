import React, { Fragment, Component } from 'react';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import DestinationList from '../components/destination_list/destination_list';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Header />
          <Hero />
        </header>
        <main>
          <DestinationList
            header="Popular Attractions"
          />
          <DestinationList
            header="Popular Destinations"
          />
        </main>
      </Fragment>
    );
  }
}

export default Home;
