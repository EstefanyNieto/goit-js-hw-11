export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY ='41001278-ab85bdcea235b1b93f5dc3ba5';

export const options = {
  params: {
    key:API_KEY,
    q: '',
    image_type:'photo',
    orientation: 'horizontal',
    safesearch: true,
    page:1,
    per_page:40,
  },
};