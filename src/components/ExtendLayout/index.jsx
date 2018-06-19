import React from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ExtendLayout = ({ children, passedClassName = null, bgcolor }) => {
  return (
    <div className={passedClassName} style={{ backgroundColor: bgcolor }}>
      <Div>{children}</Div>
    </div>
  );
};

export default ExtendLayout;
