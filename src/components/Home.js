import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Footer from './Footer';
import Featured from './Featured';
import _ from 'lodash';
// import s from '../styles/home.style';

export default class Home extends Component {
  // const repoReadmeLink = text => (
  //   <Interactive
  //     as="a"
  //     {...s.link}
  //     href="https://github.com/rafrex/spa-github-pages#readme"
  //   >{text}</Interactive>
  // );
  constructor(props) {
    super(props);

    this.state = {
      isModalVideoVisible: false,
      isModalApplicationVisible: false,
      isModalApplicationSentVisible: false,

      isValidFormApplication: true,
      isSendingFormApplication: false,

      inputOrganizationName: '',
      inputOrganizationFBPage: '',
      inputOrganizationTwitter: '',
      inputOrganizationWebsite: '',
      inputOrganizationFullName: '',
      inputOrganizationEmail: '',
      inputOrganizationCountryCode: '',
      inputOrganizationPhone: '',
      inputOrganizationMessage: ''
    };

    this.refSectionFeatured = React.createRef();
    this.refSectionLearnMore = React.createRef();

    this.refInputOrganizationName = React.createRef();
    this.refInputOrganizationFullName = React.createRef();
    this.refInputOrganizationEmail = React.createRef();
    this.refInputOrganizationCountryCode = React.createRef();
    this.refInputOrganizationPhone = React.createRef();
  }

