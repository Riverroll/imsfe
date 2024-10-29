import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

function MainLayout({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Adjust as needed
  const [isScrolling, setIsScrolling] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Render the child component here, allowing it to grow */}
      <div className="flex-grow">{children}</div>

      {/* Pagination at the bottom */}
      <footer className={`absolute bottom-0 left-0 w-full p-4 transition-opacity ${isScrolling ? 'opacity-50' : 'opacity-100'} transition-all`}>
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </footer>
    </div>
  );
}

export default MainLayout;
