import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";
import {GlobalStyles} from "../../GlobalStyle";
import {
    BlogIgemContent,
    BlogItem,
    BlogItemDate,
    BlogItemText,
    BlogItemTitle,
    ImageContainer
} from "../components/styled/BlogItem";
import NoImage from "../../static/noimage.png";

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const {title, author, date ,description, featuredImage} = post.frontmatter;

        return (
            <>
                <GlobalStyles/>
                <Layout location={this.props.location}>
                    <SEO
                        title="All posts"
                        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                    />
                    <BlogItem className="details">
                        <div className="wrapper">
                            <ImageContainer className="image">
                                { featuredImage ? <img src={featuredImage.childImageSharp.sizes.src} alt={title}/> : <img src={NoImage} alt={title}/>}

                            </ImageContainer>
                            <BlogIgemContent>
                                <BlogItemDate>{date}</BlogItemDate>
                                <BlogItemTitle>{title}</BlogItemTitle>
                                <BlogItemText>
                                    <div dangerouslySetInnerHTML={{__html: post.html}}></div>
                                </BlogItemText>
                            </BlogIgemContent>
                        </div>

                    </BlogItem>
                </Layout>
            </>

        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date
                description
                author
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
`
