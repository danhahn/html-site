import React from "react";
import Link from "gatsby-link";

import styles from "./nav.module.scss";

const Nav = ({ paths = [], classFiles = null, active }) => {
  return (
    <nav className={styles.headerNav} style={active ? { maxHeight: 300 } : {}}>
      <ul className={styles.nav}>
        {classFiles ? (
          <li className={styles.item}>
            <a href={classFiles} target="_blank" className={styles.link}>
              Class Files
            </a>
          </li>
        ) : null}
        {paths.length
          ? paths.map(({ node: path }) => (
              <li className={styles.item} key={path.id}>
                <Link
                  className={styles.link}
                  activeClassName={styles.active}
                  to={`/${path.name}/`}
                >
                  {path.name.replace("-", " ")}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Nav;
