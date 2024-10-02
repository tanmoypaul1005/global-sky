"use client"
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CommonModal = ({ show, handleClose, title, children }) => {
  return (
    <div>
    <Modal  size="lg" show={true} dialogClassName="" onHide={handleClose}>
      <div className="modal-content">
        {children}
      </div>

    </Modal>
    </div>
  );
};

export default CommonModal;

