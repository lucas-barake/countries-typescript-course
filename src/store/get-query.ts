import { COUNTRIES } from './store';

export function getQuery(query: string) {
  return COUNTRIES.filter((country) => country.name.common.includes(query));
}
