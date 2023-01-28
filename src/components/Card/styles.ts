import styled from 'styled-components';

import { theme } from 'styles';

export const Container = styled.div`
  width: fit-content;
  height: 10rem;
  background-color: ${theme.colors.neutral_100};
  border: 1px solid ${theme.colors.neutral_300};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  padding: 2.4rem;
`;
