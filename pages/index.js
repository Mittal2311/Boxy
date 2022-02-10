import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./header";
import mobileheaders from "./mobileheader";
import Mobileheaders from "./mobileheader";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <h1> My First sapp</h1> */}
      <div className="main">
        <div className="container">
          <div className="mobile_menu">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="btnicon"
            >
              {!isOpen ? (
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="3" fill="#111111" />
                  <rect y="8" width="24" height="3" fill="#111111" />
                  <rect y="16" width="24" height="3" fill="#111111" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24"
                  height="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
            {/* <Header />  */}

            {isOpen ? (
              <div className="mobile_nav">
                <nav className="navbar">
                  <Link href="/">
                    <a>Work</a>
                  </Link>
                  <Link href="/About">
                    <a>About</a>
                  </Link>
                  <Link href="/Contact">
                    <a>Contact</a>
                  </Link>
                </nav>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/logo.svg" />
                boxy
              </a>
            </Link>
          </div>
          <div className="menu">
            <Header />
          </div>
        </div>
        </div>
        {/*                                            Banner Section start                                   */}
        {/* <div className="banner_section">
          <div className="container">
          <div className="content">
            <div className="banner_content">
            <h1 className="title">Welcom <span>e to </span> our agency.</h1>
              <p> We are boxy, an innovative, client-first agency. We have worked with the likes of Droplet and Blimp. </p>
              <p>
              Our team has over 100 years of collective experience in 3D marketing and branding. 
              </p>
              <a href="#" className="ourlink">Our Work</a>
            </div>
              
            </div>
          </div>
        </div> */}

        {/*                                            Banner Section End                                  */}
     
    </>
  );
}
