import React from 'react';
import Carousel from '../components/Carousel.jsx'; // This path should be correct

function Dashboard({ currentPage }) {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
    </div>
  );
}

export default Dashboard; // Ensure this line is present
