import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            className="border border-1 w-100"
            src={this.props.beastData.image_url}
            alt={this.props.beastData.description}
            title={this.props.beastData.title}
            rounded="true"
          />
        </Modal.Body>
        <Modal.Body className="ms-1">{this.props.beastData.description}</Modal.Body>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
      </Modal>
    );
  }
}

export default SelectedBeast;
