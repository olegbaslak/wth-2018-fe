import React, { Component } from 'react';
import { FetchData } from './components/FetchData';
import { Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <FetchData />
      </Fragment>
    );
  }
}

export default App;
