import { Header } from "@/components/Header/Header";
import { MultiLanguage } from "@/components/MultiLanguage/MultiLanguage";
import { About } from "./components/About/About";
import { getDictionary } from "@/locale/actions";
import { Divisor } from "@/components/Divisor/Divisor";
import { Contact } from "../@common/Contact/Contact";
import { Footer } from "../@common/Footer/Footer";

export const AboutMe = async () => {
  const dictionary = await getDictionary();

  return (
    <>
      <Divisor withLines>{`<${dictionary?.home.sections.about}>`}</Divisor>
      <MultiLanguage />
      <Header />
      <About />

      <Contact />
      <Footer />
    </>
  );
};
