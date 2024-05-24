import React, { useContext } from "react";
import AboutMe from "./AboutMe";
import Card from "./Card";
import { FaLaptopCode, FaMobileAlt, FaCamera, FaLaptop } from "react-icons/fa";
import Testimonials from "./Testinomials";
import Experiences from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import { LayoutContext } from "../../Context/LayoutContext";

export default function UsersDetails() {
  const { selectedLayout } = useContext(LayoutContext);
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
    <div
      className={`container-fluid border  rounded  ${
        window.innerWidth >= 768 && window.innerWidth <= 1050 ? "mt-4" : "mt-3"
      }`}
    >
      <div className={`row`}>
        <div className={`col-12`}>
          {selectedLayout === 1 && <AboutMe />}
          {selectedLayout === 3 && <AboutMe />}
          {selectedLayout === 2 && <Education />}
          {selectedLayout === 3 && <Experiences />}

          {selectedLayout === 3 && <Projects />}
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
          {selectedLayout === 4 && <Education />}
          {selectedLayout === 1 && <Experiences />}
          {selectedLayout === 2 && <Experiences />}
          {selectedLayout === 1 && <Projects />}
          {selectedLayout === 2 && <Projects />}
        </div>
      </div>
    </div>
  );
}
