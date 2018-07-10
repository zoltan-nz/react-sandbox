import * as React from 'react';
import { Component } from 'react';
import HomePage from '../pages/Home';

import 'bootstrap/scss/bootstrap.scss';
import '../styles/index.scss';
import './app.scss';

class App extends Component {
  public render() {
    return (
      <div className="container-fluid">
        <HomePage />
      </div>
    );
  }
}

export default App;
