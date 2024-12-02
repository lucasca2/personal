"use client";

import { Button } from "@/components/Button/Button";

import { CSSProperties, useMemo } from "react";
import { useShouldHide } from "@/hooks/useShouldHide";
import { classNames } from "@/utils/classNames";

import styles from "./GoBackButton.module.scss";

type GoBackButtonProps = {
  onClick: () => void;
  isHuman: boolean;
};

export const GoBackButton = ({ onClick, isHuman }: GoBackButtonProps) => {
  const { shouldHide, shouldRender } = useShouldHide({
    condition: !isHuman,
    timeout: 300,
  });

  const className = useMemo(
    () => classNames(styles.wrapper, { [styles.hidden]: shouldHide }),
    [shouldHide]
  );

  if (!shouldRender) return;

  const slideInDelay = 1;

  const variables = {
    ["--slide-in-delay"]: `${slideInDelay}s`,
  } as CSSProperties;

  return (
    <div className={className}>
      <Button style={variables} onClick={onClick} disabled={shouldHide}>
        Go Back
      </Button>
    </div>
  );
};
