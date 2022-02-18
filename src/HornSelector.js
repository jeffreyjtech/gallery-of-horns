import React from 'react';

import Form from 'react-bootstrap/Form';

class HornSelector extends React.Component {
  handleSelect = (event) => {
    let parsedHornQty = Number.parseInt(event.target.value)
    this.props.handleHorns(parsedHornQty);
  };

  render() {
    return (
      <Form className="ms-4 w-25">
        <Form.Group>
          <Form.Label htmlFor="formSelect">Filter by horn quantity</Form.Label>
          <Form.Select id="formSelect" onChange={this.handleSelect}>
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
