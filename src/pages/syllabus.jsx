import React from "react";
import moment from "moment";
import Link from "gatsby-link";
import Banner from "../components/Banner";
import ExtendLayout from "../components/ExtendLayout";
import { getWeekFormat } from "../utils";
import styles from "../scss/syllabus.module.scss";

const Syllabus = ({ data }) => {
  const {
    startDate,
    lessons: count,
    noClass,
    semester,
    contact
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
          <h1>Coding HTML and CSS - Basic</h1>
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
          <h2 id="class-web-site">Class web site</h2>
          <p>
            <a href="http://html.svahtml.com">http://html.svahtml.com</a>
          </p>
          <p>
            All class work, materials, and assignments will be given though the
            class web site. In addition any announcement may be made on the
            site. The site will also provide back lesson and class presentations
            will be found there for you toreview.
          </p>
          <h2 id="login-for-lab-computers">Login for labcomputers</h2>
          <pre className=" language-html">
            <code className=" language-html">
              Username : svanyc Password : svanyc
            </code>
          </pre>
          <h2 id="attendance-">Attendance:</h2>
          <p>
            Every class is very important and will build off of the class
            before; therefore you must attend class every week. If you do miss a
            class, you are expected to make up the work before the next class.
            If you know in advance that you will miss a class, please contact me
            24 hours before theclass.
          </p>
          <h2 id="purpose-of-class">Purpose of class</h2>
          <p>
            This is a hands-on course that will use{" "}
            <span className="caps">HTML</span> in new and complex ways. The
            course will begin with an overview of the Internet and how it
            functions creatively and as a utility. Students will write{" "}
            <span className="caps">HTML</span> and learn how to format text,
            incorporate images, build tables, create links, host and upload a
            Web site and utilize JavaScript. Students will design and implement
            their own websites or enhance an existing one, as well as
            participate in design discussions and critiques of student and
            professionalwork.
          </p>
          <h2 id="syllabus-">Syllabus:</h2>
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
                      <li>
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
        contact {
          name
          email
        }
      }
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
