import React from 'react';

const DashboardContent: React.FC = () => {
  return (
    <section className="p-6 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <p className="text-gray-700">
        Welcome to your SmartFarm dashboard! Here you can track real-time sensor data, control
        irrigation systems, and view analytics to optimize your farming operations.
      </p>
      
    </section>
  );
};

export default DashboardContent;
