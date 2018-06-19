import React from "react";
import moment from "moment";
import Logo from "../Logo";
import ExtendLayout from "../ExtendLayout";
import styled from "styled-components";
import { colors as c } from "../../scss/colors";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5em;
  align-items: center;
  color: ${c.white};
  padding: 1em 0;
  @media all and (max-width: 1199px) {
    padding: 1em;
  }
`;

const P = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <ExtendLayout bgcolor={c.darker}>
      <StyledFooter>
        <P>
          Copyright {"\u00A9"} {moment().format("YYYY")} Copyright Holder All
          Rights Reserved.
        </P>
        <Logo width={80} height={25} color="white" />
      </StyledFooter>
    </ExtendLayout>
  );
};

export default Footer;
