import { HTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "@/utils/classNames";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
};

export const Button = ({
  children,
  disabled,
  isLoading = false,
  className: _className,
  ...props
}: ButtonProps) => {
  const className = classNames(_className, styles.button, {
    [styles.button__loading]: isLoading,
  });

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
