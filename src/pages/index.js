import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {GlobalStyles} from '../../GlobalStyle';
import {BlogListItem} from "../components/BlogListItem";

class BlogIndex extends React.Component {
    render() {
        const {data} = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (<>
                <GlobalStyles/>
                <Layout location={this.props.location} title={siteTitle}>
                    <SEO
                        title="All posts"
                        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                    />
                    {posts.map(({node}) => {
                        console.log(node);
                        return (
                            <BlogListItem key={node.fields.slug} {...node}/>
                        )
                    })}
                </Layout>
            </>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title

            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        title
                        author
                        description
                        featuredImage {
                            childImageSharp{
                                sizes(maxWidth: 630) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
