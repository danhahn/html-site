import React from "react";
import Button from "../Button";

const Homework = ({ lesson }) => {
  return (
    <div style={{ marginBottom: "2em" }}>
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
    </div>
  );
};

export default Homework;
