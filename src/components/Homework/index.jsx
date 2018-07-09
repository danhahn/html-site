import React from "react";
import Button from "../Button";

import styled from "styled-components";
import { colors as c } from "../../scss/colors";


const StyledHomework = styled.div`
  margin: 2rem 0;
  border: 2px solid black;
  padding: 2em;
  border-radius: 15px;
  background-color: ${c.light};
`;

const H2 = styled.h2`
  margin-top: 0;
  border: none;
`;

const Homework = ({ lesson }) => {
  return (
    <StyledHomework>
      <H2>Homework Example</H2>
      <Button>
        <a
          href={`http://danhahn.github.io/lessons/lesson-${lesson.match(
            /[0-9]+/
          )}/${lesson}-homework.html`}
          target="_blank"
        >
          View Final Example
        </a>
      </Button>
    </StyledHomework>
  );
};

export default Homework;
