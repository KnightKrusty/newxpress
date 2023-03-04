import React from "react";
import { Link } from "gatsby";
import Feature from "../components/feature.js";
import LogoCloud from "../components/logocloud.js";
import Header from "../components/header.js";
import Services from "../components/services.js";
import CloudLogo from "../components/cloudlogo.js";
import Footer from "../components/footer.js";
import Review from "../components/review";
import NewFooter from "../components/newFooter.js";
import HeaderFixed from "../components/header_fixed";

export default function Home() {
  return (
    <>
      <HeaderFixed />
      <Services />
      <Feature />
      <LogoCloud />
      <Review />
      <NewFooter />
    </>
  );
}
