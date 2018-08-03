import React from "react";
import Banner from "../components/Banner";
import moment from "moment";
import Alert from "../components/Alert";
import Box from "../components/Box";
import ExtendLayout from "../components/ExtendLayout";
import styled from 'styled-components';

const Grid = styled.div`
  padding: 1em 0;
  @media all and (max-width: 1199px) {
    padding: 1em;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  @media all and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

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
    .add(count + noClass.length - 1, "weeks")
    .format("MMMM D, YYYY");

  const today = moment().format(`MMMM D, YYYY`);
  console.log(today);

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
        <Grid>
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
                active={currentWeek === today}
              />
            );
          })}
        </Grid>
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
