import React from "react";
import Helmet from "react-helmet";
import moment from "moment";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import ExtendLayout from "../components/ExtendLayout";
import Homework from "../components/Homework";
import styled from "styled-components";

import { getWeekFormat } from "../utils";

import styles from "./blog-post.module.scss";

const H1 = styled.h1`
  @media all and (min-width: 575px) and (max-width: 768px) {
    margin-top: 0;
  }
`;

const BlogPost = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2em;
  @media all and (min-width: 575px) and (max-width: 768px) {
    grid-gap: 1em;
  }
`;

const Article = styled.article`
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
`;

export default ({ data }) => {
  const { lessons, startDate, noClass } = data.site.siteMetadata;
  const post = data.markdownRemark;
  const nav = data.allMarkdownRemark;
  const weeks = getWeekFormat(lessons, noClass);

  const date = moment(startDate)
    .add(weeks[post.frontmatter.lessonId - 1], "week")
    .format("MMMM D, YYYY");

  let downloads = null;
  if (data.markdownRemark.frontmatter.attachments) {
    downloads = {
      files: data.markdownRemark.frontmatter.attachments,
      labels: data.markdownRemark.frontmatter.labels
    };
  }
  const { localcss, title, lesson, homework, localcssEx } = post.frontmatter;
  return <div>
      <Helmet>
        <title>{`${lesson} - ${title}`}</title>
        {localcss ? <link rel="stylesheet" href={`./${localcss}`} /> : null}
        {localcssEx ? <link rel="stylesheet" href={`${localcssEx}`} /> : null}
      </Helmet>
      <Banner title={title} date={date} />
      <ExtendLayout>
        <BlogPost>
          <Article>
            <H1>{lesson}</H1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {homework ? <Homework lesson={homework.lesson} /> : null}
          </Article>
          <SideNav nav={nav.edges} passedClassName={styles.sidebar} downloads={downloads || post.frontmatter.downloads} />
        </BlogPost>
      </ExtendLayout>
    </div>;
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
        localcssEx
        attachments {
          publicURL
        }
        homework {
          lesson
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
