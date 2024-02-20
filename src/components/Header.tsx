/** @format */

import styles from "./Header.module.css";
import igniteLogo from "../assets/Ignite-simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} />
      <strong className={styles.writtenLogo}>Ignite Feed</strong>
    </header>
  );
}
