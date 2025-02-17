import { FC, MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const CustomLink: FC<CustomLinkProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'outline-jmb-red hover:text-jmb-red rounded-md transition-all focus-visible:rounded-sm focus-visible:outline-1',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
