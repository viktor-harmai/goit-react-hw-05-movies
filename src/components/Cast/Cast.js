import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';

import Notification from 'components/Notification';

import {
  CastList,
  CastItem,
  CardCast,
  CardThump,
  CardContent,
  Image,
} from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const fetchData = async id => {
    try {
      const response = await API.getMovieCast(id);
      setCasts(response);
    } catch {
      const message = 'Oops, something went wrong ...';
      setError(message);
    }
  };
  const message = 'We dont have any information about cast of this movie';

  return (
    <CastList>
      {casts.length === 0 && <Notification message={message} />}

      {error ? (
        <Notification message={error} />
      ) : (
        <>
          {casts.map(({ id, character, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CardCast>
                  <CardThump>
                    {
                      <Image
                        src={
                          profile_path
                            ? API.baseUrl + profile_path
                            : API.defaultUrl
                        }
                        alt={name}
                        width="200"
                        height="200"
                      />
                    }
                  </CardThump>

                  <CardContent>
                    <p>{character}</p>
                    <p>{name}</p>
                  </CardContent>
                </CardCast>
              </CastItem>
            );
          })}
        </>
      )}
    </CastList>
  );
};

export default Cast;
