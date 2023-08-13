const API_KEY = '37352949-d51cc3913c6f19a152f1908cc'; 
const BASE_URL = 'https://pixabay.com/api/'; 

export default async function fetchGallery(filter, page) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${filter}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.log(error.message);
  }
}

