import React from "react";
import ExtendLayout from "../components/ExtendLayout";
import colorList from "../utils/colors";
import Banner from "../components/Banner";
import styled from 'styled-components';
import ColorTool from 'color';

const ColorsWrapper = styled.div`
  @media all and (max-width: 1199px) {
    padding: 0 1em;
  }
`;

const ColorList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Item = styled.li`
  padding: 0.5em 1em;
`;

const ColorListContainer = ({ color: backgroundColor, name }) => {
  const colorTest = new ColorTool(backgroundColor);
  const color = colorTest.isDark() ? '#fff' : '#333';
  return (
    <div style={{ backgroundColor, color }}>
      <ColorList>
        <Item>{name}</Item>
        <Item>{backgroundColor}</Item>
      </ColorList>
    </div>
  )
};

const Colors = () => {
  const original = colorList.slice(0, 15);
  const nonstandard = colorList.slice(16);
  return <div>
      <Banner title="HTML Colors" />
      <ExtendLayout>
        <ColorsWrapper>
          <h2>The Original Sixteen (16) Predefined Colors</h2>
          {original.map(([name, color]) => (
            <ColorListContainer color={color} name={name} key={name}/>
          ))}
          <h2>Non Standard Colors</h2>
          {nonstandard.map(([name, color]) => (
            <ColorListContainer color={color} name={name} key={name} />
          ))}
        </ColorsWrapper>
      </ExtendLayout>
    </div>;
};

export default Colors;
