import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./layout.module.css";
import { getWeekFormat } from "../utils";

import "./styles.scss";

require("prismjs/themes/prism-tomorrow.css");

export default ({ children, data }) => {
  const {
    classFiles,
    startDate,
    lessons: count,
    noClass
  } = data.site.siteMetadata;
  const weeks = getWeekFormat(count, noClass);
  const dateInfo = {
    weeks,
    startDate
  };
  const { edges } = data.allFile;
  const { edges: lessonsData } = data.allMarkdownRemark;
  const paths = edges
    .filter(
      path =>
        path.node.relativeDirectory === "pages" && path.node.name !== "index"
    )
    .sort((a, b) => a.node.name > b.node.name);

  const lessons = lessonsData.slice(0, data.site.siteMetadata.lessons);

  return (
    <div className={styles.layoutWrapper}>
      <Helmet defaultTitle={`SVA HTML`} titleTemplate={`%s | SVA HTML`}>
        <meta name="twitter:site" content="@svahtml" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="SVA HTML" />
        <html lang="en" />
      </Helmet>
      <Header
        classFiles={classFiles}
        paths={paths}
        lessonList={lessons}
        dateInfo={dateInfo}
      />
      {children()}
      <Footer />
    </div>
  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        classFiles
        lessons
        startDate
        noClass
      }
    }
    allFile(filter: { extension: { eq: "jsx" } }) {
      edges {
        node {
          extension
          relativeDirectory
          name
          id
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { index: { eq: true } } }
      sort: { fields: [frontmatter___lessonId], order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
