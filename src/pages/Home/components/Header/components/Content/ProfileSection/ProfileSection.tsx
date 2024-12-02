import { useShouldHide } from "@/hooks/useShouldHide";
import styles from "./ProfileSection.module.scss";
import { classNames } from "@/utils/classNames";
import { useMemo } from "react";

type ProfileSectionProps = {
  isHuman: boolean;
};

export const ProfileSection = ({ isHuman }: ProfileSectionProps) => {
  const { shouldHide, shouldRender } = useShouldHide({
    condition: !isHuman,
    timeout: 300,
  });

  const className = useMemo(
    () => classNames(styles.wrapper, { [styles.hidden]: shouldHide }),
    [shouldHide]
  );

  if (!shouldRender) return;

  return (
    <div className={className}>
      <h1>Lucas Costa Amaral</h1>
      <span className={styles.age}>27 years old</span>
      <p>Senior Front End Developer</p>
      <div className={styles.wrapperTechnologies}>
        <div className={styles.technology}>
          <span>React.JS</span>
        </div>
        <div className={styles.technology}>
          <span>React Native</span>
        </div>
        <div className={styles.technology}>
          <span>Node.JS</span>
        </div>
      </div>
    </div>
  );
};
