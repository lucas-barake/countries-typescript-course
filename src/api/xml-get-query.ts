import { Country } from '../types/country-type';

export function xmlGetQuery(query: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${query}`);
    request.send();

    // receive the request
    request.onload = function () {
      // OK -> status code of 200
      if (request.status === 200) {
        const countries = JSON.parse(request.response) as Country[];
        resolve(countries);
      }

      reject({ message: 'No countries match the specified query', status: request.status });
    };
  });
}
