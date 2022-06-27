import { Country } from '../types/country-type';

export async function fetchGetQuery(query: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);

  if (response.status === 200) {
    const jsonResponse = (await response.json()) as Country[];
    console.log(jsonResponse);
    return Promise.resolve(jsonResponse);
  }

  return Promise.reject({
    message: 'No countries match the specified query',
    status: response.status,
  });
}
