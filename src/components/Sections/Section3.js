import { gsap } from "gsap";
import { useEffect } from "react";

const SectionThree = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec3",
        start: () => 2 * innerHeight,
        end: () => 3* innerHeight,
        onLeave: ({ progress, direction, isActive }) => {
          tl.to(".sec3 .section__right img", {
            yPercent: -100,
            duration: 0.5,
          });
        
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          tl.to(".sec3 .section__right img", {
            yPercent: -100,
            duration: 0.5,
          });
        },
        onEnter: ({ progress, direction, isActive }) => {
          tl.to(".sec3 .section__right img", {
            yPercent: 10,
            duration: 0.5,
          });
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          tl.to(".sec3 .section__right img", {
            yPercent: 10,
            duration: 0.5,
          });
        },
      },
    });
    tl.from(".sec3 .section__right img", .5,{
      yPercent: -100,
    }).to(".sec3 .section__right img",{
      yPercent: 10,
      duration: .5
    });
  }, []);
  return (
    <section className=" panel d-flex sec3">
      <div className="section__left" style={{ background: "#008042" }}>
        <div className="left__up" style={{ background: "#008042" }}>
          <p>Biggest Classifields</p>
          <h2>East Asia</h2>
          <span>Countries</span>
        </div>
        <div className="left__down">
          <h2>ABC 23478</h2>
          <p>
            Best since 2017 <br /> We offer wide range of <br /> web development{" "}
          </p>
        </div>
      </div>
      <div
        className="section__right position-relative "
        style={{ objectFit: "cover", maxWidth: "100%", background: "#15B25A" }}
      >
        <div className="d-flex justify-content-center ">
          <img className="mobile__img"
            src="/img/img3g.png"
          />
          <img
            className="mobile__img"
            src="/img/img3w.png"
          />
        </div>
      </div>
    </section>
  );
};
export default SectionThree;
