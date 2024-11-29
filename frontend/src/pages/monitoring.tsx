import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MonitoringCard from '../components/Monitoring';
import Alert from '../components/Alert';

const RealTimeMonitoring: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(22);
  const [soilMoisture, setSoilMoisture] = useState<number>(40);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const temp = Math.random() * 40;
      const moisture = Math.random() * 100;

      setTemperature(temp);
      setSoilMoisture(moisture);

    
      let newAlerts: string[] = [];

      if (temp > 35) newAlerts.push('High temperature alert! (Above 35°C)');
      if (moisture < 30) newAlerts.push('Low soil moisture alert! (Below 30%)');

      setAlerts(newAlerts);
    };

    const interval = setInterval(fetchData, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Real-Time Monitoring</h1>
        
        {/* Display alerts */}
        {alerts.length > 0 &&
          alerts.map((alert, index) => (
            <Alert key={index} message={alert} severity="high" />
          ))}

        {/* Monitoring data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <MonitoringCard title="Temperature" value={temperature.toFixed(2)} unit="°C" />
          <MonitoringCard title="Soil Moisture" value={soilMoisture.toFixed(2)} unit="%" />
        </div>
      </main>
    </div>
  );
};

export default RealTimeMonitoring;
