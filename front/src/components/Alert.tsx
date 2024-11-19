import React from 'react';

interface AlertProps {
  message: string;
  severity: 'low' | 'medium' | 'high';
}

const Alert: React.FC<AlertProps> = ({ message, severity }) => {
  const getAlertClass = () => {
    switch (severity) {
      case 'low':
        return 'bg-yellow-300 text-yellow-800';
      case 'medium':
        return 'bg-orange-400 text-orange-800';
      case 'high':
        return 'bg-red-600 text-red-100';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className={`p-4 rounded-md ${getAlertClass()} mb-4`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
