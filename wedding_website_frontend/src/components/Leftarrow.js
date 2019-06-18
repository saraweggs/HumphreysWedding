import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fas fa-angle-left"></i>
    </div>
  );
}

export default LeftArrow;
