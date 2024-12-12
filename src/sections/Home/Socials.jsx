import React from "react";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import mailLight from "../../assets/mail-light.svg";
import mailDark from "../../assets/mail-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import styles from "./HomeStyles.module.css";

const socials = [
  {
    iconLight: linkedinLight,
    iconDark: linkedinDark,
    link: "https://ca.linkedin.com/in/mrudinipatel",
    alt: "LinkedIn icon",
  },
  {
    iconLight: githubLight,
    iconDark: githubDark,
    link: "https://github.com/mrudinipatel",
    alt: "GitHub icon",
  },
  {
    iconLight: mailLight,
    iconDark: mailDark,
    link: "mailto:mrudinipatel@gmail.com",
    alt: "Mail icon",
  },
];

const Socials = () => {
  const { theme } = useTheme();

  return (
    <span className={styles.socials}>
      {socials.map(({ iconLight, iconDark, link, alt }, index) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
          <img src={theme === "light" ? iconLight : iconDark} alt={alt} />
        </a>
      ))}
    </span>
  );
};

export default Socials;
