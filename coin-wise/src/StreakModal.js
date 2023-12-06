import React, { useState } from 'react';
import './StreakModal.css';

const StreakModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    'Days without spending: 0 days',
    'Days without eating out: 0 days',
    'Days without using credit card : 0 days',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle button-none" onClick={toggleDropdown}>
        {selectedOption || 'Select a streak to keep track of'}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StreakModal;
