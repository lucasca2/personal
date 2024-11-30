import styles from "./Icon.module.scss";
import { America } from "./icons/America";
import { Brazil } from "./icons/Brazil";

import { Github } from "./icons/Github";
import { Instagram } from "./icons/Instagram";
import { Linkedin } from "./icons/Linkedin";
import { Whatsapp } from "./icons/Whatsapp";

const icons = {
  instagram: Instagram,
  whatsapp: Whatsapp,
  linkedin: Linkedin,
  github: Github,

  brazil: Brazil,
  america: America,
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
};

export const Icon = ({ name }: IconProps) => {
  const IconComponent = icons[name];

  return (
    <figure className={styles.icon}>
      <IconComponent />
    </figure>
  );
};
