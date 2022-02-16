import React from 'react';
import HornedBeast from './HornedBeast';
// import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap';
import Col from 'react-bootstrap';


class Main extends React.Component {
  render() {
    let beastComps = this.props.beastsDataset.map(
      (element, idx) => <HornedBeast beastData={element} key={idx} />
    );
    return(
      <Container className="mainContainer">
        {beastComps}
      </Container>
    );
  }
}

export default Main;
