import styled, { css } from 'styled-components';

const modifiers = {
  isOpen: () => css`
    padding-left: 4rem;
  `
};

export const Content = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    padding-left: 10rem;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: calc(100vh - 40px);

    transition: all 0.2s ease-in-out;

    ${isOpen && modifiers.isOpen()}
  `}
`;
