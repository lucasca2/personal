import { Animate } from "../Animate/Animate";
import { Icon } from "../Icon/Icon";
import styles from "./SocialMedias.module.scss";

export const SocialMedias = () => {
  return (
    <div className={styles.socialMedias}>
      <Animate animation="slideUp" delay={1}>
        <a
          href="https://www.instagram.com/lucascostamaral/"
          target="_blank"
          className={styles.instagram}
        >
          <Icon name="instagram" />
        </a>
      </Animate>
      <Animate animation="slideUp" delay={1.1}>
        <a
          href="https://wa.me/5548999184666"
          target="_blank"
          className={styles.whatsapp}
        >
          <Icon name="whatsapp" />
        </a>
      </Animate>
      <Animate animation="slideUp" delay={1.2}>
        <a
          href="https://github.com/lucasca2"
          target="_blank"
          className={styles.github}
        >
          <Icon name="github" />
        </a>
      </Animate>
      <Animate animation="slideUp" delay={1.3}>
        <a
          href="https://www.linkedin.com/in/lucasca/"
          target="_blank"
          className={styles.linkedin}
        >
          <Icon name="linkedin" />
        </a>
      </Animate>
    </div>
  );
};
