// App.jsx
import React from 'react';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <MainLayout>
      <Dashboard />
      {/* You can add more components here if needed */}
    </MainLayout>
  );
}

export default App;
