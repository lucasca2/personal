"use client";

import { Divisor } from "@/components/Divisor/Divisor";
import styles from "./About.module.scss";
import { CodeSection } from "@/components/CodeSection/CodeSection";
import { ABOUT_ME_EN } from "./constants";
import { useMedia } from "@/hooks/useMedia";

export const About = () => {
  const { isMobile } = useMedia();

  return (
    <section className={styles.wrapper}>
      <Divisor withLines>{`<about-me>`}</Divisor>
      <div className={styles.content}>
        <CodeSection
          lines={isMobile ? ABOUT_ME_EN.mobile : ABOUT_ME_EN.desktop}
        />
      </div>
    </section>
  );
};
