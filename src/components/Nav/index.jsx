import React from "react";
import Link from "gatsby-link";

import styles from "./nav.module.scss";

const Nav = ({
  paths = [],
  classFiles = null,
  active,
  toggleAtive,
  lessonList
}) => {
  return (
    <nav className={styles.headerNav} style={active ? { maxHeight: 500 } : {}}>
      <ul className={styles.nav}>
        <li className={styles.link}>
          Lessons
          <ul className={styles.drop}>
            {lessonList.map(({ node }) => (
              <li className={styles.dropItem} key={node.id}>
                <Link
                  className={styles.dropLink}
                  to={node.fields.slug}
                  onClick={toggleAtive}
                >
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
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
                  onClick={toggleAtive}
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

Nav.defaultProps = {
  lessonList: [
    { title: "lesson 1", date: "dd mmm, yyyy", slug: "/index/" },
    { title: "lesson 2", date: "dd mmm, yyyy", slug: "/index/" },
    { title: "lesson 3", date: "dd mmm, yyyy", slug: "/index/" }
  ]
};

export default Nav;
