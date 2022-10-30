import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { StyledLink, Item, Image, Info, Title, Vote } from './MovieItem.styled';

const MovieItem = ({ id, title, src, vote }) => {
  const location = useLocation();

  return (
    <Item>
      <div>
        <StyledLink
          to={`/movies/${id}`}
          state={{
            from: location.pathname + location.search,
          }}
        >
          <Image src={src} alt={title} />
          <Info>
            <Title>{title.toUpperCase()}</Title>
            <Vote>{vote}</Vote>
          </Info>
        </StyledLink>
      </div>
    </Item>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};
