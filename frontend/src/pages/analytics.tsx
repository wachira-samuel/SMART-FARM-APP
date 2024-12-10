import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import AnalyticsCard from '../components/AnalyticsCard';

const FarmOverview: React.FC = () => {
  
  const [temperature, setTemperature] = useState<number>(25);
  const [soilMoisture, setSoilMoisture] = useState<number>(45);
  const [cropYield, setCropYield] = useState<number>(120);
  const [weatherTrend, setWeatherTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const [moistureTrend, setMoistureTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const [yieldTrend, setYieldTrend] = useState<'up' | 'down' | 'stable'>('stable');

  useEffect(() => {
    const fetchFarmData = () => {
      const temp = Math.random() * 40; 
      const moisture = Math.random() * 100; 
      const yieldValue = Math.random() * 200;

      setTemperature(temp);
      setSoilMoisture(moisture);
      setCropYield(yieldValue);

      setWeatherTrend(temp > 30 ? 'down' : temp < 20 ? 'up' : 'stable');
      setMoistureTrend(moisture < 30 ? 'down' : moisture > 70 ? 'up' : 'stable');
      setYieldTrend(yieldValue > 150 ? 'up' : yieldValue < 50 ? 'down' : 'stable');
    };

    
    fetchFarmData();

    
    const interval = setInterval(fetchFarmData, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="p-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Farm Performance and Analytics</h1>
          <p className="text-xl text-gray-600">Monitor the performance of your farm and view important analytics.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnalyticsCard 
            title="Temperature" 
            value={temperature.toFixed(2)} 
            unit="°C" 
            trend={weatherTrend} 
          />
          <AnalyticsCard 
            title="Soil Moisture" 
            value={soilMoisture.toFixed(2)} 
            unit="%" 
            trend={moistureTrend} 
          />
          <AnalyticsCard 
            title="Crop Yield" 
            value={cropYield.toFixed(2)} 
            unit="kg/hectare" 
            trend={yieldTrend} 
          />
        </div>
      </main>
    </div>
  );
};

export default FarmOverview;
