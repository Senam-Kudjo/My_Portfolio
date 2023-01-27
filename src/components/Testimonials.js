import React from "react";
import "./TestimonialsStyles.css";
import { AiFillStar } from "react-icons/ai";
import ADB from "../assets/adb.png";
import Homebase from "../assets/logo.png";
import Abena from "../assets/abena.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="ttitle">
        <h1>TESTIMONIALS</h1>
        <p>Here is my clients had to say about my projects for them</p>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="testimonialsCol">
              <img src={Abena} />
              <h3>Abena Mintah</h3>
              <span>Project: Abena's Deluxe Thrift Shop(Website)</span>
              <p>
                Having an E-commerce website while in the university made things
                so much easier for my business all thanks to Senam.
              </p>
              <div className="ratings">
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonialsCol">
              <img src="/assets/kofi.jpg" />
              <h3>Emmanuel Besavi Agbanyo</h3>
              <span>Project: Campus-Sell(Website)</span>
              <p>
                Senam built the frontend website that host the vendors on our
                mobile app, CampusMall to set up their digital stores.
              </p>
              <div className="ratings">
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonialsCol">
              <img src={ADB} />
              <h3>Dr. Emmanuel Boateng (Head of IT dept. of ADB)</h3>
              <span>
                Project: Prototype modern website for Agric Development Bank
              </span>
              <p>
                During the one month Senam spent here at the ADB head office he
                took it upon himself to develop a responsive and interactive
                website for the bank.
              </p>
              <div className="ratings">
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
                <AiFillStar style={{ color: "yellow", fontSize: 30 }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="row">
       

      <div className="row">
        <div className="testimonialsCol">
          <img src={Abena} />
          <div>
            <h3></h3>
            

            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
          </div>
        </div>

        <div className="testimonialsCol">
          <img src={Homebase} />
          <div>
            <h3>Homebase Ventures Ltd</h3>
            <span>Project: Prototype website for Homebase Venture Ltd</span>
            <p>
              Made a beautiful homepage website for a Lighting Sytem company I
              chanced to see online as one of my projects.
            </p>

            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
            <AiFillStar style={{ color: "yellow" }} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
