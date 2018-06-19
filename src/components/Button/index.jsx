import React from "react";
import styled, { css } from "styled-components";
import { colors as c } from "../../scss/colors";

const StyledButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: red;
  border: 1px solid ${c.primary};
  transition: all 0.1s;
  background: ${c.white};
  &:hover {
    background-color: ${c.primary};
    color: ${c.white};
    a {
      color: ${c.white};
    }
  }
  a {
    color: ${c.primary};
    transition: all 0.1s;
    text-decoration: none;
    display: block;
  }

  ${props =>
    props.kind === "primary" &&
    css`
      background: ${c.primary};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.primaryDark};
        border-color: ${c.primaryDark};
      }
    `};
  ${props =>
    props.kind === "secondary" &&
    css`
      background: ${c.secondary};
      border-color: ${c.secondary};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.secondaryDark};
        border-color: ${c.secondaryDark};
      }
    `};
  ${props =>
    props.kind === "success" &&
    css`
      background: ${c.success};
      border-color: ${c.success};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.successDark};
        border-color: ${c.successDark};
      }
    `};
  ${props =>
    props.kind === "danger" &&
    css`
      background: ${c.danger};
      border-color: ${c.danger};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.dangerDark};
        border-color: ${c.dangerDark};
      }
    `};
  ${props =>
    props.kind === "warning" &&
    css`
      background: ${c.warning};
      border-color: ${c.warning};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.warningDark};
        border-color: ${c.warningDark};
      }
    `};
  ${props =>
    props.kind === "info" &&
    css`
      background: ${c.info};
      border-color: ${c.info};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.infoDark};
        border-color: ${c.infoDark};
      }
    `};
  ${props =>
    props.kind === "light" &&
    css`
      background: ${c.light};
      border-color: ${c.light};
      color: ${c.white};
      color: white;
      a {
        color: ${c.darker};
      }
      &:hover {
        background-color: ${c.lightDark};
        border-color: ${c.lightDark};
        a {
          color: ${c.darker};
        }
      }
    `};
  ${props =>
    props.kind === "dark" &&
    css`
      background: ${c.dark};
      border-color: ${c.dark};
      color: ${c.white};
      color: white;
      a {
        color: ${c.white};
      }
      &:hover {
        background-color: ${c.darkDark};
        border-color: ${c.darkDark};
      }
    `};
`;

const Button = ({ children, kind }) => {
  return <StyledButton kind={kind}>{children}</StyledButton>;
};

export default Button;
