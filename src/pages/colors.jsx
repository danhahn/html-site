import React from "react";
import ExtendLayout from "../components/ExtendLayout";
import styles from "../scss/colors.module.scss";
import colorList from "../utils/colors";

const Colors = () => {
  const original = colorList.slice(0, 15);
  const nonstandard = colorList.slice(16);
  return (
    <ExtendLayout>
      <div className={styles.colors}>
        <h1>HTML Colors</h1>
        <h2>The Original Sixteen (16) Predefined Colors</h2>
        {original.map(([name, color]) => (
          <div style={{ backgroundColor: color }} key={name}>
            <ul className={styles.colorList}>
              <li className={styles.dark}>{name}</li>
              <li className={styles.dark}>{color}</li>
              <li className={styles.light}>{name}</li>
              <li className={styles.light}>{color}</li>
            </ul>
          </div>
        ))}
        <h2>Non Standard Colors</h2>
        {nonstandard.map(([name, color]) => (
          <div style={{ backgroundColor: color }} key={name}>
            <ul className={styles.colorList}>
              <li className={styles.dark}>{name}</li>
              <li className={styles.dark}>{color}</li>
              <li className={styles.light}>{name}</li>
              <li className={styles.light}>{color}</li>
            </ul>
          </div>
        ))}
      </div>
    </ExtendLayout>
  );
};

export default Colors;
