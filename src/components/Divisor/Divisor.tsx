import { classNames } from "@/utils/classNames";
import styles from "./Divisor.module.scss";
import { Animate } from "../Animate/Animate";

type DivisorProps = {
  children: React.ReactNode;
  withLines?: boolean;
};

export const Divisor = ({ children, withLines = false }: DivisorProps) => {
  const className = classNames(styles.wrapper, {
    [styles.withLines]: withLines,
  });

  return (
    <Animate animation="slideDown" className={className}>
      {children}
    </Animate>
  );
};
