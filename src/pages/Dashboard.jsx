import React, { useState } from 'react';
import GraphCard from '../components/GraphCard.jsx';
import TableCard from '../components/TableCard.jsx';

const Dashboard = () => {
  const [selectedGraphType] = useState('line'); // Keep state for graph type

  return (
    <div className="relative flex flex-col p-3 h-screen">
      <h1 className='flex justify-center p-3 text-lg'>Dashboard Page</h1>
      {/* Graphs Section */}
      <div className="flex flex-row gap-20 flex-1 items-center overflow-hidden justify-center mb-0"> {/* Add margin-bottom here */}
        <GraphCard graphType={selectedGraphType} />
        <GraphCard graphType={selectedGraphType} />
        <GraphCard graphType={selectedGraphType} />
      </div>
      {/* Table Card */}
      <div className="flex-1 gap-0 overflow-auto">
        <TableCard />
      </div>
    </div>
  );
};

export default Dashboard;
