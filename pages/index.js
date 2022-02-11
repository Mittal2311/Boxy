import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./header";
import Banner from "./Banner";

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
                className="open"
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
                  <div></div>
             
              )}
            </button>
            {/* <Header />  */}
            {isOpen ? (
              <div className="mobile_nav">
                <nav className="navbar">
                <div onClick={()=>{setIsOpen(false)}}>
                <svg
                  className="close block h-6 w-6"
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
                </div>
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
              <div>
              
              </div>
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
             
              <Banner />

        {/*                                            Banner Section End                                  */}
        
    </>
  );
}
