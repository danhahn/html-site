import React from "react";
import Helmet from "react-helmet";
import moment from "moment";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import ExtendLayout from "../components/ExtendLayout";
import Homework from "../components/Homework";
import styled from "styled-components";
import { colors as c } from "../scss/colors";

import { getWeekDateList } from "../utils";
import { H1, BlogPost, Article } from "./components";

import styles from "./blog-post.module.scss";

const Code = styled.div`
  .gatsby-highlight {
    code[class*="language-"],
    pre[class*="language-"] {
      font-family: "Roboto Mono", monospace !important;
      font-size: 1rem;
    }
  }
  .note {
    background-color: ${c.primary40};
    padding: 0.5em 1em;
    border-radius: 5px;
  }
`;

export default ({ data }) => {
  const {
    startDate,
    lessons: count,
    noClass,
    extraClass
  } = data.site.siteMetadata;
  const post = data.markdownRemark;
  const { html } = post;
  const nav = data.allMarkdownRemark;
  const weeks = getWeekDateList(startDate, count, noClass, extraClass);

  const date = weeks[post.frontmatter.lessonId - 1];

  let downloads = null;
  if (data.markdownRemark.frontmatter.attachments) {
    downloads = {
      files: data.markdownRemark.frontmatter.attachments,
      labels: data.markdownRemark.frontmatter.labels
    };
  }
  const { localcss, title, lesson, homework, localcssEx } = post.frontmatter;
  const postWithNotes = html.replace(
    /<p><strong>note:/gi,
    '<p class="note"><strong>Note:'
  );

  return (
    <div>
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
            <Code dangerouslySetInnerHTML={{ __html: postWithNotes }} />
            {homework ? <Homework lesson={homework.lesson} /> : null}
          </Article>
          <SideNav
            nav={nav.edges}
            passedClassName={styles.sidebar}
            downloads={downloads || post.frontmatter.downloads}
          />
        </BlogPost>
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
        extraClass
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
