import React from "react";
import Banner from "../components/Banner";
import ExtendLayout from "../components/ExtendLayout";
import styles from "../scss/ascii.module.scss";

const Ascii = () => {
  return (
    <div>
      <Banner title="Ascii Codes" />
      <ExtendLayout>
        <div className={styles.ascii} />
      </ExtendLayout>
    </div>
  );
};

export default Ascii;
