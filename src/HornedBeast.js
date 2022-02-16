import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleVote = () =>  {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {
    return(
      <Col className='mt-4'>
        <Card key={this.props.idx} className='p-1 h-100'>
          <Card.Img
            className='border border-1'
            src={this.props.beastData.image_url}
            alt={this.props.beastData.description} 
            title={this.props.beastData.title}
            onClick={this.handleVote}
            fluid="true"
            rounded="true"
          />
          <Card.Title>{this.props.beastData.title}</Card.Title>
          <Card.Body>
            <Card.Subtitle>
              {this.props.beastData.description}
            </Card.Subtitle>
          </Card.Body>
          <Card.Body>
            ❤ {this.state.votes}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;