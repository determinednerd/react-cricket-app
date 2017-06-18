import React, { Component } from 'react';
import './App.css';
import  Header from './components/header/header';
import  Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='cricket-container'>Welcome To Cricket App</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
