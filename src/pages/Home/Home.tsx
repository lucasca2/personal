import { Divisor } from "@/components/Divisor/Divisor";

import { Header } from "@/pages/Home/components/Header/Header";
import { About } from "@/pages/Home/components/About/About";
import { MultiLanguage } from "@/pages/Home/components/MultiLanguage/MultiLanguage";

import styles from "@/pages/Home/Home.module.scss";
import { Jobs } from "./components/Jobs/Jobs";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { BackgroundPattern } from "@/components/BackgroundPattern/BackgroundPattern";

export const Home = () => {
  return (
    <>
      <BackgroundPattern direction="left" />
      <BackgroundPattern direction="right" />
      <main className={styles.wrapper}>
        <div className={styles.header}>
          <Divisor withLines>{`<html>`}</Divisor>

          <MultiLanguage />
          <Header />
        </div>

        <About />
        <Skills />
        <Jobs />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
