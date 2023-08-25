import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

const BlackButton = ({ children, ...rest }: Props) => (
  <button
    className="bg-black px-4 py-2 rounded-md text-white hover:brightness-110 inline-block"
    {...rest}
  >
    {children}
  </button>
);

export default BlackButton;
