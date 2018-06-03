import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import styles from "./layout.module.css";
import "./styles.css";

require("prismjs/themes/prism-tomorrow.css");

export default ({ children, data }) => {
  const { classFiles } = data.site.siteMetadata;
  const { edges } = data.allFile;
  const paths = edges
    .filter(
      path =>
        path.node.relativeDirectory === "pages" && path.node.name !== "index"
    )
    .sort((a, b) => a.node.name > b.node.name);

  return (
    <div className={styles.layout}>
      <Helmet defaultTitle={`SVA HTML`} titleTemplate={`%s | SVA HTML`}>
        <meta name="twitter:site" content="@svahtml" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="SVA HTML" />
        <html lang="en" />
      </Helmet>
      <Header classFiles={classFiles} paths={paths} />
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
  }
`;
