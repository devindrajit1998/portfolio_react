import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
    <div className="container">
      <div className="heading-meta-container">
        <h2 className="heading-title">Portfolio</h2>
        <h6 className="description">See My Ausome Work</h6>
      </div>
      <div className="row">
        {/*   Portfolio Filters   */}
        <ul
          id="portfolio-filter"
          className="list-inline col-lg-12 portfolio-filter text-center"
        >
          <li className="list-inline-item">
            <a href="javascript:void(0)" data-filter="*" className="active">
              All
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void(0)" data-filter=".webdesign">
              Web Design
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void(0)" data-filter=".mobiledesign">
              Mobile Design
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void(0)" data-filter=".sound">
              Sound
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void(0)" data-filter=".graphic">
              Graphic
            </a>
          </li>
        </ul>
      </div>
      <div className="portfolio-items border-line-v row">
        {/* Item 01 */}
        <div className="col-md-6 col-lg-4 portfolio-item sound">
          <div className="portfolio-box">
            <div className="portfolio-image">
              <img src="images/portfolio-item1.jpg" alt="/" />
              <div className="portfolio-icon">
                <a
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="portfolio-magnific mfp-iframe"
                >
                  <i className="bi bi-music-note-beamed" />
                </a>
              </div>
            </div>
            <div className="portfolio-content">
              <h6 className="blog-header">Tak photo on the waves</h6>
              <p className="mb-0">image</p>
            </div>
          </div>
        </div>
        {/* Item 02 */}
        <div className="col-md-6 col-lg-4 portfolio-item sound">
          <div className="portfolio-box">
            <div className="portfolio-image">
              <img src="images/portfolio-item2.jpg" alt="/" />
              <div className="portfolio-icon">
                <a
                  href="https://player.vimeo.com/video/158284739"
                  className="portfolio-magnific mfp-iframe"
                >
                  <i className="bi bi-camera-video" />
                </a>
              </div>
            </div>
            <div className="portfolio-content">
              <h6 className="blog-header">Tak photo on the waves</h6>
              <p className="mb-0">image</p>
            </div>
          </div>
        </div>
        {/* Item 03 */}
        <div className="col-md-6 col-lg-4 portfolio-item sound">
          <div className="portfolio-box">
            <div className="portfolio-image">
              <img src="images/portfolio-item3.jpg" alt="/" />
              <div className="portfolio-icon">
                <a href="portfolio-01-colorfull.html" className="ajax-page-load">
                  <i className="bi bi-file-earmark-text" />
                </a>
              </div>
            </div>
            <div className="portfolio-content">
              <h6 className="blog-header">Tak photo on the waves</h6>
              <p className="mb-0">image</p>
            </div>
          </div>
        </div>
        {/* Item 04 */}
        <div className="col-md-6 col-lg-4 portfolio-item mobiledesign webdesign">
          <div className="portfolio-image">
            <img src="images/portfolio-item4.jpg" alt="/" />
            <div className="portfolio-icon">
              <a
                href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                className="portfolio-magnific mfp-iframe"
              >
                <i className="bi bi-music-note-beamed" />
              </a>
            </div>
          </div>
          <div className="portfolio-content">
            <h6 className="blog-header">Detailed Project 2</h6>
            <p className="mb-0">image</p>
          </div>
        </div>
        {/* Item 05 */}
        <div className="col-md-6 col-lg-4 portfolio-item mobiledesign sound">
          <div className="portfolio-image">
            <img src="images/portfolio-item5.jpg" alt="/" />
            <div className="portfolio-icon">
              <a
                href="https://player.vimeo.com/video/158284739"
                className="portfolio-magnific mfp-iframe"
              >
                <i className="bi bi-camera-video" />
              </a>
            </div>
          </div>
          <div className="portfolio-content">
            <h6 className="blog-header">Detailed Project 2</h6>
            <p className="mb-0">image</p>
          </div>
        </div>
        {/* Item 06 */}
        <div className="col-md-6 col-lg-4 portfolio-item mobiledesign">
          <div className="portfolio-image">
            <img src="images/portfolio-item6.jpg" alt="/" />
            <div className="portfolio-icon">
              <a href="portfolio-01-colorfull.html" className="ajax-page-load">
                <i className="bi bi-file-earmark-text" />
              </a>
            </div>
          </div>
          <div className="portfolio-content">
            <h6 className="blog-header">Detailed Project 2</h6>
            <p className="mb-0">image</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
