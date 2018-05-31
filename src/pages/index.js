import React from "react";
import g from "glamorous";
import moment from "moment";
import Link from 'gatsby-link';
import Tags from '../components/Tags'
import { getWeekFormat } from "../utils";

import { rhythm } from "../utils/typography";
import { log } from "util";

export default ({ data }) => {
  const { startDate, lessons: count, noClass } = data.site.siteMetadata;
  const { edges } = data.allMarkdownRemark;
  const lesson = edges.slice(0, count);
  const weeks = getWeekFormat(count, noClass)

  return (
    <div>
      {lesson.map(({ node }, index) => {
        const currentWeek = moment(startDate)
          .add(weeks[index], "week")
          .format("MMMM D, YYYY");
        return (
          <div key={node.id}>
            <Link to={node.fields.slugIndex}>
              <h3>
                {node.frontmatter.title} <span>
                  — {currentWeek}
                </span>
              </h3>
            </Link>
            <p>{node.htmlAst.children[0].children[0].value}</p>
            {node.frontmatter.tags ? <Tags tags={node.frontmatter.tags}/> : null}
          </div>
        );
      })}
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
             }
           }
           allMarkdownRemark(filter: { frontmatter: { index: { eq: true } } }, sort: { fields: [frontmatter___lessonId], order: ASC }) {
             edges {
               node {
                 id
                 fields {
                   slugIndex
                 }
                 frontmatter {
                   title
                   date(formatString: "DD MMMM, YYYY")
                   tags {
                     html {
                       icon
                       data
                       label
                     }
                     css {
                       data
                       label
                       icon
                     }
                     attribute {
                       data
                       label
                       icon
                     }
                   }
                 }
                 htmlAst
               }
             }
           }
         }
       `;
