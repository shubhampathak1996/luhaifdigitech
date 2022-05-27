import React, { useState, useEffect } from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { BLOG } from '../../shared/models/blog'
import PageBanner from '../../components/common/PageBanner'
import renderHTML from 'react-render-html'

function SingleBlog({ match }) {
  const [activeBlog, setactiveBlog] = useState(null)
  useEffect(() => {
    const filterdata = BLOG.filter((item) => item.link == match.params.slug)
    if (filterdata && filterdata.length > 0) {
      setactiveBlog(filterdata[0])
    }
  }, [match.params.slug])
  console.log(match.params.slug)
  return (
    <>
      <Header />
      <PageBanner title={'Blogs'} />
      <section className="single-blog-ptb-50">
        <div className="container">
          <div className="row">
            {activeBlog && (
              <div className="col-md-12">
                <div className="blog-description">
                  <h2>{activeBlog.title}</h2>
                  <div className="featured-img">
                    <img src={activeBlog.image} />
                  </div>
                  {activeBlog.paragraph && renderHTML(activeBlog.paragraph)}
                </div>
                <div className="featured-img">
                  <img src={activeBlog.image2} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default SingleBlog
