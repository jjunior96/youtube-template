import {
  CaretLeft,
  CaretRight,
  Clock,
  Gear,
  House,
  Package,
  Users
} from 'phosphor-react';

import ActiveLink from 'components/ActiveLink';

import * as S from './styles';

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <S.Container isOpen={isOpen}>
      <S.ButtonContainer>
        <button onClick={toggle} data-testid="toggle-layout">
          {isOpen ? <CaretRight /> : <CaretLeft />}
        </button>
      </S.ButtonContainer>

      <ul>
        <li>
          <ActiveLink href="/">
            <House /> <span>Home</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/products">
            <Package /> <span>Pedidos</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/users">
            <Users /> <span>Usuários</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="#">
            <Clock />
            <span>Agendamentos</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="#">
            <Gear /> <span>Configurações</span>
          </ActiveLink>
        </li>
      </ul>
    </S.Container>
  );
};

export default Sidebar;
