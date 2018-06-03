import React from "react";
import ExtendLayout from "../ExtendLayout";
import Logo from "../Logo";
import Link from "gatsby-link";
import styles from "./header.module.scss";

const Header = ({ classFiles = null, paths = [] }) => {
  return (
    <ExtendLayout passedClassName={styles.bgcolor}>
      <header className={styles.header}>
        <Link to="/" style={{ display: "block", lineHeight: 1 }}>
          <Logo width={115} height={35} color="white" />
        </Link>
        <ul className={styles.nav}>
          {classFiles ? (
            <li>
              <a href={classFiles} target="_blank">
                Class Files
              </a>
            </li>
          ) : null}
          {paths.length
            ? paths.map(({ node: path }) => (
                <li className={styles.item} key={path.id}>
                  <Link className={styles.link} to={`/${path.name}/`}>
                    {path.name.replace("-", " ")}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </header>
    </ExtendLayout>
  );
};

export default Header;
