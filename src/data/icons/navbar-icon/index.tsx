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
  size?: number;
}

const NavIcon = ({ kind, size = 8 }: NavIconProps) => {
  const NavSvg = components[kind];

  if (!NavSvg) {
    return null;
  }

  return <NavSvg className={`px-0 hover:text-[#ff0000]`} />;
};

export default NavIcon;
