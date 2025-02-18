import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

const Button = ({
  className,
  children,
  variant = 'primary',
  size = 'md',
  href = '/',
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'transform cursor-pointer rounded-md font-extrabold transition-all duration-300 ease-in-out active:scale-95',
        {
          // 🌟 Primary button styles with smooth hover transition
          'bg-jmb-red md:hover:border-jmb-red text-white shadow-md md:hover:border-2 md:hover:bg-red-400 md:hover:text-black md:hover:shadow-lg':
            variant === 'primary',

          // 🌟 Secondary button styles with color & shadow transition
          'border-jmb-red border-2 text-black shadow-md md:shadow-gray-300/50 md:hover:border-amber-400 md:hover:bg-amber-300 md:hover:shadow-lg':
            variant === 'secondary',
        },
        {
          // ✅ Responsive sizes: different for mobile & larger screens
          'px-3 py-1 text-sm md:px-4 md:py-2 md:text-base': size === 'sm',
          'px-4 py-2 text-base md:px-6 md:py-3 md:text-lg': size === 'md',
          'px-5 py-3 text-lg md:px-8 md:py-4 md:text-xl': size === 'lg',
        },
        className, // Allow additional custom styles
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
