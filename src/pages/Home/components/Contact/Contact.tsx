import { Divisor } from "@/components/Divisor/Divisor";
import styles from "./Contact.module.scss";
import { SocialMedias } from "@/components/SocialMedias/SocialMedias";
import { Animate } from "@/components/Animate/Animate";
import { getDictionary } from "@/locale/actions";
import { Form } from "./components/Form/Form";

export const Contact = async () => {
  const dictionary = await getDictionary();

  return (
    <section id="section-contact" className={styles.wrapper}>
      <Divisor withLines>{`<${dictionary.home.sections.contact}>`}</Divisor>
      <Animate className={styles.header} animation="slideUp" delay={0.5}>
        <h2>
          {dictionary?.home.contact.title}{" "}
          <span>{dictionary?.home.contact.subtitle}</span>
        </h2>
      </Animate>
      <Animate className={styles.content} animation="slideUp" delay={0.6}>
        <Form dictionary={dictionary.home.contact} />
      </Animate>
      <SocialMedias />
    </section>
  );
};
