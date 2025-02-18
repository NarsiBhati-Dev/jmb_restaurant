import { Menu, Home, About, Blog, Faq } from './navbar-icons';

const components = {
  menu: Menu,
  home: Home,
  about: About,
  blog: Blog,
  faq: Faq,
};

export type Kind = keyof typeof components;

interface NavIconProps {
  kind: Kind;
}

const NavIcon = ({ kind }: NavIconProps) => {
  const NavSvg = components[kind];

  if (!NavSvg) {
    return null;
  }

  return <NavSvg className={`hover:text-jmb-red px-0`} />;
};

export default NavIcon;
