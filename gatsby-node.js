const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const slug = createFilePath({node, getNode, basePath: `pages`});
    if(slug.length <= 4) {
      createNodeField({
        node,
        name: `slugIndex`,
        value: slug
      });
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug.length <= 4 ? `${slug}index.html` :`${slug.slice(0, -1)}.html`
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug,
                slugIndex
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
        if(node.fields.slugIndex) {
          createPage({
            path: node.fields.slugIndex,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug
            }
          });
        }
      });
      resolve();
    });
  })
};