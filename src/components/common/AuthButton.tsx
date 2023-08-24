import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

const AuthButton = ({ className, disabled, ...rest }: Props) => (
  <button
    className={`${className} ${
      disabled ? 'bg-neutral-700 cursor-not-allowed' : 'bg-black cursor-pointer'
    } w-full h-10  text-white rounded-md `}
    type="submit"
    {...rest}
  />
);

export default AuthButton;
