import { Divisor } from "@/components/Divisor/Divisor";

import { Header } from "@/sections/Home/components/Header/Header";
import { About } from "@/sections/Home/components/About/About";
import { MultiLanguage } from "@/sections/Home/components/MultiLanguage/MultiLanguage";

import { Jobs } from "./components/Jobs/Jobs";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { BackgroundPattern } from "@/components/BackgroundPattern/BackgroundPattern";

import styles from "./Home.module.scss";


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