  handleClick = (event) => {
    var self = this;
    let id = event.target.dataset.id;

    if (id === 'btnDonate') {
      this.refSectionFeatured.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else if (id === 'btnLearnMore') {
      this.refSectionLearnMore.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } else if (id === 'btnFBShare') {
      const e = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://thedollareffect.com/org/glory-reborn/')}`;
      return window.open(e, 'fbShareWindow', `height=450, width=550, top=${(window.innerHeight / 2) - 275}, left=${(window.innerWidth / 2) - 225}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`);
    } else if (id === 'btnShowModalVideo') {
      this.setState({ isModalVideoVisible: true });
    } else if (id === 'btnShowModalApplication') {
      this.setState({ isModalApplicationVisible: true }, () => {
        setTimeout(() =>{
          self.refInputOrganizationName.current.focus();
        }, 300);
      });
    } else if (id === 'btnSubmitApplication') {
      this.validateForm();
    }

    return false;
  };

  handleChange = (event) => {
    let id = event.target.dataset.id;
    let value = event.target.value;
    let state = _.cloneDeep(this.state);

    state[id] = value;

    this.setState(state, () => {
      console.log(this.state);
    });
  };

  handleHideModalVideo = () => {
    this.setState({ isModalVideoVisible: false });
  };

  handleHideModalApplication = () => {
    this.setState({ isModalApplicationVisible: false });
  };

  handleHideModalApplicationSent = () => {
    this.setState({ isModalApplicationSentVisible: false });
  };

  validateForm = () => {
    if (this.state.inputOrganizationName.trim() &&
        this.state.inputOrganizationFullName.trim() &&
        this.state.inputOrganizationEmail.trim() &&
        this.state.inputOrganizationCountryCode.trim() &&
        this.state.inputOrganizationPhone.trim()) {
      this.submitApplication();
    } else {
      this.setState({ isValidFormApplication: false });
      if (!this.state.inputOrganizationName.trim()) {
        this.refInputOrganizationName.current.focus();
      } else if (!this.state.inputOrganizationFullName.trim()) {
        this.refInputOrganizationFullName.current.focus();
      } else if (!this.state.inputOrganizationEmail.trim()) {
        this.refInputOrganizationEmail.current.focus();
      } else if (!this.state.inputOrganizationCountryCode.trim()) {
        this.refInputOrganizationCountryCode.current.focus();
      } else if (!this.state.inputOrganizationPhone.trim()) {
        this.refInputOrganizationPhone.current.focus();
      }
    }
  };

  submitApplication = () => {
    this.setState({
      isSendingFormApplication: true
    });

    // replace this with post or mutation
    setTimeout(() => {
      this.setState({
        isModalApplicationVisible: false
      }, () => {
        setTimeout(() => {
          this.setState({
            isModalApplicationSentVisible: true,
            isValidFormApplication: true,
            isSendingFormApplication: false,

            inputOrganizationName: '',
            inputOrganizationFBPage: '',
            inputOrganizationTwitter: '',
            inputOrganizationWebsite: '',
            inputOrganizationFullName: '',
            inputOrganizationEmail: '',
            inputOrganizationCountryCode: '',
            inputOrganizationPhone: '',
            inputOrganizationMessage: ''
          });
        }, 300);
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        <section className="landing-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-7">
                <div className="de-logo mt50"><span className="brand-color">Dollar</span>Effect</div>
                <button data-id="btnShowModalVideo" className="btn btn-ico-action" onClick={this.handleClick}><i
                  className="material-icons"
                >play_circle_outline</i>Watch Video
                </button>
                <h1 className="banner-slogan mtb10">What if donating was <span
                  className="underline"
                >not</span> a big decision?</h1>
                <p className="mb30">We believe that non-profits should focus more on what they are doing
                                    instead of worrying about funds for the following months.</p>
                <p className="mb50">The Dollar Effect is a monthly subscription of $1 dollar to a non-profit
                                    of your choice.</p>
                <div>
                  <button data-id="btnDonate" className="btn btn-primary" onClick={this.handleClick}>Donate</button>
                  <button
                    data-id="btnLearnMore"
                    className="btn btn-link"
                    onClick={this.handleClick}
                  >Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={this.refSectionLearnMore} className="pt100 pb40" id="works">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center mb60">
                <div className="section-header">
                  <h4>How the Dollar Effect Works</h4 >
                  <p>A small but consistent amount can go a long way.</p>
                </div>
              </div>
              <div className="col-sm-10 offset-sm-1">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="de-feature-wrapper">
                      <div className="feature-icon">
                        <img src="img/oval-heart.png" alt="" />
                      </div>
                      <div className="feature-content">
                        <h5>Back non-profits</h5>
                        <p>Simply choose non-profit organizations&nbsp;
                          that you would like to back and support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="de-feature-wrapper">
                      <div className="feature-icon">
                        <img src="img/oval-set.png" alt="" />
                      </div>
                      <div className="feature-content">
                        <h5>Set and Forget</h5>
                        <p>Easy and simple to support non-profits.&nbsp;
                          Plus, the amount is small enough that you can&nbsp;
                          forget about it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="de-feature-wrapper">
                      <div className="feature-icon">
                        <img src="img/oval-dollar.png" alt="" />
                      </div>
                      <div className="feature-content">
                        <h5>Small Amount, Big Impact</h5>
                        <p>With this, non-profits can rely on something&nbsp;
                          to have a steady source of funds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="de-feature-wrapper">
                      <div className="feature-icon">
                        <img src="img/oval-connected.png" alt="" />
                      </div>
                      <div className="feature-content">
                        <h5>Be Connected</h5>
                        <p>With this, you will be updated on how the&nbsp;
                          cause you are supporting is doing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <hr />
        </div>

        <section ref={this.refSectionFeatured} className="ptb100">
          <Featured handleClick={this.handleClick} />
        </section>

        <div className="container">
          <hr />
        </div>

        <section>
          <div className="container bg-squares">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 text-center ptb100">
                <h2 className="mb15 de-cta-text">Are you a non-profit organization?</h2>
                <p className="mb55">Be part of the Dollar Effect.</p>
                <button
                  data-id="btnShowModalApplication"
                  className="btn btn-primary"
                  onClick={this.handleClick}>Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <Modal
          show={this.state.isModalVideoVisible}
          onHide={this.handleHideModalVideo}
          dialogClassName="de-spa-modal-video modal-lg"
        >
          <Modal.Body bsClass="de-spa-modal-content">
            <button type="button" className="de-spa-video-modal-close" onClick={this.handleHideModalVideo}>
              <span aria-hidden="true">
                <i className="material-icons">close</i>
              </span>
            </button>
            <iframe
              id="youtubeVideo" src="https://www.youtube.com/embed/GCjYPvp09hM?enablejsapi=1" frameBorder="0"
              allowFullScreen
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.isModalApplicationVisible}
          onHide={this.handleHideModalApplication}
          dialogClassName="de-spa-modal-application modal-lg"
        >
          <div className="de-modal">
            <Modal.Header bsClass="de-modal-header de-spa-modal-application-header">
              <h4 className="modal-title de-modal-title mb5">Be part of the Dollar Effect</h4>
              <p className="de-modal-subtitle mb0">We&#39;d love to hear from you.</p>
              <button type="button" className="close" onClick={this.handleHideModalApplication} aria-label="Close">
                <span aria-hidden="true"><i className="material-icons">close</i></span>
              </button>
            </Modal.Header>
          </div>
          <Modal.Body bsClass="de-spa-modal-application-body">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="alert alert-danger js-error-message"
                  style={this.state.isValidFormApplication ? { display: 'none' } : { display: 'block' }}
                  role="alert">Oops! You missed some required fields.</div>
              </div>
            </div>
              <div className="row">
                <div className="col-lg-12">
                  <h6 className="de-section-label">Organization</h6>
                  <div className="form-group de-form-group">
                    <label htmlFor="inputOrganization">
                      Organization Name<span className="de-required-indicator">*</span>
                    </label>
                    <input
                      data-id="inputOrganizationName"
                      ref={this.refInputOrganizationName}
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationName}
                      type="text"
                      className="form-control"
                      style={
                        !this.state.inputOrganizationName.trim() && !this.state.isValidFormApplication ?
                          { border: '1px solid rgba(255, 0, 0, 0.5)' } :
                          { border: '1px solid #ced4da' }
                      }
                      name="org_name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputFacebookPage">Org&#39;s Facebook Page</label>
                    <input
                      data-id="inputOrganizationFBPage"
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationFBPage}
                      type="text"
                      className="form-control"
                      name="org_fb_page" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputTwitterPage">Org&#39;s Twitter Page</label>
                    <input
                      data-id="inputOrganizationTwitter"
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationTwitter}
                      className="form-control"
                      name="org_twitter_page" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputWebsite">Org&#39;s Website</label>
                    <input
                      data-id="inputOrganizationWebsite"
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationWebsite}
                      type="text"
                      className="form-control"
                      name="org_website" />
                  </div>
                </div>
              </div>
              <hr className="mtb40" />
              <div className="row">
                <div className="col-lg-12">
                  <h6 className="de-section-label">Contact Person</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputFullName">Full Name<span className="de-required-indicator">*</span></label>
                    <input
                      data-id="inputOrganizationFullName"
                      ref={this.refInputOrganizationFullName}
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationFullName}
                      type="text"
                      className="form-control"
                      style={
                        !this.state.inputOrganizationFullName.trim() && !this.state.isValidFormApplication ?
                          { border: '1px solid rgba(255, 0, 0, 0.5)' } :
                          { border: '1px solid #ced4da' }
                      }
                      name="full_name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputEmail">Email<span className="de-required-indicator">*</span></label>
                    <input
                      data-id="inputOrganizationEmail"
                      ref={this.refInputOrganizationEmail}
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationEmail}
                      type="text"
                      className="form-control"
                      style={
                        !this.state.inputOrganizationEmail.trim() && !this.state.isValidFormApplication ?
                          { border: '1px solid rgba(255, 0, 0, 0.5)' } :
                          { border: '1px solid #ced4da' }
                      }
                      name="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputCountryCode">Country Code<span className="de-required-indicator">*</span></label>
                    <input
                      data-id="inputOrganizationCountryCode"
                      ref={this.refInputOrganizationCountryCode}
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationCountryCode}
                      type="text"
                      className="form-control"
                      style={
                        !this.state.inputOrganizationCountryCode.trim() && !this.state.isValidFormApplication ?
                          { border: '1px solid rgba(255, 0, 0, 0.5)' } :
                          { border: '1px solid #ced4da' }
                      }
                      name="country_code" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputPhone">Phone<span className="de-required-indicator">*</span></label>
                    <input
                      data-id="inputOrganizationPhone"
                      ref={this.refInputOrganizationPhone}
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationPhone}
                      type="text"
                      className="form-control"
                      style={
                        !this.state.inputOrganizationPhone.trim() && !this.state.isValidFormApplication ?
                          { border: '1px solid rgba(255, 0, 0, 0.5)' } :
                          { border: '1px solid #ced4da' }
                      }
                      name="phone" />
                  </div>
                </div>
              </div>
              <hr className="mtb40" />
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group de-form-group">
                    <label htmlFor="inputMessage">Message</label>
                    <textarea
                      data-id="inputOrganizationMessage"
                      onChange={this.handleChange}
                      value={this.state.inputOrganizationMessage}
                      className="form-control"
                      name="message" />
                  </div>
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer bsClass="modal-footer de-modal-footer">
            <button type="button" className="btn btn-link" onClick={this.handleHideModalApplication}>Cancel</button>
            <button
              type="submit"
              className="btn btn-primary -filled"
              data-id="btnSubmitApplication"
              onClick={this.handleClick}
              disabled={this.state.isSendingFormApplication ? 'disabled' : ''}
            >
              { this.state.isSendingFormApplication ? 'Saving...' : 'Apply' }
            </button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.isModalApplicationSentVisible}
          onHide={this.handleHideModalApplicationSent}
          dialogClassName="modal-lg de-spa-modal-application-sent"
        >
          <Modal.Body>
            <div className="modal-body de-modal-body p50 text-center">
              <img className="mb30" src="img/icon-ok.png" />
              <h4>Awesome!</h4>
              <p className="mb60">Thank you for your interest to be part of the Dollar Effect. We’ll get back to you as soon as we can.</p>
              <button type="button" className="btn btn-primary -filled" onClick={this.handleHideModalApplicationSent}>Got it</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
