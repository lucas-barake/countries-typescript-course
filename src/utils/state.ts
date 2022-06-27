import { countryList, loadingContainer, loadingSpinner, submitButton } from './elements';

export function setState(
  state: 'Success' | 'Pending' | 'Failed',
  error?: { message: string; status: number },
) {
  switch (state) {
    case 'Pending':
      loadingSpinner.classList.remove('hidden');
      submitButton.disabled = true;
      return;
    case 'Success':
      loadingSpinner.classList.add('hidden');
      loadingContainer.innerHTML = '';
      submitButton.disabled = false;
      return;
    case 'Failed':
      loadingSpinner.classList.add('hidden');
      submitButton.disabled = false;
      if (!error) return;
      loadingContainer.innerHTML = `<p class="text-red-500 font-medium p-4">ERROR: ${error.message} - Status Code: ${error.status}</p>`;
      countryList.innerHTML = '';
      return;
    default:
      return;
  }
}
