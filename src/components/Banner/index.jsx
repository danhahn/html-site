import React from "react";
import moment from "moment";
import ExtendLayout from "../ExtendLayout";
import styles from "./banner.module.scss";

const Banner = ({ title = "title", date }) => {
  return (
    <ExtendLayout passedClassName={styles.bgcolor}>
      <div className={styles.banner}>
        <div className={styles.title}>{title}</div>
        {date ? <p className={styles.date}>{date}</p> : null}
      </div>
    </ExtendLayout>
  );
};

export default Banner;
