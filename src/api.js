import axios from 'axios';

export async function serviceSearch(currentPage, inputValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    q: inputValue,
    page: currentPage,
    key: '38986631-ae11b42db00bd05f0f2571500',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}
