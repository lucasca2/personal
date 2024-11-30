import { Divisor } from "@/components/Divisor/Divisor";
import styles from "./About.module.scss";
import { CodeSection } from "@/components/CodeSection/CodeSection";

export const About = () => {
  return (
    <section className={styles.wrapper}>
      <Divisor withLines>{`<about-me>`}</Divisor>
      <div className={styles.content}>
        <CodeSection
          lines={[
            "Hey, I’m Lucas, 27 years old, living in Tubarão, SC, Brazil, and I’m a developer.",
            "My journey into programming took an unexpected turn back in 2015 when I dropped out of psychology,",
            "And started a technical course in programming, mainly to keep myself busy.",
            "Since then, I‘ve developed this new addiction to coding.",
          ]}
        />
      </div>
    </section>
  );
};
