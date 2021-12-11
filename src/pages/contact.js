import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <Layout pageTitle="Contact Page || AVBGMS">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Contact Page" crumbTitle="Contact Us" />
      <ContactFormOne />
      <ContactCardCarousel />
      <br/>
      <br/>
      <GoogleMap extraClass="contact" />
      <Footer />
    </Layout>
  );
};

export default Contact;
