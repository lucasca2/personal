import { Icon } from "@/components/Icon/Icon";
import styles from "./MultiLanguage.module.scss";
import { classNames } from "@/utils/classNames";

export const MultiLanguage = () => {
  return (
    <div className={styles.wrapper}>
      <button
        className={classNames(styles.button, {
          [styles.isActive]: false,
        })}
      >
        <Icon name="brazil" />
      </button>
      <button
        className={classNames(styles.button, {
          [styles.isActive]: true,
        })}
      >
        <Icon name="america" />
      </button>
    </div>
  );
};
