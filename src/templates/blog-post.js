import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { rhythm, scale } from "../utils/typography"

const isBrowser = () => typeof window !== "undefined"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Helmet>
          <script type="application/ld+json">
            {`{"@context": "http://schema.org",
            "@type": "${post.frontmatter.type}",
            "headline": "${post.frontmatter.title}",
            "creator": "${
              post.frontmatter.author
                ? post.frontmatter.author
                : this.props.data.site.siteMetadata.author
            }",
            "url": "${isBrowser() && window.location.href}",
            "thumbnailUrl": "${
              post.frontmatter.thumbnail
                ? isBrowser() &&
                  window.location.protocol +
                    "//" +
                    window.location.hostname +
                    post.frontmatter.thumbnail.publicURL
                : "https://pbs.twimg.com/profile_images/718097917874212865/6qsGC2He.jpg"
            }",
            "datePublished": "${post.frontmatter.date}",
            "articleSection": "${post.frontmatter.section}",
            "keywords": "${post.frontmatter.tags}"}`}
          </script>
        </Helmet>
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              Published {post.frontmatter.date} by{" "}
              {post.frontmatter.author
                ? post.frontmatter.author
                : this.props.data.site.siteMetadata.author}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        section
        thumbnail {
          publicURL
        }
        type
        author
      }
    }
  }
`
