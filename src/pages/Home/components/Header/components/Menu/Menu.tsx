"use client";

import { Animate } from "@/components/Animate/Animate";
import { Dictionary } from "@/locale/dictionaries";

import styles from "./Menu.module.scss";

type MenuProps = {
  dictionary: Dictionary["home"]["menu"];
};

type Section = "about" | "jobs" | "contact";

export const Menu = ({ dictionary }: MenuProps) => {
  const handleGoToSection = (section: Section) => {
    const sectionElement = document.querySelector(`#section-${section}`);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Animate animation="slideDown" className={styles.item} delay={0.6}>
        <a href="#" onClick={() => handleGoToSection("about")}>
          {dictionary.about}
        </a>
      </Animate>
      <Animate animation="slideDown" className={styles.item} delay={0.7}>
        <a href="#" onClick={() => handleGoToSection("jobs")}>
          {dictionary.jobs}
        </a>
      </Animate>
      <Animate animation="slideDown" className={styles.item} delay={0.8}>
        <a href="#" onClick={() => handleGoToSection("contact")}>
          {dictionary.contact}
        </a>
      </Animate>
    </>
  );
};
