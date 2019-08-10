import React, { Fragment, Component } from 'react';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
      </Fragment>
    );
  }
}

export default Home;
