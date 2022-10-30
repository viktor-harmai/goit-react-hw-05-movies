import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  /* background-color: black; */

  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 30px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  &.active {
    color: orangered;
    /* font-size: 40px; */
  }
`;
