import { gsap } from "gsap";
import { useEffect, useState } from "react";

const SectionSeven = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec7",
        start: () => 0.01 * innerHeight,
        end: () => 1 * innerHeight,
        onLeave: ({ progress, direction, isActive }) => {
          tl.to(".sec7 .section__right img", {
            yPercent: 120,
            duration: 0.5,
          });
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          console.log("data");
          tl.to(".sec7 .section__right img", {
            yPercent: 0,
            duration: 0.5,
          });
        },
      },
    });
    tl.to(".sec7 .section__right img", {
      yPercent: 10,
      duration: 0.5,
    });
  }, []);

  return (
    <section
      className=" first panel d-flex sec7 flex-column-reverse flex-lg-row"
    >
      <div className="section__left" style={{ background: "#591B59" }}>
        <div className="left__up" style={{ background: "#591B59" }}>
          <p></p>
          <h2>25M+ Downloads</h2>
          <span>on appstore and google playstore</span>
        </div>
        <div className="left__down">
          <h2>ABC 123</h2>
          <p>
            We are the best <br /> web development company in the world
          </p>
        </div>
      </div>
      <div
        className="section__right d-flex align-items-center justify-content-center"
        style={{ objectFit: "cover", maxWidth: "100%", background: "#D3D3D4" }}
      >
        <div className="d-flex gap-3 justify-content-center">
          <img className="mobile__img" src="/img/img6b.png" />
          <img className="mobile__img" src="/img/img4g.png" />
        </div>
      </div>
    </section>
  );
};
export default SectionSeven;
