import Image from "next/image";

import styles from "./Avatar.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export const Avatar = ({ src, alt, priority }: AvatarProps) => {
  return (
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      width={256}
      height={256}
      priority={priority}
    />
  );
};
