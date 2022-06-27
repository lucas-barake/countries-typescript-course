import { Country } from '../types/country-type';

export async function fetchGetOne(code: string): Promise<Country[]> {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const json = (await response.json()) as Country[];
  return json;
}
