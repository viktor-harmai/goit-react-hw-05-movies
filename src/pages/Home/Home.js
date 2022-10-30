import { useEffect, useState } from 'react';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import Notification from 'components/Notification/Notification';
import { Container, Title } from './Home.styled';
import * as API from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await API.getTrending();
      setMovies(response);
    } catch {
      const message = 'Oops, something went wrong ...';
      setError(message);
    }
  };

  return (
    <main>
      {error ? (
        <Notification message={error} />
      ) : (
        <Container>
          <Title>Trending today</Title>
          <MovieGallery movies={movies} />
        </Container>
      )}
    </main>
  );
};

export default Home;
