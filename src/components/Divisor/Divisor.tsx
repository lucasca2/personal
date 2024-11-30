import { classNames } from "@/utils/classNames";
import styles from "./Divisor.module.scss";

type DivisorProps = {
  children: React.ReactNode;
  withLines?: boolean;
};

export const Divisor = ({ children, withLines = false }: DivisorProps) => {
  const className = classNames(styles.wrapper, {
    [styles.withLines]: withLines,
  });

  return <div className={className}>{children}</div>;
};
