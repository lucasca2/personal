"use client";

import { Button } from "@/components/Button/Button";
import { getDelay } from "@/components/CodeSection/utils";
import { CODE_PROFILE } from "@/pages/Home/components/Header/constants";

import styles from "./TranslateButton.module.scss";
import { CSSProperties } from "react";

export const TranslateButton = () => {
  const slideInDelay = getDelay(CODE_PROFILE);

  const variables = {
    ["--slide-in-delay"]: `${slideInDelay}s`,
  } as CSSProperties;

  return (
    <div className={styles.wrapper}>
      <Button style={variables} onClick={() => alert("OK")}>
        Translate to Human Language
      </Button>
    </div>
  );
};
