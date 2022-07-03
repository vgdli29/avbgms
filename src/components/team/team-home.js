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
import vikashFauzdarImage from "../../assets/images/team/Vikash_Fauzdar.jpg";
import vikasVermaImage from "../../assets/images/team/Vikas_Verma.jpg";
import vaishaliMhasaneImage from "../../assets/images/team/Vaishali_Mhasane.jpg";
import ashishSrivastavaImage from "../../assets/images/team/Ashish_Srivastava.jpg";
import akshayMittalImage from "../../assets/images/team/Akshay_Mittal.jpg";
import preetiUpadhyayeImage from "../../assets/images/team/Preeti_Upadhyaye.jpg";
import prashantPratapSinghImage from "../../assets/images/team/Prashant_Pratap_Singh.jpg";
import prakashShekhawatImage from "../../assets/images/team/Prakash_shekhawat.jpg";
import jyotiSinghImage from "../../assets/images/team/Jyoti_Singh.jpg";
import jitendraKumarImage from "../../assets/images/team/Jitendra_Kumar.jpg";
import vijayKumarGuptaImage from "../../assets/images/team/Vijay_Kumar_Gupta.jpg";
import rameshChanderSharmaImage from "../../assets/images/team/Ramesh_Chander_Sharma.jpg";
import divasShivayPandeImage from "../../assets/images/team/Divas_Shivay_Pande.jpg";
import hemaSharmaImage from "../../assets/images/team/Hema_Sharma.jpg";
import aayushiSinghAdhikariImage from "../../assets/images/team/Aayushi_Singh_Adhikari.jpg";

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
    image: vijayKumarGuptaImage,
    extraClassName: "content-bg-1",
    name: "Mr Vijay Kumar Gupta",
    designation: "Volunteer"
  },
  {
    image: rameshChanderSharmaImage,
    extraClassName: "content-bg-1",
    name: "Mr Ramesh Chander Sharma",
    designation: "Volunteer"
  },
  {
    image: divasShivayPandeImage,
    extraClassName: "content-bg-1",
    name: "Mr Divas Shivay Pande",
    designation: "Volunteer"
  },
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
  },
  {
    image: hemaSharmaImage,
    extraClassName: "content-bg-2",
    name: "Mr. Hema Sharma",
    designation: "Volunteer"
  },
  {
    image: aayushiSinghAdhikariImage,
    extraClassName: "content-bg-2",
    name: "Mr. Aayushi Singh Adhikari",
    designation: "Volunteer"
  },
  {
    image: jitendraKumarImage,
    extraClassName: "content-bg-2",
    name: "Mr. Jitendra Kumar ",
    designation: "Volunteer"
  },
  {
    image: jyotiSinghImage,
    extraClassName: "content-bg-2",
    name: "Mr. Jyoti Singh",
    designation: "Volunteer"
  },
  {
    image: prakashShekhawatImage,
    extraClassName: "content-bg-2",
    name: "Mr. Prakash Shekhawat",
    designation: "Volunteer"
  },
  {
    image: prashantPratapSinghImage,
    extraClassName: "content-bg-2",
    name: "Mr. Prashant Pratap Singh",
    designation: "Volunteer"
  },
  {
    image: preetiUpadhyayeImage,
    extraClassName: "content-bg-2",
    name: "Mr. Preeti Upadhyaye",
    designation: "Volunteer"
  },
  {
    image: vikashFauzdarImage,
    extraClassName: "content-bg-2",
    name: "Mr. Vikash Fauzdar",
    designation: "Volunteer"
  },
  {
    image: akshayMittalImage,
    extraClassName: "content-bg-2",
    name: "Mr. Akshay Mittal",
    designation: "Volunteer"
  },
  {
    image: ashishSrivastavaImage,
    extraClassName: "content-bg-2",
    name: "Mr. Ashish Srivastava",
    designation: "Volunteer"
  },
  {
    image: vaishaliMhasaneImage,
    extraClassName: "content-bg-2",
    name: "Mr. Vaishali Mhasane",
    designation: "Volunteer"
  },
  {
    image: vikasVermaImage,
    extraClassName: "content-bg-2",
    name: "Mr. Vikas Verma",
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
