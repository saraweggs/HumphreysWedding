import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i class="fas fa-angle-left"></i>
    </div>
  );
}

export default LeftArrow;
