import { Country } from '../types/country-type';

export async function fetchGetAll() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const json = (await response.json()) as Country[];
  return json;
}
