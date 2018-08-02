import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import Button from "../Button";
import Badge from "../Badge";
import { colors as c } from "../../scss/colors";

const StyledBox = styled.div`
  padding: 1em;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f6;
  border: 1px solid #d9dcde;
  ${props =>
    props.active === true &&
    css`
      grid-row: 1;
      grid-column: 1 / -1;
      text-align: center;
      border-width: 3px;
      background-color: white;
      border-radius: 5px;
      &:before {
        content: "💥 🎉 Today's Lesson  🎉 💥";
        color: ${c.primary};
        text-transform: uppercase;
        display: block;
        text-align: center;
      }
      @media screen and (min-width: 769px) {
        font-size: 1.4em;
        padding: 1em 10em;
      }
    `};
`;

const A = styled(Link)`
  color: ${c.primary};
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 2.5em;
  color: ${c.primary};
  border: none;
`;

const Date = styled.p`
  color: ${c.primary};
  margin: 0;
`;

const Intro = styled.p`
  flex: 1;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  & > * {
    margin-right: 0.5em;
  }
`;

const Box = ({ title, date, intro, href, badges, active }) => {
  return (
    <StyledBox active={active}>
      <A to={href}>
        <H2>{title}</H2>
      </A>
      <Date>{date}</Date>
      <Intro>{intro}</Intro>
      {badges.length ? (
        <Ul>
          {badges.map(badge => (
            <li key={badge}>
              <Badge kind={badge} />
            </li>
          ))}
        </Ul>
      ) : null}
      <Button kind="primary">
        <Link to={href}>Explore Lesson</Link>
      </Button>
    </StyledBox>
  );
};

export default Box;
