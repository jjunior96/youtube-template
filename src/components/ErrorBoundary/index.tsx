import { ReactNode } from 'react';
import {
  ErrorBoundary as ErrorBoundaryLib,
  ErrorBoundaryProps as ErrorBoundaryLibProps
} from 'react-error-boundary';

export type ErrorBoundaryProps = {
  children: ReactNode;
} & ErrorBoundaryLibProps;

const ErrorBoundary = ({ children, ...rest }: ErrorBoundaryProps) => {
  return <ErrorBoundaryLib {...rest}>{children}</ErrorBoundaryLib>;
};

export default ErrorBoundary;
