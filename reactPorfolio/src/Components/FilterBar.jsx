import React, { useState } from 'react';

function Filter({ onFilter, darkMode }) {  
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleFilterChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    onFilter(region); 
  };

  return (
    <div className="w-[200px] sm:w-54 mx-auto mt-8 ml-4 sm:ml-10 sm:mr-10 border-none">
      <select
        value={selectedRegion}
        onChange={handleFilterChange}
        className={`block w-full mt-1 pl-3 pr-10 py-2 border-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-[14px] rounded-md shadow-md 
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
