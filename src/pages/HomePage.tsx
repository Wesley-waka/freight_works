import React from "react";
import { Navbar, Offers, PageHero, Services } from "../components";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <PageHero />
      <Services />
      <Offers />
    </div>
  );
};

export default HomePage;
