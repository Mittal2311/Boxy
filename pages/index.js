import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./header";
import Banner from "./Banner";
import Slidercomp from "./Slidercomp";
import Exbootstrap from "./Exbootstrap";
import Footer from "./Footer";
import Headermain from "./headermain";
import Card from "./Card";
import cardJson from "./json/card.json"

export default function Home() {
  //const [isOpen, setIsOpen] = useState(false);
  const [cardData] = useState(cardJson);
  
  return (
    <>
      <Headermain />
      {/* Banner Section start */}
      {/* <Banner /> */}
      {/* Banner Section End */}
      <Slidercomp />
      <div className="card_section">
        <div className="container">
          <div className="row">
            {
              cardData.map(item => <Card data={item} />)
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
