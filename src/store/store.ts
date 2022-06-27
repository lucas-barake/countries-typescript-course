import { fetchGetAll } from '../api/fetch-get-all';
import { Country } from '../types/country-type';

export const COUNTRIES: Country[] = [];

export async function getLocalStorage() {
  const savedCountries = window.localStorage.getItem('countries');
  if (savedCountries) {
    COUNTRIES.push(...JSON.parse(savedCountries));
  } else {
    const countries = await fetchGetAll();
    window.localStorage.setItem('countries', JSON.stringify(countries));
  }
}
