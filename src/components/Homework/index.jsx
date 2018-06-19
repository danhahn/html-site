import React from "react";
import Button from "../Button";

import styled from "styled-components";

const StyledHomework = styled.div`
  margin-bottom: 2rem;
`;

const Homework = ({ lesson }) => {
  return (
    <StyledHomework>
      <h2>View Homework</h2>
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
