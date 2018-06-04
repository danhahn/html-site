import React, { Component } from "react";
import Banner from "../components/Banner";
import ExtendLayout from "../components/ExtendLayout";
import styles from "../scss/ascii.module.scss";

class Ascii extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: null };
  }
  render() {
    const { html: raw } = this.props.data.markdownRemark;
    const html = raw
      .replace(/\`\&/g, "<code>&amp;")
      .replace(/\;\`/g, ";</code>");
    return (
      <div>
        <Banner title="Ascii Codes" />
        <ExtendLayout>
          <div />
          <div
            className={styles.ascii}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ExtendLayout>
      </div>
    );
  }
}

export default Ascii;

export const query = graphql`
  query AsciiQuery {
    markdownRemark(fields: { slug: { eq: "/files/ascii.html" } }) {
      html
    }
  }
`;
