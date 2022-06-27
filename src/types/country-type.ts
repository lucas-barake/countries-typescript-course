export type Country = {
  capital: string[];
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  subregion: string;
  borders: string[];
  currencies: {
    [currency: string]: {
      name: string;
      symbol: string;
    };
  };
  tld: string[];
  languages: {
    [language: string]: string;
  };
  cca3: string;
  cca2: string;
  ccn3: string;
  cioc: string;
};
