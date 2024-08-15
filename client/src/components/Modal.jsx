// Modal.jsx
import React, { useContext, useState, useEffect } from 'react';
import { NodeContext } from './NodeContext';

const Modal = () => {
  const { selectedNode, isModalOpen, closeModal, updateNodeLabel } = useContext(NodeContext);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (selectedNode) {
      setLabel(selectedNode.label);
    }
  }, [selectedNode]);

  useEffect(() => {
    console.log("Modal component rendered, isModalOpen:", isModalOpen); // Debugging output
  }, [isModalOpen]);

  const handleSave = () => {
    updateNodeLabel(label);
    closeModal();
  };

  if (!isModalOpen) return null;  // If the modal isn't open, it won't render

  return (
    <div className="modal show fade" tabIndex="-1" role="dialog" style={modalStyles.overlay}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">Edit Text</h5>
            <button type="button" className="close btn" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <textarea 
              value={label} 
              onChange={(e) => setLabel(e.target.value)} 
              className="form-control" 
              style={{ height: '200px' }} 
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    zIndex: 1050,
  },
};

export default Modal;
