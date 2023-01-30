import styled from 'styled-components';

import { theme } from 'styles';

export const Container = styled.div`
  width: 100%;
  width: 40rem;
  background-color: ${theme.colors.neutral_100};
  border: 1px solid ${theme.colors.neutral_300};
  border-radius: 8px;
  box-shadow: ${theme.box.shadow};
`;

export const Content = styled.div`
  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #4b5563;
    margin-bottom: 1.6rem;
    font-size: 3.2rem;
  }

  p {
    color: #6b7280;
    font-size: 1.8rem;
    text-align: center;

    margin-top: 1.6rem;
  }

  button {
    border: none;

    padding: 0.8rem 1.2rem;
    background-color: #a855f7;
    color: ${theme.colors.neutral_100};
    border-radius: 8px;

    width: 100%;
    transition: all 0.2s ease-in-out;
    font-size: 1.6rem;
    line-height: 1.4;

    & + button {
      margin-top: 1.2rem;
    }

    &:hover {
      box-shadow: 0 4px 8px #c084fc;
      background-color: #7e22ce;
    }
  }
`;
