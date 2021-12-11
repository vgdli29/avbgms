import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import welcomeImage from "../../assets/images/resources/welcome-1-1.png";
import aboutImage from "../../assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" />
              <div className="about-two__award">
                <img src={aboutImage} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" /> About AVBGMS
                </p>
                <h3>Welcome to Atal-Vivek Bharat Gyan-Mandir Sansthan.</h3>
              </div>
              <p className="mb-40 pr-10">
              The original aim of AVGMS is enhancing child dignity by educating them.  We are on a mission to educate the unprivileged children of INDIA.  
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Become a
                      Volunteer
                    </h3>
                    <p>
                    Join us in our social causes, lets build a world where every one gets to live a happy, healthy and prosperous life{" "}
                    </p>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Quick
                      Fundraising
                    </h3>
                    <p>
                      Any event consumes fund, your donation helps in keeping this alive.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i className="azino-icon-support"></i>
                    <h3>You can make a big difference in someone’s life.</h3>
                  </div>
                </Col>
              </Row>
              <Link className="thm-btn dynamic-radius" to="/about">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
