import React from 'react';
// import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

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
      <Card key={this.props.idx}>
        <Card.Img
          src={this.props.beastData.image_url}
          alt={this.props.beastData.description} 
          title={this.props.beastData.title}
          onClick={this.handleVote}
          fluid={true}
          rounded={true}
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
    );
  }
}

export default HornedBeast;