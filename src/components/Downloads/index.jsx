import React from "react";
import Button from "../Button";
import styles from "./downloads.module.scss";

const Downloads = ({ downloads }) => {
  const data = downloads.labels.map((label, i) => {
    return { label, url: downloads.files[i].publicURL };
  });
  return (
    <div className={styles.downlaodsGroup}>
      <h3>Downloads</h3>
      <ul className={styles.downloads}>
        {data.map(({ label, url }) => {
          return (
            <li key={url}>
              <Button kind="primary">
                <a href={url} target={url}>
                  {label}
                </a>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Downloads;
