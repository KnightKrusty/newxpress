import React from "react";
import NavBar from "../components/navbar.js";
import ContactUs from "../components/contact";
import NewFooter from "../components/newFooter";

const ContactPage = () => {
  return (
    <>
      <NavBar ml={"xl:ml-36"} />
      <ContactUs />
      <NewFooter />
    </>
  );
};

export default ContactPage;
