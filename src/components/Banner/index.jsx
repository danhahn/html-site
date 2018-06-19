import React from "react";
import ExtendLayout from "../ExtendLayout";
import styles from "./banner.module.scss";
import styled from "styled-components";
import { formatHeader } from "../../utils";

const StyleBanner = styled.div`
  @media all and (max-width: 1199px) {
    padding: 0 1em;
  }
  @media all and (max-width: 575px) {
    padding: 0.5em 1em;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media all and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 2.2rem;
  @media all and (max-width: 575px) {
    font-size: 1.5em;
    line-height: 1em;
  }
`;

const Date = styled.p`
  margin: 0;
  align-self: center;
  @media all and (min-width: 576px) {
    justify-self: end;
  }
`;

const Banner = ({ title = "title", date }) => {
  return (
    <ExtendLayout passedClassName={styles.bgcolor}>
      <StyleBanner>
        <Title>{formatHeader(title)}</Title>
        {date ? <Date>{date}</Date> : null}
      </StyleBanner>
    </ExtendLayout>
  );
};

export default Banner;
