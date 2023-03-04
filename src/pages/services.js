import React from "react";
import NavBar from "../components/navbar.js";
import BusinessList from "../components/bussiness";
import Footer from "../components/footer";
import NewFooter from "../components/newFooter.js";

const ServicePage = () => {
  return (
    <>
      <NavBar ml={"xl:ml-36"} />
      <BusinessList />
      <NewFooter />
    </>
  );
};

export default ServicePage;
