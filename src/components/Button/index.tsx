import { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ type = 'button', children, ...rest }: ButtonProps) => {
  return (
    <>
      <button type={type} {...rest}>
        {children}
      </button>
    </>
  );
};

export const StyledButton = styled(Button).attrs((props) => ({
  type: props.type || 'button'
}))`
  border: none;
  background-color: #ddd;
`;
