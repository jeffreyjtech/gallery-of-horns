import React from 'react';
import HornedBeast from './HornedBeast';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {
    let beastComps = this.props.beastsDataset.map(
      (element, idx) => <HornedBeast beastData={element} key={idx} />
    );
    return(
      <Container className="mainContainer">
        <Row xs={1} sm={2} md={3} lg={4}>
          {beastComps}
        </Row>
      </Container>
    );
  }
}

export default Main;
