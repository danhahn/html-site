import styled from "styled-components";

export const H1 = styled.h1`
  @media all and (min-width: 575px) and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const BlogPost = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2em;
  @media all and (min-width: 575px) and (max-width: 768px) {
    grid-gap: 1em;
  }
`;

export const Article = styled.article`
  padding-bottom: 3em;
  grid-column: 1 / 10;
  @media all and (max-width: 991px) {
    grid-column: 1 / 9;
  }
  @media all and (max-width: 768px) {
    grid-column: 1 / -1;
  }
  @media all and (max-width: 1199px) {
    padding: 0 1em;
    padding-bottom: 3em;
  }
  .icon-list {
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 1em 0;
    grid-gap: 3px;
    .icon {
      font-family: "Roboto Mono", monospace !important;
      padding: 0.5em;
      font-size: 20px;
      margin: 0;
      text-align: center;
      font-family: monospace;
      border: 1px solid transparent;
    }
  }
`;