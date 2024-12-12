"use client";

import { Animate } from "@/components/Animate/Animate";
import { Dictionary } from "@/locale/dictionaries";
import Link from "next/link";

import styles from "./Menu.module.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { classNames } from "@/utils/classNames";
import { useMedia } from "@/hooks/useMedia";

type MenuProps = {
  dictionary: Dictionary["home"]["menu"];
};

type Section = "contact";

export const Menu = ({ dictionary }: MenuProps) => {
  const { isMobile } = useMedia();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleGoToSection = (section: Section) => {
    const sectionElement = document.querySelector(`#section-${section}`);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const is = (_route: "home" | "about-me" | "projects") => {
    const route = _route === "home" ? "" : _route;

    return pathname === `/${route}`;
  };

  const menuClassName = classNames(styles.wrapper, {
    [styles.open]: isMenuOpen,
  });

  const menuButtonClassName = classNames(styles.menuButton, {
    [styles.menuButton__open]: isMenuOpen,
  });

  return (
    <>
      <Animate
        animation="slideDown"
        className={styles.menuButtonWrapper}
        delay={0.8}
      >
        <button
          className={menuButtonClassName}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </button>
      </Animate>
      <div className={menuClassName}>
        {!is("home") && (
          <Animate
            animation="slideDown"
            className={styles.item}
            delay={isMobile ? 0.2 : 0.6}
          >
            <Link href="/">{dictionary.home}</Link>
          </Animate>
        )}

        {!is("about-me") && (
          <Animate
            animation="slideDown"
            className={styles.item}
            delay={isMobile ? 0.3 : 0.7}
          >
            <Link href="/about-me">{dictionary.about}</Link>
          </Animate>
        )}

        {!is("projects") && (
          <Animate
            animation="slideDown"
            className={styles.item}
            delay={isMobile ? 0.4 : 0.8}
          >
            <Link href="/projects">{dictionary.projects}</Link>
          </Animate>
        )}

        <Animate
          animation="slideDown"
          className={styles.item}
          delay={isMobile ? 0.5 : 0.9}
        >
          <a href="#" onClick={() => handleGoToSection("contact")}>
            {dictionary.contact}
          </a>
        </Animate>
      </div>
    </>
  );
};
