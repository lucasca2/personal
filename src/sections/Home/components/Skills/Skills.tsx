import { Divisor } from "@/components/Divisor/Divisor";

import styles from "./Skills.module.scss";
import { Technology } from "./components/Technology/Technology";
import dayjs from "dayjs";
import { getDictionary } from "@/locale/actions";

export const Skills = async () => {
  const dictionary = await getDictionary();
  const reactExperience = dayjs().diff("2018-01-01", "year");
  const reactNativeExperience = dayjs().diff("2019-01-01", "year");
  const nodeExperience = dayjs().diff("2022-01-01", "year");

  return (
    <section className={styles.wrapper}>
      <Divisor withLines>{`<${dictionary.home.sections.skills}>`}</Divisor>
      <div className={styles.content}>
        <Technology
          className={styles.react}
          icon="react"
          name="React.Js"
          yearsExperience={reactExperience}
        />
        <Technology
          className={styles.react}
          icon="react"
          name="React Native"
          yearsExperience={reactNativeExperience}
        />
        <Technology
          icon="node"
          name="Node.Js"
          yearsExperience={nodeExperience}
        />
      </div>
    </section>
  );
};
