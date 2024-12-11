"use client";

import { CodeSection } from "@/components/CodeSection/CodeSection";

import styles from "./CodeProfileSection.module.scss";
import { useMemo } from "react";
import { classNames } from "@/utils/classNames";
import { useShouldHide } from "@/hooks/useShouldHide";

type CodeProfileSectionProps = {
  code: string[];
  isHuman: boolean;
};

export const CodeProfileSection = ({
  isHuman,
  code,
}: CodeProfileSectionProps) => {
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
      <CodeSection lines={code} />
    </div>
  );
};
