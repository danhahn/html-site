import React from "react";
import moment from "moment";
import Link from "gatsby-link";
import Banner from "../components/Banner";
import ExtendLayout from "../components/ExtendLayout";
import { getWeekFormat } from "../utils";
import styles from "../scss/syllabus.module.scss";
import entries from "object.entries";

if (!Object.entries) {
  entries.shim();
}

const Syllabus = ({ data }) => {
  const {
    startDate,
    lessons: count,
    noClass,
    semester,
    contact,
    siteTitle
  } = data.site.siteMetadata;
  const { edges } = data.allMarkdownRemark;
  const lesson = edges.slice(0, count);
  const weeks = getWeekFormat(count, noClass);
  const year = moment(startDate).format("YYYY");
  const start = moment(startDate).format("MMMM D, YYYY");
  const skipWeek = moment(startDate)
    .add(noClass[0], "weeks")
    .format("MMMM D, YYYY");
  const end = moment(startDate)
    .add(count, "weeks")
    .format("MMMM D, YYYY");

  const lessonMap = {};
  for (const lesson of data.allMarkdownRemark.edges) {
    if (!lessonMap[lesson.node.frontmatter.title]) {
      lessonMap[lesson.node.frontmatter.title] = [lesson];
    } else {
      lessonMap[lesson.node.frontmatter.title] = [
        ...lessonMap[lesson.node.frontmatter.title],
        lesson
      ];
    }
  }

  return (
    <div>
      <Banner title={`${semester} ${year}`} date={null} />
      <ExtendLayout>
        <div className={styles.syllabus}>
          <h1>{siteTitle}</h1>
          <p>
            {count} weeks<br />
            Wednesday 6:30-9:30 pm<br />
            {start} - {end}
          </p>
          <p>
            <strong>No class: {skipWeek}</strong>
          </p>
          <p>
            <strong>
              {contact.name} -{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </strong>
          </p>
          <div
            className={styles.css}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          {Object.entries(lessonMap)
            .map(([title, lessons]) => (
              <div key={title}>
                <h3>{title}</h3>
                <ul>
                  {lessons
                    .sort(
                      (a, b) =>
                        a.node.frontmatter.order - b.node.frontmatter.order
                    )
                    .map(({ node }) => (
                      <li key={node.fields.slug}>
                        <Link to={node.fields.slug}>
                          {node.frontmatter.lesson}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))
            .slice(0, count)}
        </div>
      </ExtendLayout>
    </div>
  );
};

export default Syllabus;

export const query = graphql`
  query SyllabusQuery {
    site {
      siteMetadata {
        startDate
        lessons
        noClass
        semester
        siteTitle
        contact {
          name
          email
        }
      }
    }
    markdownRemark(fields: { slug: { eq: "/files/syllabus.html" } }) {
      html
    }
    allMarkdownRemark(
      filter: { frontmatter: { lesson: { ne: null } } }
      sort: { fields: [frontmatter___lessonId], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            lesson
            lessonId
            order
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
