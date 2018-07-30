import React from "react";
import Helmet from "react-helmet";
import moment from "moment";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import ExtendLayout from "../components/ExtendLayout";
import Homework from "../components/Homework";
import Clipboard from 'clipboard';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2em;
  transform: translate(-50%, -50%) scale(${props => (props.active ? 1 : 3)});
  border-radius: 10px;
  line-height: 1em;
  transition: all 150ms;
  opacity: ${props => (props.active ? 1 : 0)};

  h2 {
    margin: 0;
    font-size: 50px;
    font-family: "Roboto Mono", monospace !important;
  }
`;

const Code = styled.div`
  .gatsby-highlight {
    code[class*="language-"],pre[class*="language-"] {
      font-family: "Roboto Mono", monospace !important;
      font-size: 1rem;
    }
  }
`;

import { getWeekFormat, testColor, testUl } from "../utils";
import { H1, BlogPost, Article} from './components'

import styles from "./blog-post.module.scss";

class Final extends React.Component {
  constructor(props) {
    super(props);
    this.setCopyColor = this.setCopyColor.bind(this);
    this.clearCopyColor = this.clearCopyColor.bind(this);
    this.state = {
      showIsCopied: false,
      color: null,
      active: false,
      show: false
    }
  }
  componentDidMount() {
    const clipboard = new Clipboard(".icon");
    clipboard.on("success", this.setCopyColor);
  }

  setCopyColor({text}) {
    this.setState({show: true, color: text}, () => {
      setTimeout(() => {
        this.setState({active: true});
        setTimeout(this.clearCopyColor, 2000);
      }, 1);
    });
  }

  clearCopyColor() {
    this.setState({active: false}, ()=> {
      setTimeout(() => {
        this.setState({ show: false, color: null })
      }, 200);
    })
  }

  render() {
    const { data } = this.props;
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

    let formattedHtml = post.html;
    formattedHtml = formattedHtml.replace(/<ul>\n<li>(#[0-9a-fA-F]*)<\/li>\n/g, testUl);
    formattedHtml = formattedHtml.replace(/(<li>(#[0-9a-fA-F]*)<\/li>\n)/g, testColor)
    // console.log(formattedHtml);
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
              <Code dangerouslySetInnerHTML={{ __html: formattedHtml }} />
              {homework ? <Homework lesson={homework.lesson} /> : null}
            </Article>
            <SideNav nav={nav.edges} passedClassName={styles.sidebar} downloads={downloads || post.frontmatter.downloads} />
          </BlogPost>
        </ExtendLayout>
        {this.state.show ? <Overlay id="overlay" active={this.state.active}>
          <h2>{this.state.color}</h2> was copied to your clipboard
        </Overlay> : null}
      </div>;
  }
};

export default Final;

export const query = graphql`
  query FinalQuery($slug: String!, $title: String!) {
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
      htmlAst
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
