import React from "react";
import HeroSlider from "../Slider/HeroSlider";
import Features from "../Features/Features";
import About from "../About/About";
import Subscription from "../Subscription/Subscription";
import Work from "../OurWork/Work";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Features />
      <About />
      <Subscription />
      <Work />
      <Contact />
    </div>
  );
}
