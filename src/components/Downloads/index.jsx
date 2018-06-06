import React from "react";
import Button from "../Button";
import styles from "./downloads.module.scss";

const Downloads = ({ buttons, url }) => {
  return (
    <div className={styles.downlaodsGroup}>
      <h3>Downloads</h3>
      <ul className={styles.downloads}>
        {Object.entries(buttons).map(([title, data]) => {
          {
            return url || data ? (
              <li key={title}>
                <Button kind="primary">
                  <a
                    href={url || data.file.publicURL}
                    target={url ? "_blank" : null}
                  >
                    {title.replace(/\_/g, " ")}
                  </a>
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
