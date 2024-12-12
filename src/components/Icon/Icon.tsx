import { classNames } from "@/utils/classNames";
import styles from "./Icon.module.scss";
import { America } from "./icons/America";
import { Brazil } from "./icons/Brazil";

import { Github } from "./icons/Github";
import { Instagram } from "./icons/Instagram";
import { Linkedin } from "./icons/Linkedin";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";
import { Whatsapp } from "./icons/Whatsapp";
import { Node } from "./icons/Node";
import { React } from "./icons/React";
import { Close } from "./icons/Close";
import { Menu } from "./icons/Menu";

const icons = {
  instagram: Instagram,
  whatsapp: Whatsapp,
  linkedin: Linkedin,
  github: Github,

  brazil: Brazil,
  america: America,

  moon: Moon,
  sun: Sun,

  node: Node,
  react: React,

  close: Close,
  menu: Menu,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
};

export const Icon = ({ name, className: _className }: IconProps) => {
  const IconComponent = icons[name];

  const className = classNames(styles.icon, _className);

  return (
    <figure className={className}>
      <IconComponent />
    </figure>
  );
};
