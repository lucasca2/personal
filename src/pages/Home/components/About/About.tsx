import { Divisor } from "@/components/Divisor/Divisor";
import styles from "./About.module.scss";
import { AboutCodeSection } from "./components/AboutCodeSection";
import { getDictionary } from "@/locale/actions";

export const About = async () => {
  const dictionary = await getDictionary();

  return (
    <section id="section-about" className={styles.wrapper}>
      <Divisor withLines>{`<${dictionary?.home.sections.about}>`}</Divisor>
      <AboutCodeSection code={dictionary.home.about.code} />
    </section>
  );
};
