import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i class="fas fa-angle-right"></i>
    </div>
  );
}

export default RightArrow;
