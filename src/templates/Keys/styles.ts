import styled from 'styled-components';

import { theme } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #475569;
    font-family: 'Permanent Marker', cursive;
  }

  button {
    border: none;
    background-color: #6b21a8;
    color: ${theme.colors.white};
    padding: 0.8rem 1.6rem;
    width: 20rem;
    border-radius: 8px;

    & + button {
      margin-top: 1.6rem;
    }

    &:focus {
      outline: 3px solid #c084fc;
    }
  }
`;
