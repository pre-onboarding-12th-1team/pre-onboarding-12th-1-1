import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  text: string;
  onClickEvent?: () => void;
}

const BalckButton = ({ text, onClickEvent }: Props) => (
  <button
    className="bg-black px-4 py-2 rounded-md text-white hover:brightness-110 inline-block"
    onClick={onClickEvent}
  >
    {text}
  </button>
);

export default BalckButton;
