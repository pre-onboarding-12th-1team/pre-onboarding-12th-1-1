import { ComponentProps, FC } from 'react';

type Props = ComponentProps<'button'>;

const BlackButton: FC<Props> = ({ children, ...rest }) => (
  <button
    className="bg-black px-4 py-2 rounded-md text-white hover:brightness-110 inline-block"
    {...rest}
  >
    {children}
  </button>
);

export default BlackButton;
