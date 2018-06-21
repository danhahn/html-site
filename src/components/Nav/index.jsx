import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import styled from "styled-components";
import { colors as c } from "../../scss/colors";

const Date = styled.span`
  white-space: nowrap;
  font-size: 0.7em;
  margin-left: 1em;
  color: #20232a;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 0.5em 1em;
  &:hover {
    background-color: ${c.primary20};
    text-decoration: none;
    color: ${c.white};
  }
`;

import styles from "./nav.module.scss";

const Nav = ({
  paths = [],
  classFiles = null,
  active,
  toggleAtive,
  lessonList,
  dateInfo
}) => {
  const { startDate, weeks } = dateInfo;
  return (
    <nav className={styles.headerNav} style={active ? { maxHeight: 500 } : {}}>
      <ul className={styles.nav}>
        <li className={styles.link}>
          Lessons
          <ul className={styles.drop}>
            {lessonList.map(({ node }, index) => {
              const currentWeek = moment(startDate)
                .add(weeks[index], "week")
                .format("MMMM D, YYYY");
              return (
                <li className={styles.dropItem} key={node.id}>
                  <StyledLink to={node.fields.slug} onClick={toggleAtive}>
                    {node.frontmatter.title}
                    <Date>{currentWeek}</Date>
                  </StyledLink>
                </li>
              );
            })}
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
