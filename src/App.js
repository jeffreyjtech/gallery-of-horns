import React from 'react';
// import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import 'bootstrap/dist/css/bootstrap.min.css';

import beastsDataset from './data.json';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main beastsDataset={beastsDataset}/>
        <Footer />
      </>
    );
  }
}

export default App;
