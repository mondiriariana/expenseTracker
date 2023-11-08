// StreakModal.js

import React from 'react';
import Modal from 'react-modal';
import './StreakModal.css';

const StreakModal = ({ isOpen, onRequestClose, input1, input2, setInput1, setInput2 }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Streak Modal"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>Add Streaks</h2>
        <button className="close-button" onClick={onRequestClose}>X</button>
      </div>
      <div className="modal-content">
        <label htmlFor="streakType">Streak Type:</label>
        <input
          type="text"
          id="streakType"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <label htmlFor="streakDays">Streak Days:</label>
        <input
          type="number"
          id="streakDays"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className="modal-buttons">
        <button className="cancel" onClick={onRequestClose}>Cancel</button>
        <button className="submit" onClick={() => { 
          // Handle your submit logic here
          console.log("Streak Type:", input1);
          console.log("Streak Days:", input2);
          onRequestClose();
        }}>Submit</button>
      </div>
    </Modal>
  );
};

export default StreakModal;
