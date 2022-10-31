import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from 'services/api';

import Searchbar from 'components/Searchbar';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import Notification from 'components/Notification';

import { Container } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const userQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (userQuery === '') return;
    fetchData(userQuery);
  }, [userQuery]);

  const fetchData = async query => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await API.getMoviesQuery(query.toLowerCase());

      if (response.length === 0) {
        const message =
          'Search Failure. There is no movies for your query. Please enter other query.';
        setError(message);
      }

      setMovies(response);
    } catch {
      const message = 'Oops, something went wrong ...';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchbarSubmit = newQuery => {
    if (query.toLowerCase() !== newQuery.toLowerCase()) {
      setSearchParams({ query: newQuery });
      setQuery(newQuery);
    }
    if (query.trim() === '') {
      const message = 'Field cannot be empty!';
      setError(message);
      // console.log(query);
    }
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearchbarSubmit} />

      {error ? (
        <Notification message={error} />
      ) : (
        <Container>
          {isLoading && <Loader />}

          {movies.length > 0 && (
            <>
              <MovieGallery movies={movies} />
            </>
          )}
        </Container>
      )}
    </main>
  );
};

export default Movies;
