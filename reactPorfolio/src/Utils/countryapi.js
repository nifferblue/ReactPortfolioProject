import axios from 'axios'

export const getAllCountries = async()=>{
try {
  const response = await axios('https://restcountries.com/v3.1/all');
  const data = await response.data;
  console.log(data);
  return data;
} catch (error) {
  console.log(error)
}
}