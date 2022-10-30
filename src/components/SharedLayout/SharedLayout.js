import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';

import { Container, Header, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>

      <Suspense fallback={Loader()}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
