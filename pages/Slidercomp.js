import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slidercomp = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    autoplay: false,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <div className="slider_content">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Slider {...settings}>
              <div className="slider_img col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <a href="#">
                  <img src="/slider1.png" />
                </a>
              </div>
              <div className="slider_img col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <a  href="#">
                  {" "}
                  <img src="/slider2.png" />
                </a>
              </div>
              <div className="slider_img col-xl-2 col-lg-2 col-md-2 col-sm-6 ">
                <a  href="#">
                  <img src="/slider3.png" />
                </a>
              </div>
              <div className="slider_img col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <a  href="#">
                  <img src="/slider4.png" />
                </a>
              </div>
              <div className="slider_img col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <a  href="#">
                  <img src="/slider5.png" />
                </a>
              </div>
              <div className="slider_img col-xl-2 col-lg-2 col-md-2 col-sm-6">
                <a  href="#">
                  {" "}
                  <img src="/slider1.png" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidercomp;
