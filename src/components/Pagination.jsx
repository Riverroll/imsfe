// src/components/Pagination.jsx
import React from 'react';
import { Home, BarChart2, User, Settings, DollarSign } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Define the icons corresponding to each "page"
  const icons = [<Home />, <BarChart2 />, <User />, <Settings />, <DollarSign />];

  return (
    <div className="flex justify-center mt-4">
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        {/* Icon Buttons */}
        {icons.slice(0, totalPages).map((icon, index) => (
          <li key={index}>
            <a
              onClick={() => onPageChange(index + 1)}
              className={currentPage === index + 1 ? 'btn btn-primary' : 'btn'}
            >
              {React.cloneElement(icon, { className: 'h-5 w-5' })}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
