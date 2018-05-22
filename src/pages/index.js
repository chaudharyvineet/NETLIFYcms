import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-400">Latest Stories</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #000000', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
class Footer extends React.Component{
render() {
return (
<section class="footer-info iq-pt-60">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="iq-footer-box text-left">
                            <div class="iq-icon">
                                <i aria-hidden="true" class="ion-ios-location-outline"></i>
                            </div>
                            <div id="x">
                            <div class="footer-content">
                                <h4 class="iq-tw-6 iq-pb-10">Address</h4>
                                <p>#10, IT Park, Phase - I, Manimajra, Chandigarh, 160101, India</p>
                            </div></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 re4-mt-30">
                        <div class="iq-footer-box text-left">
                            <div class="iq-icon">
                                <i aria-hidden="true" class="ion-ios-telephone-outline"></i>
                            </div>
                            <div class="footer-content">
                                <h4 class="iq-tw-6 iq-pb-10">Phone</h4>
                                <p>+91 999(678)4567 <br>Mon-Fri 10:00am - 8:00pm<br></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 re-mt-30">
                        <div class="iq-footer-box text-left">
                            <div class="iq-icon">
                                <i aria-hidden="true" class="ion-ios-email-outline"></i>
                            </div>
                            <div class="footer-content">
                                <h4 class="iq-tw-6 iq-pb-10">Mail</h4>
                                <p>neuraltech@gmail.com <br>24 X 7 online support<br></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row iq-mt-40">
                    <div class="col-sm-12 text-center">
                        <div class="footer-copyright iq-ptb-20"> Copyright @<span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#" class="text-green">  neuralTech Inc</a>   All Rights Reserved </div>
                    </div>
                </div>
            </div>
        </section>  
);
}
}

