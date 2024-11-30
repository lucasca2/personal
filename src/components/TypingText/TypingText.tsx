import { CSSProperties, HTMLAttributes } from "react";
import styles from "./TypingText.module.scss";
import { classNames } from "@/utils/classNames";

type TypingTextProps = HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
  width: number;
  duration: number;
  delay?: number;
};

export const TypingText = ({
  children,
  className: _className,
  width,
  duration,
  delay = 0,
  ...props
}: TypingTextProps) => {
  const className = classNames(styles.typing, _className);

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
