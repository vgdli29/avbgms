import React from "react";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-light.png";
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link to="/">
                  <img
                    src={logoLight}
                    className="footer-widget__logo"
                    width="101"
                    alt=""
                  />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#none">
                      <i className="azino-icon-telephone"></i>+91-79821-30200
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                      <i className="azino-icon-email"></i>atalvivek.avbgms@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                      <i className="azino-icon-pin"></i>Greater Noida, Uttar Pradesh
                      India
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link to="/causes">Our Causes</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/news">New Campaign</Link>
                  </li>
                  <li>
                    <Link to="/events">Upcoming Events</Link>
                  </li>
                  <li>
                    <Link to="/about">Site Map</Link>
                  </li>
                  <li>
                    <Link to="/contact">Help</Link>
                  </li>
                  <li>
                    <Link to="/causes">Donate</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Terms</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  <li>
                    <img src={blogPost1} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link to="/news-details">
                        You can help the poor in need
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <img src={blogPost2} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link to="/news-details">Rise fund for Healthy Food</Link>
                    </h3>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2020 by Layerdrops.com</p>
          <div className="footer-social">
            <a href="#none" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#none" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#none" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#none" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
