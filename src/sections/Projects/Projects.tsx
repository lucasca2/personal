import { Header } from "@/components/Header/Header";
import { MultiLanguage } from "@/components/MultiLanguage/MultiLanguage";
import { getDictionary } from "@/locale/actions";
import { Divisor } from "@/components/Divisor/Divisor";
import { Contact } from "../@common/Contact/Contact";
import { Footer } from "../@common/Footer/Footer";

import styles from "./Projects.module.scss";
import { Animate } from "@/components/Animate/Animate";

export const Projects = async () => {
  const dictionary = await getDictionary();

  return (
    <>
      <Divisor withLines>{`<${dictionary.home.sections.projects}>`}</Divisor>
      <MultiLanguage />
      <Header />

      <Animate animation="fadeIn" delay={1}>
        <div className={styles.soon}>{dictionary.projects.title}</div>
      </Animate>
      {/* <About /> */}

      <Contact />
      <Footer />
    </>
  );
};
