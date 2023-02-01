import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import MainContainer from '../containers/MainContainer.jsx';
import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1> EXPRESS Emotions with Elegance</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
