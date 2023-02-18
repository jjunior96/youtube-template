import { InputHTMLAttributes, useId } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, type = 'text', ...rest }: InputProps) => {
  return (
    <>
      <input type={type} name={name} {...rest} />
    </>
  );
};

type InputWithLabelProps = InputProps & {
  label: string;
};

export const InputWithLabel = ({ label, ...rest }: InputWithLabelProps) => {
  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <Input id={inputId} {...rest} />
    </>
  );
};
