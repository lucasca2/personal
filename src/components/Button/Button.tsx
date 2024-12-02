import { HTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
