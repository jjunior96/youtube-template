import styled, { css } from 'styled-components';

const modifiers = {
  isOpen: () => css`
    padding-left: 4rem;
  `
};

export const Container = styled.header<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: fixed;
    height: 40px;
    width: 100%;
    top: 0;

    padding-left: 10rem;

    transition: all 0.2s ease-in-out;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 24px;
      background-color: #f7f7f7;

      box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);

      p {
        font-weight: 400;
        color: #2396fe;
        font-family: 'Roboto', sans-serif;
      }
    }

    ${isOpen && modifiers.isOpen()}
  `}
`;
