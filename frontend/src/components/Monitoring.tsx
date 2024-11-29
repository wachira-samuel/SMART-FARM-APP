import React from 'react';

interface MonitoringCardProps {
  title: string;
  value: number | string;
  unit: string;
}

const MonitoringCard: React.FC<MonitoringCardProps> = ({ title, value, unit }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl font-semibold">
        {value} {unit}
      </p>
    </div>
  );
};

export default MonitoringCard;
