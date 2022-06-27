import { fetchGetQuery } from './api/fetch-get-query';
import { getQuery } from './store/get-query';
import { getLocalStorage } from './store/store';
// import { xmlGetQuery } from './api/xmlGetQuery';
// import { Country } from './types/country-type';
import { displayCountries } from './utils/countries';
import { formElement, inputElement } from './utils/elements';
import { setState } from './utils/state';
// import { setState } from './utils/state';

getLocalStorage();

formElement.onsubmit = async function (e: SubmitEvent) {
  e.preventDefault();
  // setState('Pending');

  /* XML */
  // xmlGetQuery(inputElement.value)
  //   .then((response) => {
  //     setState('Success');
  //     const countries = response as Country[];
  //     displayCountries(countries);
  //   })
  //   .catch((err) => {
  //     setState('Failed', err);
  //   });
  // try {
  //   const response = (await xmlGetQuery(inputElement.value)) as Country[];
  //   displayCountries(response);
  // } catch (error: any) {
  //   setState('Failed', error);
  // }

  /* FETCH */
  // try {
  //   const response = await fetchGetQuery(inputElement.value);
  //   displayCountries(response);
  //   setState('Success');
  // } catch (error: any) {
  //   setState('Failed', error);
  // }

  /* Custom Implementation -> local storage */
  const countries = getQuery(inputElement.value);
  if (countries.length === 0) return setState('Failed', { message: 'Error', status: 400 });
  displayCountries(countries);
};
