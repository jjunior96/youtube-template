import { useRouter } from 'next/router';

import * as S from './styles';

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary?: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const route = useRouter();

  const handlePushToHome = () => {
    route.push('/');
  };

  return (
    <S.Container role="alert">
      <S.Content>
        <S.Title>Something went wrong</S.Title>
        <S.Description>{error.message}</S.Description>

        <button onClick={resetErrorBoundary || handlePushToHome}>
          Try again
        </button>
      </S.Content>
    </S.Container>
  );
};

export default ErrorFallback;
