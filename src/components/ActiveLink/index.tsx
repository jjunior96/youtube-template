import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

import * as S from './styles';

const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as));

  return (
    <S.Container isActive={!!isCurrentPath}>
      <Link {...rest} href={href}>
        {children}
      </Link>
    </S.Container>
  );
};

export default ActiveLink;
