import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options }) => {
  return (
    <div className="Buttons">
      {options.map(({ name, func }) => (
        <button key={name} type="button" className="Button" onClick={func}>
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, func: PropTypes.func }),
  ).isRequired,
};

export default FeedbackOptions;
