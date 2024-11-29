import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Device {
  deviceName: string;
  deviceType: string;
  status: string;
}

const AddDevice: React.FC = () => {
  const [deviceName, setDeviceName] = useState<string>('');
  const [deviceType, setDeviceType] = useState<string>('');
  const [status, setStatus] = useState<string>('active');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const newDevice: Device = { deviceName, deviceType, status };
      const response = await axios.post('http://localhost:5000/devices', newDevice);
      router.push('/devices');  
    } catch (err) {
      setError('Error creating device');
      setLoading(false);
    }
  };

  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'deviceName') {
      setDeviceName(value);
    } else if (name === 'deviceType') {
      setDeviceType(value);
    } else if (name === 'status') {
      setStatus(value);
    }
  };

  return (
    <div>
      <h1>Add New Device</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Device Name:</label>
          <input
            type="text"
            name="deviceName"
            value={deviceName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Device Type:</label>
          <input
            type="text"
            name="deviceType"
            value={deviceType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={status}
            onChange={handleInputChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Device...' : 'Create Device'}
        </button>
      </form>
    </div>
  );
};

export default AddDevice;
