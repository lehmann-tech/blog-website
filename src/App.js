import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <Main/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
