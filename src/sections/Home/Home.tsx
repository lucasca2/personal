import { Contact } from "../@common/Contact/Contact";
import { Footer } from "../@common/Footer/Footer";

import { HomeHeader as Header } from "./components/Header/Header";
import { Jobs } from "./components/Jobs/Jobs";
import { Skills } from "./components/Skills/Skills";

export const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Jobs />
      <Contact />
      <Footer />
    </>
  );
};
