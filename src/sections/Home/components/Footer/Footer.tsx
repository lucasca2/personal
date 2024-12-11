import { Divisor } from "@/components/Divisor/Divisor";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.copyRight}>© 2024 - LUCAS COSTA AMARAL</div>
      <Divisor withLines>{`</html>`}</Divisor>
    </section>
  );
};
