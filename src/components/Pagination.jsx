// src/components/Pagination.jsx
import React from 'react';
import { Home, Dashboard, User, Settings, FileText } from 'lucide-react'; // Import the icons

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Icons for pagination
  const pageIcons = [
    <Home key="home" className="h-5 w-5" />,
    <Dashboard key="dashboard" className="h-5 w-5" />,
    <User key="user" className="h-5 w-5" />,
    <Settings key="settings" className="h-5 w-5" />,
    <FileText key="sales" className="h-5 w-5" />
  ];

  return (
    <ul className="menu menu-horizontal bg-base-200 rounded-box">
      {/* Page Number Icons */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <a
            onClick={() => onPageChange(index + 1)}
            className={currentPage === index + 1 ? 'btn btn-primary' : ''}
          >
            {pageIcons[index]} {/* Display the corresponding icon */}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
