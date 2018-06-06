import React from "react";
import Helmet from "react-helmet";
import moment from "moment";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import ExtendLayout from "../components/ExtendLayout";

import { getWeekFormat } from "../utils";

import styles from "./blog-post.module.scss";

export default ({ data }) => {
  const { lessons, startDate, noClass } = data.site.siteMetadata;
  const post = data.markdownRemark;
  const nav = data.allMarkdownRemark;
  const weeks = getWeekFormat(lessons, noClass);
  const date = moment(startDate)
    .add(post.frontmatter.lessonId - 1, "weeks")
    .format("MMMM D, YYYY");

  let downloads = null;
  if (data.markdownRemark.frontmatter.attachments) {
    downloads = {
      files: data.markdownRemark.frontmatter.attachments,
      labels: data.markdownRemark.frontmatter.labels
    };
  }
  return (
    <div>
      <Helmet>
        <title>
          {`${post.frontmatter.lesson} - ${post.frontmatter.title}`}
        </title>
      </Helmet>
      <Banner title={post.frontmatter.title} date={date} />
      <ExtendLayout>
        <div className={styles.blogPost}>
          <article className={styles.article}>
            <h1>{post.frontmatter.lesson}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
          <SideNav
            nav={nav.edges}
            passedClassName={styles.sidebar}
            downloads={downloads || post.frontmatter.downloads}
          />
        </div>
      </ExtendLayout>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!, $title: String!) {
    allFile {
      edges {
        node {
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        startDate
        lessons
        noClass
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        lesson
        title
        lessonId
        labels
        attachments {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: $title } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            lesson
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
