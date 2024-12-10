import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashboardContent';

const Dashboard: React.FC = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
