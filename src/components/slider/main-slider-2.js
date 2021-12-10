import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../assets/images/main-slider/slider-2-1.jpg";
import banner2 from "../../assets/images/main-slider/slider-1-2.jpg";
import banner3 from "../../assets/images/main-slider/slider-1-1.jpg";
import banner4 from "../../assets/images/main-slider/slider-2-2.jpg";
import banner5 from "../../assets/images/main-slider/slider-2-3.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };

  return (
    <section className="main-slider main-slider__two">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <h2>
                  Spreading smiles and education
                </h2>
                <p>Making a difference by educating the underprivileged children </p>                
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
              <h2>
                  Education with some spiritual practice
                </h2>
                <p>Making a difference by educating the underprivileged children </p>   
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={6} lg={12} className="text-left">
              <h2>
                  Fun time with kids
                </h2>
                <p>Making a difference by educating the underprivileged children </p>   
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner4})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={6} lg={12} className="text-left">
              <h2>
                  Medical checkup camp for all
                </h2>
                <p>Free medical check for all, health is wealth</p>   
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner5})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={6} lg={12} className="text-left">
              <h2>
                  Tree plantation time
                </h2>
                <p>A little step towards greener world</p>   
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
