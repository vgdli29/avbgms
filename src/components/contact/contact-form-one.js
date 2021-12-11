import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";

const ContactFormOne = () => {
  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Help us in keeping this \n moving.`}
                tagLine="Donate for the good"
              />
              <p className="block-text mb-30 pr-10">
                It is always good to be a part of social welfare, you can donate your time by joining us as volunteer, or can donate some funds as that helps us in keeping things moving and the good work to never stop.{" "}
              </p>
              <div className="footer-social black-hover">
                {/**<a href="#none" aria-label="twitter">
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
                </a> */}
                <a href="https://www.facebook.com/atalvivek.avbgms/" aria-label="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://wa.me/917982130200/" aria-label="whatsapp">
                  <i className="fab fa-whatsapp-square"></i>
                </a>   
              </div>
            </div>
          </Col>
          <Col lg={7}>  
              <ul className="list-unstyled ul-list-one">
                <li>Bank Transfer</li>
                  <p className="block-text mb-40 pr-10">
                    Name: Atal Vivek Bharat Gyan Mandir Sansthan <br/>
                    Bank Name:  HDFC<br/>
                    Account No:  50200058443858<br/>
                    IFSC Code:  HDFC0005129<br/>
                  </p>
                <li>UPI</li>
                  <p className="block-text mb-40 pr-10">
                    UPI ID: 7982130200@hdfcbank<br/>
                  </p>
              </ul>
          
            {/** <form className="contact-form-validated contact-page__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Submit Message
                  </button>
                </div>
              </div>
              </form> */}
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
