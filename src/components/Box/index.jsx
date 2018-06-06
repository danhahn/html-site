import React from "react";
import Link from "gatsby-link";
import Button from "../Button";
import Badge from "../Badge";

import styles from "./box.module.scss";

const Box = ({ title, date, intro, tags, href, badges }) => {
  return (
    <div className={styles.box}>
      <Link to={href}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.date}>{date}</p>
      <p className={styles.intro}>{intro}</p>
      {
        <ul className={styles.badges}>
          {badges.map(badge => (
            <li>
              <Badge kind={badge} />
            </li>
          ))}
        </ul>
      }
      <Button kind="primary">
        <Link to={href}>Explore Lesson</Link>
      </Button>
    </div>
  );
};

export default Box;
