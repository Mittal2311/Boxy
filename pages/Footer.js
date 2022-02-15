import React from "react";
import Link from "next/link";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 footer_content">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4  footer_logo d-inline-block">
                <a href="#">
                  <img src="/logo.svg" className="img-responsive" /> boxy
                </a>
                <span>Creative Agency</span>
                <ul className="footer_social d-flex">
                  <li>
                    <a href="#">
                      <img src="/facebook.png" className="img-responsive" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/twitter.png" className="img-responsive" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/instagram.png" className="img-responsive" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/tiktok.png" className="img-responsive" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 footer_right d-inline-block">
                <ul>
                  <li className="active">
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">
                      <span> About</span> <span> Terms</span>
                      <span> Legal</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 footer_right d-inline-block">
                <ul>
                  <li className="active">
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">
                     
                      <span> Behance </span> <span> Dribbble</span>{" "}
                      <span> Adobe</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 footer_right d-inline-block">
                <ul>
                  <li className="active">
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      <span> Leadership </span> <span> Support</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 footer_right d-inline-block">
                <ul>
                  <li className="active"> 
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">
                      <span> Twitter</span> <span> Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-inline-block">
              <p> © Copyright 2022 boxy</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-inline-block right">
              <p className="">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
