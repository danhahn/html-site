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
  @media all and (max-width: 575px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 0.5em 1em;
  color: ${c.primary};
  &:hover {
    background-color: ${c.primary20};
    text-decoration: none;
    color: ${c.white};
  }
`;

const A = styled(Link)`
  color: white;
  text-transform: capitalize;
  display: block;
  padding: calc(1em - 6px) 1em;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  margin: 0;
  @media all and (min-width: 576px) {
    &:hover {
      background-color: #363b47;
      border-bottom-color: ${c.primary};
      text-decoration: none;
      .drop {
        display: block;
      }
    }
  }
`;

import styles from "./nav.module.scss";

const Nav = ({
  paths = [],
  classFiles = null,
  active,
  toggleActive,
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
                  <StyledLink to={node.fields.slug} onClick={toggleActive}>
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
                <A
                  activeClassName={styles.active}
                  to={`/${path.name}/`}
                  onClick={toggleActive}
                >
                  {path.name.replace("-", " ")}
                </A>
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
