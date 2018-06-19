import React from "react";
import ExtendLayout from "../ExtendLayout";
import Button from "../Button";
import styled from "styled-components";
import { colors as c } from "../../scss/colors";

const StyledAlert = styled.div`
  text-align: center;
  background-color: ${c.primary};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3) inset;
  padding: 1em;
  color: $white;
  @media all and (max-width: 1199px) {
    padding: 1em;
  }
`;

const Title = styled.h2`
  color: ${c.darker};
  margin: 0;
  border: none;
`;

const Alert = ({ message, url, urlMessage, title }) => {
  return (
    <ExtendLayout bgcolor={c.primary5}>
      <StyledAlert>
        {title ? <Title>{title}</Title> : null}
        {message ? <p>{message}</p> : null}
        {url ? (
          <Button kind="dark">
            <a href={url}>{urlMessage}</a>
          </Button>
        ) : null}
      </StyledAlert>
    </ExtendLayout>
  );
};

export default Alert;
