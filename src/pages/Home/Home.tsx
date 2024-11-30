import { Divisor } from "@/components/Divisor/Divisor";

import { Header } from "@/pages/Home/components/Header/Header";
import { About } from "@/pages/Home/components/About/About";
import { MultiLanguage } from "@/pages/Home/components/MultiLanguage/MultiLanguage";

import styles from "@/pages/Home/Home.module.scss";

export const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <Divisor withLines>{`<html>`}</Divisor>

        <MultiLanguage />
        <Header />
      </div>

      <About />
    </main>
  );
};
