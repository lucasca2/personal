"use client";
import { Animate } from "@/components/Animate/Animate";
import { CodeSection } from "@/components/CodeSection/CodeSection";
import { useMedia } from "@/hooks/useMedia";

import styles from "./AboutCodeSection.module.scss";

type AboutCodeSectionProps = {
  code: {
    mobile: string[];
    desktop: string[];
  };
};

export const AboutCodeSection = ({ code }: AboutCodeSectionProps) => {
  const { isMobile } = useMedia();

  return (
    <Animate animation="slideRight" className={styles.content} delay={0.5}>
      {({ inView }) => (
        <CodeSection
          shouldStart={inView}
          lines={isMobile ? code.mobile : code.desktop}
        />
      )}
    </Animate>
  );
};
