import { Avatar } from "@/components/Avatar/Avatar";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Content } from "./components/Content/Content";

import styles from "./Header.module.scss";
import { getDictionary } from "@/locale/actions";
import { Animate } from "@/components/Animate/Animate";
import { SocialMedias } from "@/components/SocialMedias/SocialMedias";
import { Menu } from "./components/Menu/Menu";

export const Header = async () => {
  const {
    home: { menu },
  } = await getDictionary();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Animate animation="slideRight" delay={0.5}>
          <Avatar
            src={"/lucas.jpeg"}
            alt="Profile image"
            priority
            className={styles.avatar}
          />
        </Animate>

        <div className={styles.menu}>
          <Menu dictionary={menu}/>
          <Animate animation="slideDown" className={styles.item} delay={0.9}>
            <ThemeToggle />
          </Animate>
        </div>
      </div>
      <Content />
      <div className={styles.bottom}>
        <SocialMedias />
      </div>
    </div>
  );
};
