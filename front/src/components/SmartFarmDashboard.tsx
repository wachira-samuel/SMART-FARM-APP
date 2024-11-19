import React, { useEffect, useState } from "react";

interface SensorData {
  temperature: number;
  humidity: number;
  soilMoisture: number;
}

const SmartFarmDashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [irrigationStatus, setIrrigationStatus] = useState<boolean>(false);

  // Mock fetching sensor data
  useEffect(() => {
    const fetchSensorData = async () => {
      // Replace this with your actual API call
      const mockData: SensorData = {
        temperature: 26.5,
        humidity: 70,
        soilMoisture: 55,
      };
      setSensorData(mockData);
    };

    fetchSensorData();
    const interval = setInterval(fetchSensorData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleIrrigation = () => {
    setIrrigationStatus((prev) => !prev);
    // Add API call to control the irrigation system
    console.log("Irrigation toggled:", !irrigationStatus);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>SmartFarm Dashboard</h1>
      <p>
        Welcome to your SmartFarm dashboard! Here you can track real-time sensor
        data, control irrigation systems, and view analytics to optimize your
        farming operations.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Real-Time Sensor Data */}
        <div style={{ border: "1px solid #ddd", padding: "15px" }}>
          <h2>Real-Time Sensor Data</h2>
          {sensorData ? (
            <ul>
              <li>Temperature: {sensorData.temperature}°C</li>
              <li>Humidity: {sensorData.humidity}%</li>
              <li>Soil Moisture: {sensorData.soilMoisture}%</li>
            </ul>
          ) : (
            <p>Loading sensor data...</p>
          )}
        </div>

        {/* Irrigation System Control */}
        <div style={{ border: "1px solid #ddd", padding: "15px" }}>
          <h2>Irrigation Control</h2>
          <p>Status: {irrigationStatus ? "ON" : "OFF"}</p>
          <button
            onClick={toggleIrrigation}
            style={{
              padding: "10px 20px",
              backgroundColor: irrigationStatus ? "#ff4d4f" : "#4caf50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {irrigationStatus ? "Turn Off" : "Turn On"}
          </button>
        </div>

        {/* Analytics Overview */}
        <div style={{ border: "1px solid #ddd", padding: "15px" }}>
          <h2>Analytics</h2>
          <p>View detailed insights on crop performance, water usage, and more!</p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartFarmDashboard;
