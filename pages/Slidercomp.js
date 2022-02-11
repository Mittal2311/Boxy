import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

const Slidercomp = () => {
          const settings = {
            dots: false,
            infinite: true,
            // speed: 500,
            slidesToShow: 5,
            autoplay:1500,
            arrows: false,
            slidesToScroll: 1
          };
          return (
            <div className="slider_content">
             <div className="container">
            <Slider {...settings}>
                <div className="slider_img">
                <img src="/slider1.png" />
                </div>
                <div className="slider_img">
                <img src="/slider2.png" />
                </div>
                <div className="slider_img">
                <img src="/slider3.png" />
                </div>
                <div className="slider_img">
                <img src="/slider4.png" />
                </div>
                <div className="slider_img">
                <img src="/slider5.png" />
                </div>
                <div className="slider_img">
                <img src="/slider1.png" />
                </div>
              </Slider>           
               </div>
              
            </div>
          );
        }
    


export default Slidercomp;

