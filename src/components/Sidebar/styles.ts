import styled, { css } from 'styled-components';

import { theme } from 'styles';

const modifiers = {
  isOpen: () => css`
    width: 4rem;

    ul {
      display: flex;
      align-items: center;
    }

    li {
      align-items: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        &:visited {
          background-color: transparent !important;
        }
      }

      span {
        display: none;
      }
    }
  `
};

export const Container = styled.aside<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: fixed;
    height: 100vh;
    width: 10rem;
    background-color: ${theme.colors.neutral_200};
    transition: all 0.2s ease-in-out;
    top: 0;
    bottom: 0;

    z-index: ${theme.layers.alwaysOnTop};

    box-shadow: ${theme.box.shadow};

    button {
      border: none;
      color: ${theme.colors.neutral_500};
      background-color: ${theme.colors.neutral_400};

      width: fit-content;
      text-align: center;
      border-radius: 4px;
      padding: 0.2rem 0.5rem;

      transition: all 0.2s ease-in-out;

      &:focus-within {
        outline: 2px solid ${theme.colors.blue_100};
      }

      &:hover {
        background-color: ${theme.colors.blue_100};
        color: ${theme.colors.neutral_200};
        cursor: pointer;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin: 0;

      width: 100%;
    }

    li {
      list-style: none;
      width: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;

      display: flex;
      align-items: center;

      span {
        margin-left: 0.6rem;
        font-size: 14px;
      }

      a {
        display: flex;
        align-items: center;
        padding: 0.4rem 0.6rem;
      }

      svg {
        font-size: 16px;
        margin-right: 6px;
      }

      &:hover {
        cursor: pointer;
        background-color: ${theme.colors.blue_100};

        a {
          color: ${theme.colors.neutral_100} !important;
        }
      }

      & + li {
        margin-top: 0.4rem;
      }
    }

    ${isOpen && modifiers.isOpen()}
  `}
`;

export const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
