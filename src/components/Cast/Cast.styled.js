import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const CastItem = styled.li``;

export const CardCast = styled.div`
  background-color: var(--primary-white-color);
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;

export const CardThump = styled.div`
  border-radius: 4px 4px 0 0;
  object-fit: cover;
`;

export const Image = styled.img`
  border-radius: 4px 4px 0 0;
  object-fit: contain;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  padding: 10px;
`;
