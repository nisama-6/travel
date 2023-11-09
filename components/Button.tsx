import React from 'react';
import { twMerge } from 'tailwind-merge';
interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit';
}

const Button = (props: ButtonProps) => {
  const { className, children, type } = props;

  return (
    <button
      className={twMerge(
        'flexCenter gap-3 rounded-full  px-8 py-4 font-bold',
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
