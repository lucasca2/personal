import { TypingText } from "@/components/TypingText/TypingText";

import styles from "./CodeSection.module.scss";
import { getDelay, getDuration, injectReservedWordsClassNames } from "./utils";
import React, { useMemo } from "react";
import { randomKey } from "@/utils/randomKey";

type EditorSectionProps = {
  lines: string[];
  shouldStart?: boolean;
};

export const CodeSection = React.memo(({
  lines,
  shouldStart = true,
}: EditorSectionProps) => {
  const key = useMemo(() => {
    return randomKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  return (
    <div className={styles.wrapper} translate="no">
      <div className={styles.lineNumbers}>
        {lines.map((_, index) => (
          <span key={`code-line-number-${index}-${key}`}>{index + 1}</span>
        ))}
      </div>

      {lines.map((line, index) => {
        const duration = getDuration(line);
        const delay = getDelay(lines, index);

        return (
          <TypingText
            key={`code-line-${index}-${key}`}
            className={styles.line}
            width={line.length}
            duration={duration}
            delay={delay}
            shouldStart={shouldStart}
            dangerouslySetInnerHTML={{
              __html: injectReservedWordsClassNames(line),
            }}
          />
        );
      })}
    </div>
  );
});

CodeSection.displayName = "CodeSection";