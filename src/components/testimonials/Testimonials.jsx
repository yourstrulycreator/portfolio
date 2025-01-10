import React from "react";
import testimonials from "./Data"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What People Say</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {testimonials.map(({ id, image, name, feedback }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="testimonial" className="testimonial__img" />
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__description">{feedback}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;