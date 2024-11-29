import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';  // Import useRouter for navigation
import '../styles/globals.css';

const HomePage: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Event handler to navigate to the registration page
  const handleRegister = () => {
    router.push('/register'); // Replace with your actual registration path
  };

  // Event handler to navigate to the login page
  const handleLogin = () => {
    router.push('/login'); // Replace with your actual login path
  };

  return (
    <>
      <Head>
        <title>SmartFarm - Homepage</title>
        <meta name="description" content="Welcome to SmartFarm, your gateway to precision agriculture." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-green-100 min-h-screen">
        <NavBar />

        <header className="bg-green-500 text-white text-center py-20">
          <h1 className="text-5xl font-extrabold">Welcome to SmartFarm</h1>
          <p className="mt-4 text-lg">
            Your gateway to precision agriculture and smart monitoring.
          </p>
          <button
            className="mt-6 px-6 py-2 bg-white text-green-500 font-bold rounded hover:bg-green-100"
            onClick={handleRegister} // Trigger handleRegister on click
          >
            Register
          </button>
        </header>

        <section className="mt-12 px-6">
          <h2 className="text-3xl font-bold text-center">Why Choose SmartFarm?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
              <p className="mt-2 text-gray-600">
                Monitor your fields in real-time and get alerts for any abnormal conditions.
              </p>
            </div>
            
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-semibold">Advanced Analytics</h3>
              <p className="mt-2 text-gray-600">
                Gain insights into your farm's performance with detailed analytics.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-green-700 text-white text-center py-10">
          <h2 className="text-3xl font-bold">Start Your Smart Farming Journey Today</h2>
          <p className="mt-4">Join thousands of farmers using SmartFarm for smarter agriculture.</p>
          <button
            className="mt-6 px-6 py-2 bg-white text-green-700 font-bold rounded hover:bg-green-100"
            onClick={handleLogin}
          >
            Log In
          </button>
        </section>

        <footer className="mt-16 bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} SmartFarm. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
