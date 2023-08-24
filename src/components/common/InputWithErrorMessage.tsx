import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  className?: string;
  isValidated: boolean;
  errorMessage: string;
}
const InputWithErrorMessage = ({
  className,
  isValidated,
  errorMessage,
  ...rest
}: Props) => (
  <>
    <input
      {...rest}
      className={`${className} shadow-md outline-none rounded-md w-full h-10 p-3`}
    />
    <span className="h-4 text-red-500">{isValidated ? '' : errorMessage}</span>
  </>
);

export default InputWithErrorMessage;
