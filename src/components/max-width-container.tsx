import clsx from 'clsx';
import { ReactNode } from 'react';

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <section
      className={clsx(
        'mx-auto max-w-4xl px-2 sm:px-6 xl:max-w-6xl xl:px-0',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthContainer;
