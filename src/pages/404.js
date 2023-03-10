import React from "react";
import NavBar from "../components/navbar.js";
import ErrorNotFound from "../components/error.js";
import Footer from "../components/footer.js";
import NewFooter from "../components/newFooter.js";

const ErrorPage = () => {
  return (
    <>
      <NavBar ml={"xl:ml-36"} />
      <ErrorNotFound />
      <NewFooter />
    </>
  );
};

export default ErrorPage;
