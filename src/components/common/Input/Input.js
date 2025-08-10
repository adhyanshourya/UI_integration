import React from 'react';

const Input = ({ type = 'text', label, value, onChange, error, placeholder }) => {
  return (
    <div className='ui-input-wrapper'>
      {label && <label className='ui-input-label'>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`ui-input ${error ? 'ui-input--error' : ''}`}
      />
      {error && <span className='ui-input-error'>{error}</span>}
    </div>
  );
};

export default Input;