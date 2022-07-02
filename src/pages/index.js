import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import AboutTwo from "../components/about/about-two";
import VideoCard from "../components/videos/video-card";
//import FeaturedCause from "../components/featured-cause";
//import ServiceTwo from "../components/services/service-two";
//import FaqOne from "../components/faq-one";
//import CausesHome from "../components/causes/causes-home";
//import PriceOne from "../components/price-one";
//import FactCounter from "../components/fact-counter";
//import BrandCarousel from "../components/brand-carousel";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import Testimonials2 from "../components/testimonials/testimonials-2";
import VideoCard2 from "../components/videos/video-card-2";
//import GalleryHomeTwo from "../components/gallery/gallery-home-two";
import BlogHomeTwo from "../components/blog/blog-home-two";
//import EventHomeTwo from "../components/event/event-home-two";
import Footer from "../components/footer";
import PriceOne from "../components/price-one";

const HomeTwo = () => {
  return (
    <Layout pageTitle="Atal-Vivek Bharat Gyan-Mandir Sansthan">
      <HeaderTwo />
      <StickyHeader extraClassName="stricky-header-two" />
      <MainSliderTwo />
      {/*<ServiceTwo /> */}
      <AboutTwo />
      <VideoCard />
      {/*<FactCounter />
      <CausesHome />
      <FeaturedCause />
      <FaqOne />*/}
      <TestimonialsOne />      
      <VideoCard2/>      
      <Testimonials2 />
      {/*<PriceOne />
      <BlogHomeTwo />
      <GalleryHomeTwo />
      <EventHomeTwo />
      
      <BrandCarousel extraClass="client-carousel__has-border-top" />*/}
      <Footer />
    </Layout>
  );
};

export default HomeTwo;
