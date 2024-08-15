// NodeContext.jsx
import React, { createContext, useState } from 'react';

export const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (node) => {
    setSelectedNode(node);
    setIsModalOpen(true);
    console.log("Modal opened, isModalOpen:", isModalOpen);  // Debugging output
  };

  const closeModal = () => {
    setSelectedNode(null);
    setIsModalOpen(false);
    console.log("Modal closed, isModalOpen:", isModalOpen);  // Debugging output
  };

  const updateNodeLabel = (label) => {
    if (selectedNode) {
      selectedNode.label = label;
      setSelectedNode({ ...selectedNode });
    }
  };

  return (
    <NodeContext.Provider value={{ selectedNode, isModalOpen, openModal, closeModal, updateNodeLabel }}>
      {children}
    </NodeContext.Provider>
  );
};
