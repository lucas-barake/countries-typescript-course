import { Country } from '../types/country-type';
import { COUNTRIES } from './store';

export function getOne(code: string): Country[] {
  if (!isNaN(+code)) {
    return COUNTRIES.filter((el: Country) => el.ccn3 === code);
  }

  if (code.length === 2) {
    return COUNTRIES.filter((el: Country) => el.cca2 === code);
  }

  const country = COUNTRIES.filter((el: Country) => el.cca3 === code);
  return country.length === 1 ? country : COUNTRIES.filter((el: Country) => el.cioc === code);
}
