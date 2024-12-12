"use client";

import { Icon } from "@/components/Icon/Icon";
import styles from "./MultiLanguage.module.scss";
import { classNames } from "@/utils/classNames";
import { useDictionary } from "@/locale/useDictionary";
import { Animate } from "@/components/Animate/Animate";

export const MultiLanguage = () => {
  const { setLocale, locale } = useDictionary();

  return (
    <div className={styles.wrapper}>
      <Animate animation="slideDown" delay={1}>
        <button
          onClick={() => setLocale("pt")}
          className={classNames(styles.button, {
            [styles.isActive]: locale === "pt",
          })}
        >
          <Icon name="brazil" />
        </button>
      </Animate>
      <Animate animation="slideDown" delay={1}>
        <button
          onClick={() => setLocale("en")}
          className={classNames(styles.button, {
            [styles.isActive]: locale === "en",
          })}
        >
          <Icon name="america" />
        </button>
      </Animate>
    </div>
  );
};
