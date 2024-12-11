"use client";

import { Button } from "@/components/Button/Button";

import { CSSProperties, useMemo } from "react";
import { useShouldHide } from "@/hooks/useShouldHide";
import { classNames } from "@/utils/classNames";

import styles from "./ButtonSection.module.scss";

type ButtonSectionProps = {
  onClick: () => void;
  shouldShow: boolean;
  showUpDelay: number;
  children: React.ReactNode;
};

export const ButtonSection = ({
  onClick,
  shouldShow,
  showUpDelay,
  children,
}: ButtonSectionProps) => {
  const { shouldHide, shouldRender } = useShouldHide({
    condition: !shouldShow,
    timeout: 300,
  });

  const className = useMemo(
    () => classNames(styles.wrapper, { [styles.hidden]: shouldHide }),
    [shouldHide]
  );

  if (!shouldRender) return;

  const variables = {
    ["--slide-in-delay"]: `${showUpDelay}s`,
  } as CSSProperties;

  if(!children) return null;

  return (
    <div className={className}>
      <Button style={variables} onClick={onClick} disabled={shouldHide}>
        {children}
      </Button>
    </div>
  );
};
