import React from "react";
import "./style.css";
import Navbar from "./navbar";
import Maincontent from "./maincontent";
import Footer from "./footer";
import Joebot from "./joebot";
const Home = () => {
  return (
    <div className="cover">
      <Navbar />
      <Maincontent />
      <Joebot />
      <Footer />
    </div>
  );
};

export default Home;
