import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { MovieList } from './MovieGallery.styled';

const MovieGallery = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(({ id, title, poster_path, vote_average }) => {
        const base_url = 'https://image.tmdb.org/t/p/w500';
        return (
          <MovieItem
            key={id}
            id={id}
            src={base_url + poster_path}
            title={title}
            vote={vote_average}
          >
            {title}
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MovieGallery;

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ),
};
