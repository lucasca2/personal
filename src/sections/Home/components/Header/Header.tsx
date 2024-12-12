import { Content } from "./components/Content/Content";

import { SocialMedias } from "@/components/SocialMedias/SocialMedias";
import { MultiLanguage } from "@/components/MultiLanguage/MultiLanguage";
import { Divisor } from "@/components/Divisor/Divisor";
import { Header } from "@/components/Header/Header";

import styles from "./Header.module.scss";

export const HomeHeader = () => {
  return (
    <div className={styles.header}>
      <Divisor withLines>{`<html>`}</Divisor>
      <MultiLanguage />
      <Header />
      <div className={styles.wrapper}>
        <Content />
        <div className={styles.bottom}>
          <SocialMedias />
        </div>
      </div>
    </div>
  );
};
