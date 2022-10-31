import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import * as API from 'services/api';
import {
  Container,
  ImgWrapper,
  Image,
  InfoWrap,
  NameTitle,
  Title,
  Text,
  LinkList,
  LinkItem,
  StyledNavLink,
} from './MovieInfo.styled';

const MovieInfo = ({ info }) => {
  const { title, genres, overview, poster_path, vote_average, release_date } =
    info;
  const location = useLocation();

  return (
    <>
      <Container>
        <ImgWrapper>
          <Image
            src={poster_path ? API.baseUrl + poster_path : API.defaultUrl}
            alt={title}
          />
        </ImgWrapper>

        <InfoWrap>
          <NameTitle>
            {title} ({release_date.slice(0, 4)})
          </NameTitle>

          <Title>User Score: &nbsp; {Math.round(vote_average) * 10}%</Title>

          <Title>Overview</Title>
          <Text>{overview}</Text>

          <Title>Genres</Title>
          <Text>{genres.map(genre => genre.name).join(', ')}</Text>

          <Title>Additional information</Title>

          <LinkList>
            <LinkItem>
              <StyledNavLink
                to="cast"
                state={{ from: location.state?.from ?? '/' }}
              >
                CAST
              </StyledNavLink>
            </LinkItem>
            <LinkItem>
              <StyledNavLink
                to="review"
                state={{ from: location.state?.from ?? '/' }}
              >
                REVIEW
              </StyledNavLink>
            </LinkItem>
          </LinkList>
        </InfoWrap>
      </Container>
      <Suspense fallback={Loader()}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
