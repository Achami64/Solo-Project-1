import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.jsx';
import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Express Greetings: The Fast and Easy Way to Send Holiday Cards</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
