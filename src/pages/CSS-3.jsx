import React, { Component } from "react";
import Banner from "../components/Banner";
import ExtendLayout from "../components/ExtendLayout";
import styles from "../scss/css.module.scss";

class Css3 extends Component {
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
        <Banner title="CSS 3" />
        <ExtendLayout>
          <div
            className={styles.css}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ExtendLayout>
      </div>
    );
  }
}

export default Css3;

export const query = graphql`
  query cssQuery {
    markdownRemark(fields: { slug: { eq: "/files/css.html" } }) {
      html
    }
  }
`;
