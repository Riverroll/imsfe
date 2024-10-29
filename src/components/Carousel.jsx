import React from 'react';

function Carousel() {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          className="rounded-box" 
          alt="carousel-1"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          className="rounded-box" 
          alt="carousel-2"
        />
      </div>
    </div>
  );
}

export default Carousel;