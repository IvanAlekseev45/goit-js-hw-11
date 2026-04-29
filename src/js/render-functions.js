import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const result = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}">
          </a>
          <div class="description-div">
            <p class="likes">${likes}</p>
            <p class="views">${views}</p>
            <p class="comments">${comments}</p>
            <p class="downloads">${downloads}</p>
          </div>
        </li>`;
      }
    )
    .join('');

  gallery.innerHTML = result;

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
