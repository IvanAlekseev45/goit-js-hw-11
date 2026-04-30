import axios from 'axios';

export function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '55624991-a2117d86ae461cd98d0381121',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 21,
    },
  });
}
