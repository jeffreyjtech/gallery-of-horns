import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import HornSelector from './HornSelector.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import beastsDataset from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      hornsQty: NaN,
    };
  }

  handleSelectBeast = (selectedBeast) => {
    this.setState({
      selectedBeast: selectedBeast,
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleHorns = (hornsQty) => {
    this.setState({
      hornsQty,
    });
  };

  render() {
    return (
      <>
        <Header />
        <HornSelector handleHorns={this.handleHorns} />
        <SelectedBeast
          showModal={this.state.showModal}
          beastData={this.state.selectedBeast}
          handleClose={this.handleClose}
        />
        <Main
          beastsDataset={beastsDataset}
          handleSelectBeast={this.handleSelectBeast}
          hornsQty={this.state.hornsQty}
        />
        <Footer />
      </>
    );
  }
}

export default App;
