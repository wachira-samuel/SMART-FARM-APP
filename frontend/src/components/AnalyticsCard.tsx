import React from 'react';

interface AnalyticsCardProps {
  title: string;
  value: number | string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, unit, trend }) => {
  const trendClass = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow mb-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">
        {value} {unit}
      </p>
      <p className={`text-sm ${trendClass} mt-2`}>
        {trend === 'up' && '↑ Improving'}
        {trend === 'down' && '↓ Declining'}
        {trend === 'stable' && '→ Stable'}
      </p>
    </div>
  );
};

export default AnalyticsCard;
