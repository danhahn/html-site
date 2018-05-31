import React from "react";
import moment from "moment";
import ExtendLayout from "../ExtendLayout";
import styles from "./banner.module.css";

const Banner = ({ startDate, semester, count, noClass }) => {
  const year = moment(startDate).format("YYYY");
  const start = moment(startDate).format("MMMM D, YYYY");
  const end = moment(startDate)
    .add(count, "weeks")
    .format("MMMM D, YYYY");

  return (
    <ExtendLayout passedClassName={styles.bgcolor}>
      <div className={styles.banner}>
        <h1>{`${semester} ${year}`}</h1>
        <p>{`${start} – ${end}`}</p>
      </div>
    </ExtendLayout>
  );
};

export default Banner;
