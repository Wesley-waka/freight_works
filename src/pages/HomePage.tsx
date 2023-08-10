import React from "react";
import {
  Footer,
  Form,
  Navbar,
  Offers,
  PageHero,
  Serve,
  Services,
  Testimonials,
} from "../components";
import { IconContext } from "react-icons";

const HomePage = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          color: "var(--clr-primary-5)",
          size: "3rem",
          className: "global-class-name",
        }}
      >
        <Navbar />
        <PageHero />
        <Services />
        <Offers />
        <Serve />
        <Testimonials />
        <Form />
        <Footer />
      </IconContext.Provider>
    </div>
  );
};

export default HomePage;
