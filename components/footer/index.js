import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with 🖤 by&nbsp;
      <Link
        href="https://www.linkedin.com/in/ahmetatik"
        target="_blank"
      >
        Ahmet Atik
      </Link>
    </footer>
  );
};

export default Footer;
