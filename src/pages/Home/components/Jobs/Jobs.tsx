import { Divisor } from "@/components/Divisor/Divisor";

import { CompanyLogo } from "./components/CompanyLogo/CompanyLogo";
import {
  getStoragedTheme,
  Theme,
} from "@/components/ThemeToggle/ThemeToggle.actions";
import { getDictionary } from "@/locale/actions";

import styles from "./Jobs.module.scss";
import React from "react";

const COMPANIES = [
  {
    href: "https://aguiasistemas.net/",
    name: "Aguia Sistemas",
    getSource: (theme: Theme) => `/companies/aguia-sistemas-${theme}.png`,
  },
  {
    href: "#",
    name: "Bambu Tecnologia",
    getSource: (theme: Theme) => `/companies/bambu-tecnologia-${theme}.png`,
  },
  {
    href: "https://gurudosimoveis.com.br/",
    name: "Guru dos Imóveis",
    getSource: (theme: Theme) => `/companies/guru-dos-imoveis-${theme}.png`,
  },
  {
    href: "https://tecimob.com.br/",
    name: "Tecimob",
    getSource: (theme: Theme) => `/companies/tecimob-${theme}.svg`,
  },
  {
    href: "https://aquisi.com.br/",
    name: "Aquisi",
    getSource: (theme: Theme) => `/companies/aquisi-${theme}.png`,
  },
  {
    href: "https://pravendas.com.br/",
    name: "Pra Vendas",
    getSource: (theme: Theme) => `/companies/pra-vendas-${theme}.png`,
  },
  {
    href: "https://sc.senai.br/",
    name: "Senai",
    getSource: () => "/companies/senai.svg",
  },
  {
    href: "https://www.soujunior.tech/",
    name: "Sou Junior",
    getSource: (theme: Theme) => `/companies/sou-junior-${theme}.svg`,
  },
  {
    href: "https://splitwave.com.br/",
    name: "Splitwave",
    getSource: (theme: Theme) => `/companies/splitwave-${theme}.svg`,
  },
  {
    href: "https://www.checkoutcartwave.com.br/",
    name: "Cartwave",
    getSource: (theme: Theme) => `/companies/cartwave-${theme}.svg`,
  },
  {
    href: "#",
    name: "Vizir",
    getSource: () => "/companies/vizir.png",
  },
  {
    href: "https://questrade.com/",
    name: "Questrade",
    getSource: (theme: Theme) => `/companies/questrade-${theme}.svg`,
  },
  {
    href: "https://legaplan.com.br/",
    name: "Legaplan",
    getSource: (theme: Theme) => `/companies/legaplan-${theme}.png`,
  },
];

export const Jobs = React.memo(async () => {
  const dictionary = await getDictionary();
  const theme = await getStoragedTheme();

  const slicedCompanies = (start: number, end?: number) => {
    const companies = COMPANIES.slice(start, end);

    return [...companies, ...companies, ...companies, ...companies];
  };

  return (
    <section id="section-jobs" className={styles.wrapper}>
      <Divisor withLines>{`<${dictionary.home.sections.jobs}>`}</Divisor>
      <div className={styles.content}>
        <div className={styles.line}>
          <div className={styles.scrollRight}>
            {slicedCompanies(0, 6).map((company, index) => (
              <a
                href={company.href}
                key={`${company.name}-${index}`}
                target="_blank"
              >
                <CompanyLogo
                  src={company.getSource(theme)}
                  alt={company.name}
                  priority
                />
              </a>
            ))}
          </div>
          <div className={styles.scrollLeft}>
            {slicedCompanies(6).map((company, index) => (
              <a
                href={company.href}
                key={`${company.name}-${index}`}
                target="_blank"
              >
                <CompanyLogo
                  src={company.getSource(theme)}
                  alt={company.name}
                  priority
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* <Animate className={styles.wrapperButton} animation="slideUp" delay={0.5}>
        <Button>Saiba Mais</Button>
      </Animate> */}
    </section>
  );
});

Jobs.displayName = "Jobs";