"use client";
import { CodeSection } from "@/components/CodeSection/CodeSection";
import { useMedia } from "@/hooks/useMedia";

import { useMemo } from "react";
import { useDictionary } from "@/locale/useDictionary";
import { Animate } from "@/components/Animate/Animate";

import styles from "./AboutCodeSection.module.scss";

export const AboutCodeSection = () => {
  const { isMobile } = useMedia();
  const { dictionary } = useDictionary();

  const code = useMemo(() => {
    if (isMobile) return dictionary?.home.about.code.mobile || [];

    return dictionary?.home.about.code.desktop || [];
  }, [isMobile, dictionary]);

  return (
    <Animate animation="slideRight" className={styles.content} delay={1}>
      <CodeSection lines={code} />
    </Animate>
  );
};
