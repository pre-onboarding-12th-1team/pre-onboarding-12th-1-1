import { ComponentProps, FC } from 'react';

type Props = ComponentProps<'button'>;

const AuthButton: FC<Props> = ({ className, disabled, ...rest }) => (
  <button
    className={`${className} ${
      disabled ? 'bg-neutral-700 cursor-not-allowed' : 'bg-blue-400 cursor-pointer'
    } w-full h-10  text-white rounded-md `}
    type="submit"
    {...rest}
  />
);

export default AuthButton;
