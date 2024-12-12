import { AboutCodeSection } from "./components/AboutCodeSection";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section id="section-about" className={styles.wrapper}>
      <AboutCodeSection />
    </section>
  );
};
