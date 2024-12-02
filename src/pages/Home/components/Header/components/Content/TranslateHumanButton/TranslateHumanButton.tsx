"use client";

import { Button } from "@/components/Button/Button";
import { getDelay } from "@/components/CodeSection/utils";
import { CODE_PROFILE_EN } from "@/pages/Home/components/Header/constants";

import { CSSProperties, useMemo } from "react";
import { useShouldHide } from "@/hooks/useShouldHide";
import { classNames } from "@/utils/classNames";

import styles from "./TranslateHumanButton.module.scss";
import { useMedia } from "@/hooks/useMedia";

type TranslateHumanButtonProps = {
  onClick: () => void;
  isHuman: boolean;
};

export const TranslateHumanButton = ({
  onClick,
  isHuman,
}: TranslateHumanButtonProps) => {
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

  const slideInDelay = getDelay(
    isMobile ? CODE_PROFILE_EN.mobile : CODE_PROFILE_EN.desktop
  );

  const variables = {
    ["--slide-in-delay"]: `${slideInDelay}s`,
  } as CSSProperties;

  return (
    <div className={className}>
      <Button style={variables} onClick={onClick} disabled={shouldHide}>
        Translate to Human Language
      </Button>
    </div>
  );
};
