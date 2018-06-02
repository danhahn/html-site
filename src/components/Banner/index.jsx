import React from "react";
import moment from "moment";
import ExtendLayout from "../ExtendLayout";
import styles from "./banner.module.scss";

const Banner = ({ title = "title", date = "date" }) => {
  return (
    <ExtendLayout passedClassName={styles.bgcolor}>
      <div className={styles.banner}>
        <div className={styles.title}>{title}</div>
        <p className={styles.date}>{date}</p>
      </div>
    </ExtendLayout>
  );
};

export default Banner;
