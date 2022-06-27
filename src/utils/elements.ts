function getElement(identifier: string) {
  const el = document.querySelector(identifier);
  if (!el) throw new Error(`Element ${identifier} not found`);
  return el;
}

export const formElement = getElement('form') as HTMLFormElement;
export const inputElement = getElement('input') as HTMLInputElement;
export const loadingContainer = getElement('#state') as HTMLDivElement;
export const loadingSpinner = getElement('#loading-spinner') as SVGElement;
export const countryList = getElement('#country-list') as HTMLDivElement;
export const submitButton = getElement('button[type=submit]') as HTMLButtonElement;
