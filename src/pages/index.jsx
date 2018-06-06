import React from "react";
import Banner from "../components/Banner";
import moment from "moment";
import Link from "gatsby-link";
import Tags from "../components/Tags";
import Alert from "../components/Alert";
import Box from "../components/Box";
import ExtendLayout from "../components/ExtendLayout";

import { getWeekFormat } from "../utils";

import styles from "../scss/index.module.scss";

export default ({ data }) => {
  const {
    startDate,
    lessons: count,
    noClass,
    semester,
    signUpLink
  } = data.site.siteMetadata;
  const { edges } = data.allMarkdownRemark;
  const lesson = edges.slice(0, count);
  const weeks = getWeekFormat(count, noClass);
  const year = moment(startDate).format("YYYY");
  const start = moment(startDate).format("MMMM D, YYYY");
  const end = moment(startDate)
    .add(count, "weeks")
    .format("MMMM D, YYYY");

  return (
    <div>
      <Banner title={`${semester} ${year}`} date={`${start} – ${end}`} />
      {signUpLink ? (
        <Alert
          title="Getting Started"
          message="Before you get started please fill out this form.  I need will collect your contact info to beable to keep in touch."
          url={signUpLink}
          urlMessage="Click Fere and Fill Out Form"
        />
      ) : null}
      <ExtendLayout>
        <div className={styles.index}>
          {lesson.map(({ node }, index) => {
            const currentWeek = moment(startDate)
              .add(weeks[index], "week")
              .format("MMMM D, YYYY");
            return (
              <Box
                key={node.fields.slug}
                title={node.frontmatter.title}
                href={node.fields.slug}
                date={currentWeek}
                intro={node.htmlAst.children[0].children[0].value}
                badges={node.frontmatter.badges}
              />
            );
          })}
        </div>
      </ExtendLayout>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        startDate
        lessons
        noClass
        semester
        signUpLink
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
            badges
          }
          htmlAst
        }
      }
    }
  }
`;
