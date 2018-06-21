import React from "react";
import Button from "../Button";
import styled from "styled-components";

const ButtonGroup = styled.div`
  @media all and (max-width: 768px) {
    padding: 1em;
    display: flex;
    align-items: center;
  }
  @media all and (max-width: 575px) {
    display: none;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media all and (max-width: 768px) {
    display: flex;
  }
`;

const H3 = styled.h3`
  @media all and (max-width: 768px) {
    margin: 0 1em 0 0;
  }
`;

const Li = styled.li`
  @media all and (max-width: 768px) {
    margin: 0 1em 0 0;
  }
`;

const Downloads = ({ downloads }) => {
  const data = downloads.labels.map((label, i) => {
    return { label, url: downloads.files[i].publicURL };
  });
  return (
    <ButtonGroup>
      <H3>Downloads</H3>
      <Ul>
        {data.map(({ label, url }) => {
          return (
            <Li key={url}>
              <Button kind="primary">
                <a href={url} target={url}>
                  {label}
                </a>
              </Button>
            </Li>
          );
        })}
      </Ul>
    </ButtonGroup>
  );
};

export default Downloads;
