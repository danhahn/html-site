import React from "react";
import classNames from "classnames/bind";
import styles from "./burger.module.scss";

const cx = classNames.bind(styles);

const Burger = ({ active, toggleAtive }) => {
  let className = cx({
    burger: true,
    active
  });
  return (
    <div className={className} onClick={toggleAtive}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  );
};

export default Burger;
