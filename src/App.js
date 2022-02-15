import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
