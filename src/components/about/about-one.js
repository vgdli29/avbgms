import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/shapes/about-bag-1-1.png";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";
//import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                {/*<p>
                  <img src={heart} width="15" alt="" />
                  Make a Difference
                </p> */}
                <h3>ATAL-VIVEK BHARAT GYAN-MANDIR SANSRTHAN.</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
              AVGMS is a benevolent organization working Pan India.  It was founded one year ago with a mission to touch 10 million people’s lives by 2030. The original aim of organization is enhancing child dignity by educating them.  We are on a mission to educate the unprivileged children of INDIA. The main purpose of the organization is to organize, consolidate, promote the education of children and protect the children from any type of  violence and provide atmosphere for their total growth.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
              The main purpose and objects of the charitable Trust is:
              <ol>
<li>To develop the healthy attitude towards the development of physical, cultural, and moral upliftment of the students to make them good human being.</li>
<li>To provide food, shelter, clothing, and medical care for the needy. </li>
<li>To promote the plantation activity to save the environment. </li>
<li>To promote and encourage “BETI BACHAO BETI PADHAO”. </li>
<li>To promote the orphanages homes. </li>
</ol>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
