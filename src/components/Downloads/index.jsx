import React from "react";
import Button from "../Button";
import styles from "./downloads.module.scss";

const Downloads = ({ buttons }) => {
  return (
    <div className={styles.downlaodsGroup}>
      <h3>Downloads</h3>
      <ul className={styles.downloads}>
        {Object.entries(buttons).map(([title, data]) => {
          {
            return data ? (
              <li key={title}>
                <Button>
                  <a href={data.file.publicURL}>{title.replace(/\_/g, " ")}</a>
                </Button>
              </li>
            ) : null;
          }
        })}
      </ul>
    </div>
  );
};

export default Downloads;
