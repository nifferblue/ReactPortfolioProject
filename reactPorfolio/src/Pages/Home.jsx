import React, { useState } from 'react'

const Home = () => {

  const [countries,setCountries]=useState([]);

  useEffect(()=>{
    const getAllCountries = async()=>{
      try {
        const response = await axios('https://restcountries.com/v3.1/all');
        const data = await response.data;
      
       setCountries(data) ;
      
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
      };
    
    getAllCountries();
  
  },[])
  return (
    <div>
      <div>
        <SearchBar/>
        <FilterBar/>
      </div>
      <div>
        {
          countries.length >0 ? countries.map((country)=>{<card country={country}/>}): <h1>Country not found</h1>
        }
      </div>
    </div>
  )
}

export default Home
