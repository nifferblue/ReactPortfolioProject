import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Pages/Main';
import Details from './Pages/Details';
import './index.css';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch countries');
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    // Apply dark mode classes to the entire app container
    <div className={`${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="w-full h-screen">
        <Routes>
          <Route exact path='/' element={<Main countries={countries} darkMode={darkMode} />} />
          <Route exact path='/countryDetails/:id' element={<Details countries={countries} darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
