import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) return;

  clearGallery();
  showLoader();
  getImagesByQuery(inputValue)
    .then(({ data: { hits } }) => {
      if (hits.length === 0) {
        iziToast.error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(hits);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
}
