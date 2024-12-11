"use client";
import Image from "next/image";

import styles from "./CompanyLogo.module.scss";
import { classNames } from "@/utils/classNames";
import { ForwardedRef, forwardRef } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export const CompanyLogo = forwardRef(
  (
    { src, alt, priority, className: _className }: AvatarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const className = classNames(styles.image, _className);

    return (
      <div className={styles.wrapper} ref={ref}>
        <Image
          className={className}
          src={src}
          alt={alt}
          width={256}
          height={256}
          quality={100}
          priority={priority}
        />
      </div>
    );
  }
);

CompanyLogo.displayName = "CompanyLogo";
