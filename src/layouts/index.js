import React from "react";
import Link from "gatsby-link";
import Header from '../components/Header';
import Banner from '../components/Banner';
import styles from './layout.module.css';
import ExtendLayout from "../components/ExtendLayout";

require("prismjs/themes/prism-tomorrow.css");

export default ({ children, data }) => {
  const { classFiles, semester, startDate, lessons, noClass } = data.site.siteMetadata;
  const { edges } = data.allFile;
  const paths = edges
    .filter(path => path.node.relativeDirectory === 'pages' && path.node.name !== 'index')
    .sort((a,b) => a.node.name > b.node.name);

  console.log(paths)
  return (
  <div className={styles.layout}>
    <Header classFiles={classFiles} paths={paths}/>
    <Banner semester={semester} startDate={startDate} count={lessons} noClass={noClass}/>
    <ExtendLayout>{children()}</ExtendLayout>
  </div>
)};

export const query = graphql`
         query LayoutQuery {
           site {
             siteMetadata {
               classFiles
               semester
               startDate
               lessons
               noClass
             }
           }
           allFile(filter: { extension: { eq: "js" } }) {
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