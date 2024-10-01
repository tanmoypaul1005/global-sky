"use client"
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CommonModal = ({ show, handleClose, title, children }) => {
  return (
    <Modal  size="lg" show={true} dialogClassName="" onHide={handleClose}>
      {/* <Modal.Body>
        <div> */}
        {children}
        {/* </div>
      </Modal.Body> */}

    </Modal>
  );
};

export default CommonModal;

