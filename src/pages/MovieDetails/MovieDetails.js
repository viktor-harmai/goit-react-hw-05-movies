import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as API from 'services/api';

import MovieInfo from 'components/MovieInfo';
import Notification from 'components/Notification';
import Button from 'components/Button';
import { Container, BtnWrapper } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const fetchData = async id => {
    try {
      const response = await API.getDetails(id);
      setMovie(response);
    } catch {
      const message = 'Oops, something went wrong ...';
      setError(message);
    }
  };

  const onBackBtnClick = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <main>
      <Container>
        {error ? (
          <Notification message={error} />
        ) : (
          <>
            {movie && (
              <>
                <BtnWrapper>
                  <Button onClick={onBackBtnClick} />
                </BtnWrapper>
                <MovieInfo info={movie} />
              </>
            )}
          </>
        )}
      </Container>
    </main>
  );
};

export default MovieDetails;
