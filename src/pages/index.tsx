import styled from 'styled-components';

import { Products } from 'components/Products';
import { Users } from 'components/Users';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -10rem;
  height: 100vh;
`;
const Content = styled.div`
  max-width: 60rem;
  margin: 0 auto;

  gap: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      <Content>
        <Users />
        <Products />
      </Content>
    </Container>
  );
}
