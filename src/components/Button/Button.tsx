import { HTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
