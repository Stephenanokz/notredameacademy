import React from "react";
import "./Home.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <About />
      {/* <Courses /> */}
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
