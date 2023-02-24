import styled from 'styled-components';

import { theme } from 'styles';

export const Container = styled.div`
  width: 100%;

  > div {
    border: 1px solid ${theme.colors.neutral_400};
    box-shadow: ${theme.box.shadow};
    border-radius: 0.8rem;

    width: 100%;
    max-width: 30rem;

    padding: 2.4rem 3.2rem;
    margin: 0 auto;

    margin-top: 2.4rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      font-family: 'Permanent Marker', cursive;
      color: ${theme.colors.blue_110};
    }
  }

  form {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    input {
      width: 100%;
      height: 1.8rem;
      font-size: 1.2rem;
      margin-top: 1.2rem;

      padding: 0.4rem 1.6rem;
      border-radius: 0.4rem;
      border: 1px solid ${theme.colors.neutral_400};

      &::placeholder {
        color: ${theme.colors.neutral_500};
      }

      &:focus-within {
        outline: 2px solid ${theme.colors.blue_90};
      }
    }

    p {
      display: flex;
      justify-content: flex-start;
      font-size: 14px;
      width: 100%;
      margin-top: 0.6rem;
      color: ${theme.colors.red_110};
    }

    button {
      width: 100%;
      margin-top: 1.4rem;

      height: 3rem;

      border: none;
      border-radius: 0.4rem;
      background-color: ${theme.colors.blue_110};
      color: ${theme.colors.neutral_100};

      &:focus-within {
        outline: 2px solid ${theme.colors.blue_90};
      }

      &[type='button'],
      .add {
        background-color: red;
        margin-top: 0;
        background-color: ${theme.colors.green_100};
        width: fit-content;
      }
    }
  }
`;

export const BillContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 0;

    background-color: red;
  }
`;
