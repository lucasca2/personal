"use client";

import { CodeSection } from "@/components/CodeSection/CodeSection";
import { CODE_PROFILE_EN } from "../../../constants";

import styles from "./CodeProfileSection.module.scss";
import { useMemo } from "react";
import { classNames } from "@/utils/classNames";
import { useShouldHide } from "@/hooks/useShouldHide";
import { useMedia } from "@/hooks/useMedia";

type CodeProfileSectionProps = {
  isHuman: boolean;
};

export const CodeProfileSection = ({ isHuman }: CodeProfileSectionProps) => {
  const { isMobile } = useMedia();
  const { shouldHide, shouldRender } = useShouldHide({
    condition: isHuman,
    timeout: 300,
  });

  const className = useMemo(
    () => classNames(styles.wrapper, { [styles.hidden]: shouldHide }),
    [shouldHide]
  );

  if (!shouldRender) return;

  return (
    <div className={className}>
      <CodeSection lines={isMobile ? CODE_PROFILE_EN.mobile : CODE_PROFILE_EN.desktop} />
    </div>
  );
};
