import axios from 'axios';

const API_KEY = 'bcf36fb2338735ea4909e57693c71e92';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const baseUrl = 'https://image.tmdb.org/t/p/w500';
export const defaultUrl =
  'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

// запрас на список самых популярных фильмов на сегодня для создания коллекции
// на главной странице.

export const getTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  const { results } = data;
  // console.log(results);
  return results;
};

//запрос о полной информации о фильме для страницы кинофильма
export async function getDetails(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(data);
  return data;
}

// запрос информации о актёрском составе для страницы кинофильма

export async function getMovieCast(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  const { cast } = data;
  // console.log(cast);
  return cast;
}

//запрос обзоров для страницы кинофильма

export async function getReview(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  const { results } = data;
  // console.log(results);
  return results;
}

// запрос на поиск кинофильма по ключевому слову на странице фильмов
//
export async function getMoviesQuery(query) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  const { results } = data;
  // console.log(results);
  return results;
}
