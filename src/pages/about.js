import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import TeamHome from "../components/team/team-home";
import VideoCard from "../components/videos/video-card";
import Testimonials2 from "../components/testimonials/testimonials-2";
//import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";

const About = () => {
  return (
    <Layout pageTitle="About | What We Do | AVBGMS">
      <HeaderOne />
      <br/> <br/>
      <PageHeader title="What We Do" crumbTitle="About" />
      <StickyHeader />
      <AboutOne />
      {/* <BrandCarousel extraClass="client-carousel__has-border-top" /> */}
      <AboutCounter />
      <TeamHome />
      <VideoCard />
      <Testimonials2 />
      <Footer />
    </Layout>
  );
};

export default About;
