import { gsap } from "gsap";
import { useEffect } from "react";


const Section = () => {


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec3",
        start: () => 5.9 * innerHeight,
        end: () => 7 * innerHeight,
        onEnter: ({ progress, direction, isActive }) => {
          tl.from(".sec1 .section__right img", {
            yPercent: 100,
            duration: 0.3,
          }).to(".sec1 .section__right img", {
            yPercent: 0,
            duration: 0.3,
          });
        },
      },
    });
  }, []);


  return (
    <section className=" panel d-flex sec1">
      <div className="section__left" style={{ background: "#0B2C4F" }}>
        <div className="left__up" style={{ background: "#0B2C4F" }}>
            <p>Developing ERP Solution for</p>
            <h2>Text Headline</h2>
            <span>In Furniture Industry</span>
          </div>
          <div className="left__down">
            <h2>ABC 678</h2>
          <p>
            Best since 2017 <br /> We offer wide range of <br /> web development{" "}
          </p>
          </div>
        </div>
      <div
        className="section__right"
        style={{
          backgroundImage: "url(/img/interior.jpg)",
        }}
      >
        <img
          style={{ objectFit: "cover", maxWidth: "100%" }}
          src="/img/img-1.png"
        />
        </div>
    </section>
  );
};
export default Section;
