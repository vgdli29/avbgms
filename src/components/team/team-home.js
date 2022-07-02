import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import bgImage from "../../assets/images/team/team-map-1-1.png";
import teamImage1 from "../../assets/images/team/team-2-1.jpg";
import teamImage2 from "../../assets/images/team/team-2-2.jpg";
import teamImage3 from "../../assets/images/team/team-2-3.jpg";
import teamImage4 from "../../assets/images/team/team-2-4.jpg";
import teamImage5 from "../../assets/images/team/team-2-5.jpg";
import teamImage6 from "../../assets/images/team/team-2-6.jpg";
import teamImage7 from "../../assets/images/team/team-2-7.jpg";
import yashwantImage from "../../assets/images/team/Yashwant.jpg";
import vivekImage from "../../assets/images/team/Vivek.jpg";

const Directors = [
  {
    image: teamImage1,
    extraClassName: "content-bg-1",
    name: "Mr Amrendra Kumar",
    designation: "President "
  },
  {
    image: teamImage2,
    extraClassName: "content-bg-2",
    name: "Mrs. Alka Singh",
    designation: "Secretary"
  },
  {
    image: teamImage3,
    extraClassName: "content-bg-3",
    name: "Mr Satish Chandra Mishra",
    designation: "Vice President"
  },
  {
    image: teamImage4,
    extraClassName: "content-bg-4",
    name: "Mr Ashok Nath Jha",
    designation: "Chief Account Officer"
  },
  {
    image: teamImage5,
    extraClassName: "content-bg-1",
    name: "Mrs Neeraj Rathi",
    designation: "Treasurer"
  },
  {
    image: teamImage6,
    extraClassName: "content-bg-2",
    name: "Mrs Vandana Singh",
    designation: "Chief Legal Officer"
  },
  {
    image: teamImage7,
    extraClassName: "content-bg-3",
    name: "Mr Mahesh Tomar",
    designation: "Chief Technology Officer"
  }
];

const Volunteers = [
  {
    image: vivekImage,
    extraClassName: "content-bg-1",
    name: "Mr Vivek Gupta",
    designation: "Volunteer"
  },
  {
    image: yashwantImage,
    extraClassName: "content-bg-2",
    name: "Mr. Yashwant K Singh",
    designation: "Volunteer"
  }
];

const TeamHome = () => {
  return (
    <section
      className="team-about pt-120 pb-120"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
      <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Our Directors
                </p>
                <h3>
                  Meet those who help <br /> others in need.
                </h3>
                <p>
                  This section showcase all our esteemed and motivated directors.
                </p>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                            
              </p>
            </Col>
          </Row>
        </div>
        <div className="team-4-col">
          {Directors.map(
            ({ image, extraClassName, name, designation, social }, index) => (
              <div
                className={`team-card text-center ${extraClassName}`}
                key={`team-card-key-${index}`}
              >
                <div className="team-card__image">
                  <img src={image} alt="" />
                </div>
                <div className="team-card__social">                  
                </div>
                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            )
          )}
        </div>
        <br/>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Our Volunteers 
                </p>
                <h3>
                  Meet those who are there <br/>to help always.
                </h3>
                <p>
                  This section showcase all our energetic and self-less volunteers.
                </p>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                            
              </p>
            </Col>
          </Row>
        </div>
        <div className="team-4-col">
          {Volunteers.map(
            ({ image, extraClassName, name, designation, social }, index) => (
              <div
                className={`team-card text-center ${extraClassName}`}
                key={`team-card-key-${index}`}
              >
                <div className="team-card__image">
                  <img src={image} alt="" />
                </div>
                <div className="team-card__social">                  
                </div>
                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default TeamHome;
