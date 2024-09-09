import React from 'react';

const Card = ({ country }) => {
  return (
    <div className='h-[300px] w-[264px] bg-white shadow-md rounded-lg mt-6 ml-10'>
      <div className='h-[160px] w-full overflow-hidden bg-lime-500 rounded-t-lg'>
       
        <img 
          src={country.flags.svg} 
          alt={country.flags.alt} 
          className='h-full w-full object-cover' 
        />
      </div>
      <div className='p-4'>
        <h4 className='text-[18px] font-semibold'>{country.name.common}</h4>
        <p className='text-[14px]'><b>Population:</b> {country.population.toLocaleString()}</p>
        <p className='text-[14px]'><b>Region:</b> {country.region}</p>
        <p className='text-[14px]'><b>Capital:</b> {country.capital?.[0] || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Card;
