import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphCard = ({ graphType }) => {
  console.log("GraphCard rendered with graphType:", graphType); // Debug log

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div className="card bg-secondary text-primary-content shadow-lg transition-transform duration-300 hover:scale-300 w-50 h-50 flex flex-col items-center justify-center"> {/* Adjusted for centering */}
      <div className="card-body flex flex-col items-center justify-center w-full h-full"> {/* Added flex properties for centering */}
        <h2 className="card-title">Graph</h2>
        <div className="flex justify-center w-full h-full"> {/* Center the graph */}
          {graphType === 'line' && <Line data={data} options={{ responsive: true }} />}
          {graphType === 'bar' && <Bar data={data} options={{ responsive: true }} />}
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
