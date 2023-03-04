import React from "react";
import NavBar from "../components/navbar.js";
import Aboutheader from "../components/aboutheader";
import AboutFeature from "../components/aboutFeature";
import Trust from "../components/abouttrust";
import Review from "../components/review";
import NewFooter from "../components/newFooter.js";

const AboutPage = () => {
  return (
    <>
      <NavBar ml={"xl:ml-36"} />
      <Aboutheader />
      <AboutFeature />
      <Trust />
      <Review />
      <NewFooter />
    </>
  );
};

export default AboutPage;
