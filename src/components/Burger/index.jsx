import React from "react";

import styled, { css } from "styled-components";
import { colors as c } from "../../scss/colors";

const StyledBurger = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
  transition: all 0.2s;
  border: 1px solid ${c.white};
  padding: 4px;
  border-radius: 3px;
  width: 25px;
  box-sizing: border-box;
  ${props =>
    props.active &&
    css`
      padding: 10px 4px;
    `};
`;

const Line = styled.div`
  transition: all 0.2s;
  border-bottom: 1px solid ${c.white};
  margin-bottom: 3px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${props =>
    props.active &&
    css`
      margin: 0;
    `};
  ${props =>
    props.active &&
    props.first &&
    css`
      transform: rotate(45deg) translate(-2px, 0px);
      width: 17px;
      position: relative;
      top: 2px;
      left: 1px;
    `};
  ${props =>
    props.active &&
    props.middle &&
    css`
      opacity: 0;
    `};
  ${props =>
    props.active &&
    props.last &&
    css`
      transform: rotate(-45deg) translate(1px, -4px);
      width: 17px;
      position: relative;
      top: 2px;
      left: 1px;
    `};
`;

const Burger = ({ active, toggleActive }) => {
  return (
    <StyledBurger active={active} onClick={toggleActive}>
      <Line first active={active} />
      <Line middle active={active} />
      <Line last active={active} />
    </StyledBurger>
  );
};

export default Burger;
