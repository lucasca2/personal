"use client";

import { Icon, IconName } from "@/components/Icon/Icon";
import styles from "./Technology.module.scss";
import { classNames } from "@/utils/classNames";
import dayjs from "dayjs";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useDictionary } from "@/locale/useDictionary";

type TechnologyProps = {
  icon: IconName;
  name: string;
  yearsExperience: number;
  className?: string;
};

export const Technology = ({
  icon,
  name,
  yearsExperience,
  className: _className,
}: TechnologyProps) => {
  const { dictionary } = useDictionary();
  const { ref: cardRef, inView } = useInView<HTMLDivElement>();
  const developerExperience = dayjs().diff("2017-01-01", "year");

  const className = classNames(styles.wrapper, _className, {
    [styles.inView]: inView,
  });

  const handleOnMouseMove = useCallback((e: MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * 2.5;
      const rotateY = ((x - centerX) / centerX) * 2.5;

      const maxRotation = 10;
      const limitedRotateX = Math.max(
        -maxRotation,
        Math.min(maxRotation, rotateX)
      );
      const limitedRotateY = Math.max(
        -maxRotation,
        Math.min(maxRotation, rotateY)
      );

      cardRef.current.style.animation = "none";
      cardRef.current.style.opacity = "1";
      cardRef.current.style.transform = `perspective(1500px) rotateX(${limitedRotateX}deg) rotateY(${limitedRotateY}deg)`;
    }
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        window.addEventListener("mousemove", handleOnMouseMove);
      }, 1000);

      return () => window.removeEventListener("mousemove", handleOnMouseMove);
    }
  }, [inView, handleOnMouseMove]);

  return (
    <div className={className} ref={cardRef}>
      <div className={styles.header}>
        <Icon name={icon} />
        <p>{name}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.progress}>
          {Array.from({ length: developerExperience }).map((_, index) => {
            const barClassName = classNames(styles.bar, {
              [styles.isActive]: index < yearsExperience,
            });

            return <div key={index} className={barClassName} />;
          })}
        </div>
        <span>
          {yearsExperience} {dictionary?.common.years}
        </span>
      </div>
    </div>
  );
};
