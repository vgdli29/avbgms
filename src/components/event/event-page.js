import React from "react";
import { Container } from "react-bootstrap";
import EventCard from "./event-card";
//import PostPaginations from "../post-paginations";

import image1 from "../../assets/images/events/event-1-1.jpg";
import image2 from "../../assets/images/events/event-1-2.jpg";
import image3 from "../../assets/images/events/event-1-3.jpg";
import image4 from "../../assets/images/events/event-1-4.jpg";
import image5 from "../../assets/images/events/event-1-5.jpg";
import image6 from "../../assets/images/events/event-1-6.jpg";
import image7 from "../../assets/images/events/event-1-7.jpg";
import image8 from "../../assets/images/events/event-1-8.jpg";

const EVENTS_DATA = [
  {
    image: image1,
    title: "Books and Stationary distribution",
    date: "20 May",
    location: "AVBGMS, Greater Noida",
    link: "/event-details"
  },
  {
    image: image2,
    title: "Mask distribution",
    date: "20 May",
    location: "AVBGMS, Greater Noida",
    link: "/event-details"
  },
  {
    image: image3,
    title: "Flag hoasting on Republic Day 2022",
    date: "20 May",
    location: "AVBGMS, Greater Noida",
    link: "/event-details"
  },
  {
    image: image4,
    title: "Birthday celebration with food distribution",
    date: "20 May",
    location: "AVBGMS, Greater Noida",
    link: "/event-details"
  },
  {
    image: image5,
    title: "Yoga workshop",
    date: "20 May",
    location: "AVBGMS, Greater Noida",
    link: "/event-details"
  },
  {
    image: image6,
    title: "Free dental checkup",
    date: "20 May",
    location: "Nirala Aspire, Noida Extension",
    link: "/event-details"
  },
  {
    image: image7,
    title: "Free health checkup",
    date: "20 May",
    location: "Nirala Aspire, Noida Extension",
    link: "/event-details"
  },
  {
    image: image8,
    title: "Birthday elebration",
    date: "20 May",
    location: "AVBGMS, Greater Noida",
    link: "/event-details"
  }
];
const EventPage = () => {
  return (
    <section className="event-page pt-120 pb-120">
      <Container>
        <div className="event-grid">
          {EVENTS_DATA.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
        {/*<PostPaginations /> */}
      </Container>
    </section>
  );
};

export default EventPage;
