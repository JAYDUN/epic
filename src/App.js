import React, { Component } from 'react';
import s from './App.css';
import Container from './component/Container/Container';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <Container/>
      </div>
    );
  }
}

export default App;
