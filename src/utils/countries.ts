// import { fetchGetOne } from '../api/fetch-get-one';
import { getOne } from '../store/get-one';
import { Country } from '../types/country-type';
import { countryList, formElement } from './elements';

export function displayCountries(countries: Country[]): void {
  countryList.innerHTML = '';
  countries.forEach((country: Country) => {
    const div = document.createElement('div');
    div.className = 'flex flex-col bg-neutral-900 w-72 shadow-lg rounded-lg';

    div.insertAdjacentHTML(
      'beforeend',
      `<img
            class="rounded-t-lg"
            src="${country.flags.svg}"
      />
      <div class="flex flex-col pl-6 py-4 gap-1">
        <h1 class="text-sm font-medium">${country.name.common}</h1>
        <p class="font-light text-xs">
          <span class="font-medium">Population:</span> ${country.population}
        </p>
        <p class="font-light text-xs"><span class="font-medium">Region:</span> ${country.region}</p>
        <p class="font-light text-xs"><span class="font-medium">Capital:</span> ${country.capital}</p>
      </div>`,
    );

    const learnMoreButton = document.createElement('button');
    learnMoreButton.onclick = () => setLearnMore(country);
    learnMoreButton.className = 'text-xs font-medium self-end px-6 py-4 hover:animate-pulse';
    learnMoreButton.textContent = 'Learn more →';
    learnMoreButton.type = 'button';

    div.appendChild(learnMoreButton);

    countryList.appendChild(div);
  });
}

function setLearnMore(country: Country): void {
  const {
    capital,
    flags: { svg },
    region,
    population,
    name: { common },
    subregion,
    currencies,
    tld: topLevelDomain,
    languages,
    borders,
  } = country;
  countryList.innerHTML = '';
  formElement.innerHTML = '';

  const button = document.createElement('button');
  button.textContent = '← Back';
  button.className = 'px-2 py-1 bg-[#2b3743] font-medium text-xs shadow-md rounded-md';
  button.onclick = () => location.reload();
  countryList.appendChild(button);

  const img = document.createElement('img');
  img.src = svg;
  countryList.appendChild(img);

  countryList.insertAdjacentHTML(
    'beforeend',
    `<h1>${common}</h1>
    <p class="text-sm font-light"><span class="font-medium">Native Name:</span> ${common}</p>
    <p class="text-sm font-light"><span class="font-medium">Population:</span> ${population.toLocaleString()}</p>
    <p class="text-sm font-light"><span class="font-medium">Region:</span> ${region}</p>
    <p class="text-sm font-light"><span class="font-medium">Sub Region:</span> ${subregion}</p>
    <p class="text-sm font-light"><span class="font-medium">Capital:</span> ${capital}</p>
    <p class="text-sm font-light"><span class="font-medium">Top Level Domain:</span> ${topLevelDomain}</p>
    <p class="text-sm font-light"><span class="font-medium">Currencies:</span> ${
      Object.keys(currencies)[0]
    }</p>
    <p class="text-sm font-light">
      <span class="font-medium">Languages:</span> ${Object.keys(languages).join(', ').toUpperCase()}
    </p>`,
  );

  const borderContainer = document.createElement('div');
  borderContainer.className = 'grid items-center grid-cols-4 gap-2';

  borders.forEach((border: string) => {
    const borderButton = document.createElement('button');
    borderButton.type = 'button';
    borderButton.className = 'px-2 py-1 bg-[#2b3743] font-medium text-xs shadow-md rounded-md';
    borderButton.textContent = border;
    borderButton.onclick = async function () {
      // const country = await fetchGetOne(border);
      const country = getOne(border);
      setLearnMore(country[0]);
    };
    borderContainer.appendChild(borderButton);
  });

  countryList.appendChild(borderContainer);
}
