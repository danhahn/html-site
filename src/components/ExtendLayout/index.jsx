import React from "react";
import styles from "./extend-layout.module.css";

const ExtendLayout = ({ children, passedClassName = null }) => {
  return (
    <div className={passedClassName}>
      <div className={styles.layout}>{children}</div>
    </div>
  );
};

export default ExtendLayout;
