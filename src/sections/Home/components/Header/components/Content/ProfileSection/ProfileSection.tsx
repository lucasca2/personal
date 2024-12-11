import { useShouldHide } from "@/hooks/useShouldHide";
import styles from "./ProfileSection.module.scss";
import { classNames } from "@/utils/classNames";
import { useMemo } from "react";
import { useDictionary } from "@/locale/useDictionary";

type ProfileSectionProps = {
  isHuman: boolean;
};

export const ProfileSection = ({ isHuman }: ProfileSectionProps) => {
  const { dictionary } = useDictionary();
  
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
      <span className={styles.age}>{dictionary?.home.profile.age}</span>
      <p>{dictionary?.home.profile.position}</p>
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
