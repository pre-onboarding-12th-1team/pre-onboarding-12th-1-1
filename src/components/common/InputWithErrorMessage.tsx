import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'input'> {
  isValidated: boolean;
  errorMessage: string;
}

const InputWithErrorMessage: FC<Props> = ({
  value,
  className,
  isValidated,
  errorMessage,
  ...rest
}) => (
  <>
    <input
      {...rest}
      className={`${className} shadow-md outline-none rounded-md w-full h-10 p-3`}
    />
    <span className="h-4 text-red-500">{!value || isValidated ? '' : errorMessage}</span>
  </>
);

export default InputWithErrorMessage;
