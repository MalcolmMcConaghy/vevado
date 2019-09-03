import React, { Fragment } from 'react'
import App from 'next/app'
import Header from '../components/header/header';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Header />
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp
