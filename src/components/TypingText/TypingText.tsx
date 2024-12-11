import { CSSProperties, HTMLAttributes } from "react";
import styles from "./TypingText.module.scss";
import { classNames } from "@/utils/classNames";

type TypingTextProps = HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
  width: number;
  duration: number;
  delay?: number;
  shouldStart?: boolean;
};

export const TypingText = ({
  children,
  className: _className,
  width,
  duration,
  delay = 0,
  shouldStart = true,
  ...props
}: TypingTextProps) => {
  const className = classNames(
    styles.typing,
    styles.typing_animation__initial,
    _className,
    {
      [styles.typing_animation]: shouldStart,
    }
  );

  const variables = {
    ["--typing-length"]: width,
    ["--typing-width"]: `${width}ch`,
    ["--typing-duration"]: `${duration}s`,
    ["--typing-delay"]: `${delay}s`,
  } as CSSProperties;

  return (
    <span className={className} style={variables} {...props}>
      {children}
    </span>
  );
};
