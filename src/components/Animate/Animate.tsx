"use client";
import { useInView } from "@/hooks/useInView";
import { classNames } from "@/utils/classNames";
import styles from "./Animate.module.scss";
import { CSSProperties, useEffect, useState } from "react";

export type AnimationTypes = "slideUp" | "slideRight" | "slideDown" | "fadeIn";

type AnimateProps = {
  children: React.ReactNode | ((props: { inView: boolean }) => React.ReactNode);
  animation: AnimationTypes;
  className?: string;
  delay?: number;
};

export const Animate = ({
  children,
  animation,
  delay = 0,
  className: _className,
}: AnimateProps) => {
  const { ref, inView: _inView } = useInView<HTMLDivElement>();
  const [inView, setInView] = useState(false);

  const className = classNames(_className, styles?.[`${animation}__initial`], {
    [styles?.[animation]]: _inView,
  });

  const style = {
    ["--animation-delay"]: `${delay}s`,
  } as CSSProperties;

  useEffect(() => {
    setTimeout(() => {
      setInView(_inView);
    }, delay * 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_inView]);

  return (
    <div ref={ref} className={className} style={style}>
      {typeof children === "function" ? children({ inView }) : children}
    </div>
  );
};
