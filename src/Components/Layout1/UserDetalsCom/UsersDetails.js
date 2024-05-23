import React, { useContext } from "react";
import AboutMe from "./AboutMe";
import Card from "./Card";
import { FaLaptopCode, FaMobileAlt, FaCamera, FaLaptop } from "react-icons/fa";
import Testimonials from "./Testinomials";
import Experiences from "./Experience";
import Projects from "./Projects";
import Education from "./Education";

export default function UsersDetails() {
  const card1 = {
    title: "Web Design",
    description: "Modern and high-quality design at a professional level.",
    icon: FaLaptop,
  };

  const card2 = {
    title: "Web Development",
    description: "High-quality development of sites at the professional level",
    icon: FaLaptopCode,
  };
  const card3 = {
    title: "Mobile Apps",
    description:
      "Professional development of applications for iOS and Android.",
    icon: FaMobileAlt,
  };
  const card4 = {
    title: "Photography",
    description:
      "I make high-quality photos of any category at a professional level.",
    icon: FaCamera,
  };

  return (
    <div className={`container border  rounded my-3 `}>
      <div className={`row`}>
        <div className={`col-12`}>
          <AboutMe />
          <h4
            className={`mt-4 text-start`}
            style={{ fontFamily: "Verdana", fontWeight: "500" }}
          >
            What I'm Doing
          </h4>
          <div className="row">
            <Card
              title={card1.title}
              description={card1.description}
              icon={card1.icon}
            />
            <Card
              title={card2.title}
              description={card2.description}
              icon={card2.icon}
            />
          </div>
          <div className="row mt-3">
            <Card
              title={card3.title}
              description={card3.description}
              icon={card3.icon}
            />
            <Card
              title={card4.title}
              description={card4.description}
              icon={card4.icon}
            />
          </div>
          <Testimonials />
          <Education />
          <Experiences />
          <Projects />
        </div>
      </div>
    </div>
  );
}