import styled, { css } from 'styled-components';

import { theme } from 'styles';

type LinkActivedProps = {
  isActive: boolean;
};

export const Container = styled.div<LinkActivedProps>`
  ${({ isActive }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      cursor: pointer;

      width: 100%;

      color: ${theme.colors.neutral_500};

      text-decoration: none;

      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.normal};

      transition: all 0.2s ease-in-out;
      font-size: ${theme.font.sizes.xxsmall};

      ${isActive &&
      css`
        background-color: ${theme.colors.blue_100};
        color: ${theme.colors.neutral_100};
      `}

      &:hover {
        background-color: ${theme.colors.blue_100};
      }
    }
  `}
`;
