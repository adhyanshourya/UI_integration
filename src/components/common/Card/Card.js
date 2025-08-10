import React from 'react';

const Card = ({ children, title, className }) => {
  return (
    <div className={`ui-card ${className || ''}`}>
      {title && <h3 className='ui-card-title'>{title}</h3>}
      <div className='ui-card-content'>
        {children}
      </div>
    </div>
  );
};

export default Card;