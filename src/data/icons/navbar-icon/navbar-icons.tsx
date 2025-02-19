interface IconsProps {
  className: string;
}

export const Home = ({ className }: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      width='24'
      fill='currentColor'
      aria-label='HomeIcon'
      className={className}
      viewBox='0 0 16 16'
    >
      <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z' />
      <path d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z' />
    </svg>
  );
};

export const Menu = ({ className }: IconsProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      height='24'
      width='24'
      strokeWidth='0'
      viewBox='0 0 24 24'
      aria-label='menu icon'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z'></path>
    </svg>
  );
};

export const About = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      height='1.5rem'
      width='1.5rem'
      strokeWidth='0'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3 4v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm8 3h2v2h-2V7zm0 4h2v6h-2v-6z'></path>
    </svg>
  );
};

export const Blog = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 20 20'
      aria-hidden='true'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z'></path>
      <path d='M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z'></path>
    </svg>
  );
};

export const Faq = ({ className }: IconsProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1.5rem'
      width='1.5rem'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.99 15c-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.54 1.25 1.25-.01.69-.54 1.26-1.25 1.26zm3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17-.16.29-.22.48-.22 1.41h-1.82c0-.49-.08-1.29.31-1.98.49-.87 1.42-1.39 1.96-2.16.57-.81.25-2.33-1.37-2.33-1.06 0-1.58.8-1.8 1.48l-1.65-.7C9.01 7.15 10.22 6 11.99 6c1.48 0 2.49.67 3.01 1.52.44.72.7 2.07.02 3.08z'></path>
    </svg>
  );
};

export const Contact = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z'></path>
    </svg>
  );
};
