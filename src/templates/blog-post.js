import React from "react";
import Helmet from "react-helmet";
import SideNav from '../components/SideNav'
import styles from './blog-post.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  const nav = data.allMarkdownRemark;
  return <div className={styles.blogPost}>
      <Helmet>
        <title>{`${post.frontmatter.lesson} - ${post.frontmatter.title}`}</title>
      </Helmet>
      <article className={styles.article}>
        <h1>{post.frontmatter.lesson}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <SideNav nav={nav.edges}/>
    </div>;
};

export const query = graphql`
         query BlogPostQuery($slug: String!, $title: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             html
             frontmatter {
               lesson
               title
             }
           }
           allMarkdownRemark(filter: { frontmatter: { title: { eq: $title } } }, sort: { fields: [frontmatter___order], order: ASC }) {
             edges {
               node {
                 id
                 frontmatter {
                   title
                   lesson
                 }
                 fields {
                   slug
                   slugIndex
                 }
               }
             }
           }
         }
       `;
