'use client';

import * as S from './styles';

export const Header = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <S.Container isOpen={isOpen}>
        <div>
          <p>Logo</p>
        </div>
      </S.Container>
    </>
  );
};
