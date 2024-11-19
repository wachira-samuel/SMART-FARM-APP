import React from 'react';
import NavBar from '../components/NavBar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashboardContent';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <DashboardHeader />
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;
