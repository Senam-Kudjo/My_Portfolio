import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import "../index";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Home;
