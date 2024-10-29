import React, { useState } from 'react';
import Dashboard from '../pages/Dashboard.jsx'; // This path should be correct
import Pagination from './Pagination'; // This path is correct since Pagination is in the same folder

function MainLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <Dashboard currentPage={currentPage} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default MainLayout;
