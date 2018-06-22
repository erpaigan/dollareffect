import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default function Featured({ handleClick }) {
  return (
    <div className="container">
      <div className="row" >
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-header mb50">
            <h3>Non-Profits You Can Support</h3>
            <p>We want to help them focus on helping and creating an impact.</p>
          </div>
        </div>
      </div>
      <div className="row" id="glory_reborn_feature">
        <div className="col-xl-10 offset-xl-1">
          <div className="de-panel">
            <div className="featured-image">
              <img src="img/org-featured-pic.jpg" alt="Featured" />
            </div>
            <div className="de-panel-content">
              <h5 className="mb15">Glory Reborn Organization</h5>

              <ul className="de-social-links --mobile mb15">
                <li>
                  <a href="https://www.gloryreborn.org/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-globe" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/gloryreborn/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/gloryreborn" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gloryreborn/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <p>Our vision begins with helping moms&nbsp;
                have a safe and healthy pregnancy. Each mom&nbsp;
                receives all the necessary prenatal care,&nbsp;
                labs and health education at Glory Reborn throughout her pregnancy.
              </p>
              <p className="mb30">If we can help moms be healthy,&nbsp;
                we have a good start to helping babies. After birth,&nbsp;
                babies then receive all the necessary care and&nbsp;
                treatment that they need to ensure they have a healthy start to life.
              </p>

              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="HN24DRDAFWE54" />
                <button type="submit" className="btn btn-block btn-primary --adjust-padding">Start Donating</button>
              </form>
              <button
                onClick={handleClick}
                data-id="btnFBShare"
                className="btn btn-block btn-link btn-ico-link mt15"
              >
                <i className="material-icons">share</i>Share
              </button>
            </div>
            <ul className="de-social-links">
              <li>
                <a href="https://www.gloryreborn.org/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-globe" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/gloryreborn/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/gloryreborn" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gloryreborn/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Featured.propTypes = propTypes;
