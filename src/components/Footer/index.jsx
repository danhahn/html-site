import React from "react";
import moment from "moment";
import Logo from "../Logo";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        Copyright {"\u00A9"} {moment().format("YYYY")} Copyright Holder All
        Rights Reserved.
      </p>
      <Logo width={80} height={25} color="white" />
    </footer>
  );
};

export default Footer;
