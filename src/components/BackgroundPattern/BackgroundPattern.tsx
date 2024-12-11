import { classNames } from "@/utils/classNames";

import { Left } from "./Left";
import { Right } from "./Right";

import styles from "./BackgroundPattern.module.scss";
import { Animate } from "../Animate/Animate";

const BACKGROUNDS = {
  left: Left,
  right: Right,
};

type BackgroundPatternProps = {
  direction: keyof typeof BACKGROUNDS;
};

export const BackgroundPattern = ({ direction }: BackgroundPatternProps) => {
  const Background = BACKGROUNDS[direction];

  const className = classNames(styles.background, {
    [styles.left]: direction === "left",
    [styles.right]: direction === "right",
  });

  return (
    <Animate animation="fadeIn" className={className}>
      <Background />
    </Animate>
  );
};
