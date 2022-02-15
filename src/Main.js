import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';

class Main extends React.Component {
  render() {
    let beastComps = this.props.beastsDataset.map(
      (element, idx) => <HornedBeast beastData={element} key={idx} />
    );
    return(
      <main>
        {beastComps}
      </main>
    );
  }
}

export default Main;
