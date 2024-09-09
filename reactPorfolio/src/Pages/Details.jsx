import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";

const Details = ({ countries, darkMode }) => {  
  const { id } = useParams();
  const navigate = useNavigate(); 

  const country = countries.find((country) => {
    return country.name.common === id;
  });

  if (!country) {
    return <div>Country not found</div>; 
  }

  const nativeNames = country.name.nativeName;
  const firstNativeName = nativeNames
    ? Object.values(nativeNames)[0].common
    : 'N/A'; 

  const currencies = country.currencies
    ? Object.values(country.currencies).map((currency) => currency.name).join(', ')
    : 'N/A';

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  const borderCountries = country.borders
    ? country.borders.map((borderCode) => {
        const borderCountry = countries.find((c) => c.cca3 === borderCode);
        return borderCountry ? borderCountry.name.common : null;
      }).filter(Boolean)
    : [];

  return (
    <div className={`min-h-screen p-5 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <button
        onClick={() => navigate(-1)}
        className={`mb-4 flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} rounded-md shadow-md`}
      >
        <IoArrowBackOutline height="40px" width="136px" /> {/* Back arrow icon */}
        Back
      </button>
      
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <span className="w-full md:w-1/2">
          <img src={country.flags.svg} alt={country.altSpellings[0]} className="w-[560px] h-[401px]" />
        </span>
        <div className="w-full md:w-1/2">
          <h1 className="text-[24px] md:text-[32px] font-extrabold">{country.name.common}</h1>
          <div className="flex flex-col md:flex-row gap-10 mt-5">
            <div className="text-[14px] md:text-[16px] flex flex-col gap-5">
              <p><b>Native Name:</b> {firstNativeName}</p>
              <p><b>Population:</b> {country.population.toLocaleString()}</p>
              <p><b>Region:</b> {country.region}</p>
              <p><b>Sub Region:</b> {country.subregion}</p>
              <p><b>Capital:</b> {country.capital?.[0] || 'N/A'}</p>
            </div>
            <div className="text-[14px] md:text-[16px] flex flex-col gap-5">
              <p><b>Top Level Domain:</b> {country.tld?.[0] || 'N/A'}</p>
              <p><b>Currencies:</b> {currencies}</p>
              <p><b>Languages:</b> {languages}</p>
            </div>
          </div>
          
          <div className="text-[14px] md:text-[16px] mt-5">
            <b>Border Countries:</b>
            <div className="flex flex-wrap gap-2 mt-2">
              {borderCountries.length > 0 ? (
                borderCountries.map((borderCountry, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
                  >
                    {borderCountry}
                  </button>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
