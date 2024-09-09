import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch2 = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mx-auto mt-8 w-[343px] ml-4 sm:w-full max-w-md">
      <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        value={query}
        onChange={handleSearch2}
        name="search"
        className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] border-none bg-white shadow-md"
        placeholder="Search for a country ..."
      />
    </div>
  );
}

export default SearchBar;
