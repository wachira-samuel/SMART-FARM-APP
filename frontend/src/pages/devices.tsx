import axios from 'axios';
import { useState, useEffect } from 'react';


interface Device {
  _id: string;
  deviceName: string;
  deviceType: string;
  status: string;
}

const Devices = () => {
  const [devices, setDevices] = useState<Device[]>([]); // Array of Device objects
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch devices from backend API
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get<Device[]>('http://localhost:5000/devices'); // Type the response
        setDevices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  if (loading) return <div>Loading devices...</div>;

  return (
    <div>
      <h1>Device List</h1>
      {devices.length === 0 ? (
        <p>No devices found</p>
      ) : (
        <ul>
          {devices.map((device) => (
            <li key={device._id}>
              <h3>{device.deviceName}</h3>
              <p>Type: {device.deviceType}</p>
              <p>Status: {device.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Devices;
