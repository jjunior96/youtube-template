import * as S from './styles';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
