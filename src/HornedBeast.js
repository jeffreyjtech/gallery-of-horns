import React from "react";
import './HornedBeast.css';

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
      <article key={this.props.idx}>
        <h2>{this.props.beastData.title}</h2>
        <img 
          src={this.props.beastData.image_url}
          alt={this.props.beastData.description} 
          title={this.props.beastData.title}
          onClick={this.handleVote}
        />
        <p>
          {this.props.beastData.description}
        </p>
        <span>❤ {this.state.votes}</span>
      </article>
    );
  }
}

export default HornedBeast;