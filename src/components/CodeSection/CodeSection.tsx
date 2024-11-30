import { TypingText } from "@/components/TypingText/TypingText";
import { randomKey } from "@/utils/randomKey";

import styles from "./CodeSection.module.scss";
import { getDelay, getDuration, injectReservedWordsClassNames } from "./utils";

type EditorSectionProps = {
  lines: string[];
};

export const CodeSection = ({ lines }: EditorSectionProps) => {
  const key = randomKey();

  return (
    <div className={styles.wrapper} translate="no">
      <div className={styles.lineNumbers}>
        {lines.map((_, index) => (
          <span key={`${key}-line-${index}`}>{index + 1}</span>
        ))}
      </div>

      {lines.map((line, index) => {
        const duration = getDuration(line);
        const delay = getDelay(lines, index);

        return (
          <TypingText
            key={`${key}-${index}`}
            className={styles.line}
            width={line.length}
            duration={duration}
            delay={delay}
            dangerouslySetInnerHTML={{
              __html: injectReservedWordsClassNames(line),
            }}
          />
        );
      })}
    </div>
  );
};
