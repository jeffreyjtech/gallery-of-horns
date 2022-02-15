import React from "react";
import './HornedBeast.css';

class HornedBeast extends React.Component {
  render() {
    return(
      <article key={this.props.idx}>
        <h2>{this.props.beastData.title}</h2>
        <img 
          src={this.props.beastData.image_url}
          alt={this.props.beastData.description} 
          title={this.props.beastData.title}
        />
        <p>
          {this.props.beastData.description}
        </p>
      </article>
    );
  }
}

export default HornedBeast;