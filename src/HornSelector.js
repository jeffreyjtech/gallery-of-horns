import React from 'react';

import Form from 'react-bootstrap/Form';

class HornSelector extends React.Component {
  handleSelect = (event) => {
    this.props.handleHorns(parseInt(event.target.value));
  };

  constructOptions = () => {
    let possibleHornQtys = this.props.beastsDataset.map(beast => beast.horns);
    possibleHornQtys = Array.from(Set(possibleHornQtys));
    possibleHornQtys.sort();
    return possibleHornQtys.map(hornQty => (<option>{hornQty}</option>))
  }

  render() {
    return (
      <Form className="ms-4">
        <Form.Group>
          <Form.Label htmlFor="formSelect">Filter by horn quantity</Form.Label>
          <Form.Select
            id="formSelect"
            onChange={this.handleSelect}
            className="w-25"
          >
            <option>{null}</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default HornSelector;
