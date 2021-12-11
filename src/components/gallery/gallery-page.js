import React from "react";
import GalleryCard from "./gallery-card";
import galleryImage1 from "../../assets/images/gallery/gallery-1-1.jpg";
import galleryImage2 from "../../assets/images/gallery/gallery-1-2.jpg";
import galleryImage3 from "../../assets/images/gallery/gallery-1-3.jpg";
import galleryImage4 from "../../assets/images/gallery/gallery-1-4.jpg";
import galleryImage5 from "../../assets/images/gallery/gallery-1-5.jpg";
import galleryImage6 from "../../assets/images/gallery/gallery-1-6.jpg";
import galleryImage7 from "../../assets/images/gallery/gallery-1-7.jpg";
import galleryImage8 from "../../assets/images/gallery/gallery-1-8.jpg";
import galleryImage9 from "../../assets/images/gallery/gallery-1-9.jpg";
import galleryImage10 from "../../assets/images/gallery/gallery-1-10.jpg";
import galleryImage11 from "../../assets/images/gallery/gallery-1-11.jpg";
import galleryImage12 from "../../assets/images/gallery/gallery-1-12.jpg";
import galleryImage13 from "../../assets/images/gallery/gallery-1-13.jpg";
import galleryImage14 from "../../assets/images/gallery/gallery-1-14.jpg";
import galleryImage15 from "../../assets/images/gallery/gallery-1-15.jpg";

const GalleryPage = () => {
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <div className="gallery-3-col">
          <GalleryCard image={galleryImage1} />
          <GalleryCard image={galleryImage2} />
          <GalleryCard image={galleryImage3} />
          <GalleryCard image={galleryImage4} />
          <GalleryCard image={galleryImage5} />
          <GalleryCard image={galleryImage6} />
          <GalleryCard image={galleryImage7} />
          <GalleryCard image={galleryImage8} />
          <GalleryCard image={galleryImage9} />
          <GalleryCard image={galleryImage10} />
          <GalleryCard image={galleryImage11} />
          <GalleryCard image={galleryImage12} />
          <GalleryCard image={galleryImage13} />
          <GalleryCard image={galleryImage14} />
          <GalleryCard image={galleryImage15} />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
