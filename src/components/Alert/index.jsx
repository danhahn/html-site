import React from "react";
import ExtendLayout from "../ExtendLayout";
import Button from "../Button";

import styles from "./alert.module.scss";

const Alert = ({ message, url, urlMessage, title }) => {
  return (
    <ExtendLayout passedClassName={styles.bgcolor}>
      <div className={styles.alert}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {message ? <p>{message}</p> : null}
        {url ? (
          <Button>
            <a href={url}>{urlMessage}</a>
          </Button>
        ) : null}
      </div>
    </ExtendLayout>
  );
};

export default Alert;
