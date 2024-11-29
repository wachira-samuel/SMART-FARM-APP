// src/components/DashboardContent.tsx
import React, { useState, useEffect } from 'react';

interface FarmData {
  moistureLevel: string;
  temperature: string;
  humidity: string;
}

const DashboardContent: React.FC = () => {
  const [farmData, setFarmData] = useState<FarmData | null>(null);

  useEffect(() => {
    // Mock API call to fetch farm data (can replace with actual API)
    const fetchFarmData = async () => {
      const data = await new Promise<FarmData>((resolve) =>
        setTimeout(() => {
          resolve({
            moistureLevel: (Math.random() * 100).toFixed(2),
            temperature: (Math.random() * 35).toFixed(2),
            humidity: (Math.random() * 100).toFixed(2),
          });
        }, 1000)
      );
      setFarmData(data);
    };

    fetchFarmData();
  }, []);

  return (
    <div className="p-4">
      {farmData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">Moisture Level</h3>
            <p className="text-2xl">{farmData.moistureLevel}%</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">Temperature</h3>
            <p className="text-2xl">{farmData.temperature}°C</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">Humidity</h3>
            <p className="text-2xl">{farmData.humidity}%</p>
          </div>
        </div>
      ) : (
        <div>Loading farm data...</div>
      )}
    </div>
  );
};

export default DashboardContent;
