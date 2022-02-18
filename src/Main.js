import React from 'react';
import HornedBeast from './HornedBeast';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    let filteredBeasts;
    if (isNaN(this.props.hornsQty)) {
      filteredBeasts = this.props.beastsDataset;
    } else {
      filteredBeasts = this.props.beastsDataset.filter(
        (beast) => beast.horns === this.props.hornsQty
      );
    }
    let beastComps = filteredBeasts.map((beast, idx) => {
      return (
        <HornedBeast
          beastData={beast}
          key={idx}
          handleSelectBeast={this.props.handleSelectBeast}
        />
      );
    });
    return (
      <Container className="mainContainer">
        <Row xs={1} sm={2} md={3} lg={4}>
          {beastComps}
        </Row>
      </Container>
    );
  }
}

export default Main;
