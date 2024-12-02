import { Avatar } from "@/components/Avatar/Avatar";
import { Icon } from "@/components/Icon/Icon";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Content } from "./components/Content/Content";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Avatar
          src={"/lucas.jpeg"}
          alt="Profile image"
          priority
          className={styles.avatar}
        />

        <div className={styles.menu}>
          {/* <span className={styles.item}>About me</span>
          <span className={styles.item}>Jobs</span>
          <span className={styles.item}>Contact</span> */}
          <span className={styles.item}>
            <ThemeToggle />
          </span>
        </div>
      </div>
      <Content />
      <div className={styles.bottom}>
        <a
          href="https://www.instagram.com/lucascostamaral/"
          target="_blank"
          className={styles.instagram}
        >
          <Icon name="instagram" />
        </a>
        <a
          href="https://wa.me/5548999184666"
          target="_blank"
          className={styles.whatsapp}
        >
          <Icon name="whatsapp" />
        </a>
        <a
          href="https://github.com/lucasca2"
          target="_blank"
          className={styles.github}
        >
          <Icon name="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasca/"
          target="_blank"
          className={styles.linkedin}
        >
          <Icon name="linkedin" />
        </a>
      </div>
    </div>
  );
};
