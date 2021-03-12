import { API_KEY } from '../config/api';
export const searchGifs = ({ search }) => {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=e`)
  .then((res) => res.json())
  .then((json) => {
    const { data } = json;
    return data.map((img) => ({
      id: img.id,
      url: img.images.original.url
    }));
  })
  .catch((e) => console.error(e));
};

export const trendingGifs = () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`)
  .then((res) => res.json())
  .then((json) => {
    const { data } = json;
    return data.map((img) => ({
      id: img.id,
      url: img.images.original.url
    }));
  })
  .catch((e) => console.error(e));
};

export default {
  searchGifs,
  trendingGifs,
};