
import "./App.css";



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { useLayoutEffect } from "react";
import Section from "./components/Sections/Section";

import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "./components/Svg";
import SectionTwo from "./components/Sections/Section2";
import SectionThree from "./components/Sections/Section3";
import SectionFour from "./components/Sections/Section4";
import SectionFive from "./components/Sections/Section5";
import SectionSix from "./components/Sections/Section6";
import SectionSeven from "./components/Sections/Section7";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    let sections = gsap.utils.toArray("section"),
      currentSection = sections[0];

    gsap.defaults({ overwrite: "auto", duration: 0.3 });

    gsap.set("body", { height: sections.length * 100 + "%" });

    // create a ScrollTrigger for each section
    sections.forEach((section, i) => {
      if (i === 6) {
        ScrollTrigger.create({
          start: () => (i - 0.02) * innerHeight,
          end: () => (i + 1) * innerHeight,
          onToggle: (self) => self.isActive && setSection(section),
        });
      } else {
        ScrollTrigger.create({
          start: () => i * innerHeight,
          end: () => (i + 1) * innerHeight,
          onToggle: (self) => self.isActive && setSection(section),
        });
      }
    });

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, { autoAlpha: 0 });
        gsap.to(newSection, { autoAlpha: 1 });
        currentSection = newSection;
      }
    }

    // ScrollTrigger.create({
    //   start: 1,
    //   end: () => ScrollTrigger.maxScroll(window) - 1,
    //   onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
    //   onLeave: (self) => self.scroll(2),
    // }).scroll(2);
  }, []);

  return (
    <>
  
    <div className="App">
      <Icon />
      <SectionSeven />
      <SectionSix />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionTwo />
      <Section />
    </div>
    </>
  );
}

export default App;
