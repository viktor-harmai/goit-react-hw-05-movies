import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
`;

export const ImgWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 360px;
  height: 450px;
  border-radius: 4px;
`;

export const InfoWrap = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const NameTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 15px;
`;

export const LinkList = styled.ul`
  display: flex;

  gap: 20px;
`;
export const LinkItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 100px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    color: orangered;
  }
`;
