import styles from "./CodeSection.module.scss";

export const reservedWordsClassNames = [
  // Get all symbols first to avoid conflicts
  {
    regex: /(\:|\=|\[|\])/g,
    className: styles.symbol,
  },

  // Get types
  {
    regex: /(\bstring\b|\bnumber\b|\bTecnologia\b|\bTechnology\b)/,
    className: styles.type,
  },

  // Get every word that is inside a string
  {
    regex: /('.[^']*')/g,
    className: styles.string,
  },

  // Get every number that is not inside a string
  {
    regex: /(?<!')(\b\d+\b)(?!')/g,
    className: styles.number,
  },
  // Get every word that comes after the "class" and "new"
  {
    regex: /(\bclass\b|^\bnew\b)\s(\w+)/,
    replace: `$1 <span class="${styles.className}">$2</span>`,
    className: styles.className,
  },

  // Get every class, new and public word
  {
    regex: /(\bclass\b\s|^\bnew\b|\bpublic\b)/,
    className: styles.keyword,
  },
];

export const injectReservedWordsClassNames = (line: string) => {
  let lineWithClassNames = line;

  reservedWordsClassNames.forEach(({ regex, replace, className }) => {
    lineWithClassNames = lineWithClassNames
      .replace(regex, replace || `<span class="${className}">$1</span>`)
      .replace(/^\s+/g, (match) => match.replace(/ /g, "&nbsp;"));
  });

  return lineWithClassNames;
};

export const getDuration = (line: string) => {
  return line.length * 0.018;
};

export const getDelay = (lines: string[], index?: number) => {
  const previousLines = lines.slice(0, index);

  return previousLines.reduce((acc, line) => {
    return acc + getDuration(line);
  }, 0);
};
