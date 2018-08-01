import React from "react";
import Html5 from "../Icon/Html5";
import Css3 from "../Icon/Css3";
import Js from "../Icon/Js";

import styled, { css } from "styled-components";

const Span = styled.span`
  padding: 0.2em 0.5em 0.2em;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  background-color: #df7c72;
  text-transform: uppercase;
  display: inline-flex;
  align-items: baseline;
  align-items: center;
  & > svg:first-of-type {
    margin-right: 5px;
  }
  ${props =>
    props.kind === "html" &&
    css`
      background-color: #e44d26;
    `};
  ${props =>
    props.kind === "css" &&
    css`
      background-color: #1572b6;
    `};
  ${props =>
    props.kind === "javascript" &&
    css`
      background-color: #f7df1e;
      color: black;
      text-transform: capitalize;
    `};
`;

const Badge = ({ kind }) => {
  let logo = null;
  switch (kind) {
    case "html":
      logo = <Html5 color="light" size={15} />;
      break;
    case "css":
      logo = <Css3 color="light" size={15} />;
      break;
    case "javascript":
      logo = <Js color="light" size={15} />;
      break;
    default:
      break;
  }
  return (
    <Span kind={kind}>
      {logo}
      <span className="caps">{kind}</span>
    </Span>
  );
};

export default Badge;
