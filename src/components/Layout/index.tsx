import { useCallback, useState } from 'react';

import { Header } from 'components/Header';
import Sidebar from 'components/Sidebar';

import * as S from './styles';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Header isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={handleToggle} />

      <S.Content isOpen={isOpen}>{children}</S.Content>
    </>
  );
};
