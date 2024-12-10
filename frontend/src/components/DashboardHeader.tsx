import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <h1 className="text-3xl font-bold text-green-700">SmartFarm Dashboard</h1>
      <p className="text-blue-500">View an overview of your farm's performance and analytics.</p>
    </header>
  );
};

export default DashboardHeader;
