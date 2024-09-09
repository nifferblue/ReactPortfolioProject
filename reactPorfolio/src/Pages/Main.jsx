import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import Filter from '../Components/FilterBar';
import { Link } from 'react-router-dom';

function Main({ darkMode }) { 
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios('https://restcountries.com/v3.1/all');
        const data = await response.data;
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getAllCountries();
  }, []);

  // Function to handle search
  const handleSearch = (query) => {
    if (query) {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredCountries(countries);
    }
  };

  // Function to handle filter by region
  const handleFilter = (region) => {
    if (region) {
      setFilteredCountries(
        countries.filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
        )
      );
    } else {
      setFilteredCountries(countries);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-black' : 'bg-white text-gray-900'}>
      <div className="flex  gap-4 mb-8  sm:justify-center sm:items-center  justify-between place-items-center">
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter}  darkMode={darkMode}/>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {filteredCountries.map((country) => (
          <Link
            key={country.name.common}
            to={`/countryDetails/${country.name.common}`}
          >
           
            <Card country={country} />
         
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
