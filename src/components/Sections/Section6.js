import { gsap } from "gsap";
import { useEffect } from "react";

const SectionSix = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec3",
        start: () => 1 * innerHeight,
        end: () => 2 * innerHeight,
        onLeave: ({ progress, direction, isActive }) => {
          tl.to(".sec6 .section__right img:first-child", {
            yPercent: 100,
            duration: 0.5,
          });
          tl.to(
            ".sec6 .section__right img:last-child",
            {
              yPercent: -100,
              duration: 0.5,
            },
            "-=1"
          );
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          tl.to(".sec6 .section__right img:first-child", {
            yPercent: 100,
          });
          tl.to(
            ".sec6 .section__right img:last-child",
            {
              yPercent: -100,
              duration: 0.5,
            },
            "-=1"
          );
        },
        onEnter: ({ progress, direction, isActive }) => {
          tl.from(".sec6 .section__right img:first-child", {
            yPercent: 100,
            duration: 0.5,
          }).to(".sec6 .section__right img:first-child", {
            yPercent: 0,
            duration: 0.5,
          });
          tl.from(
            ".sec6 .section__right img:last-child",
            {
              yPercent: -100,
              duration: 0.5,
            },
            "-=1"
          ).to(
            ".sec6 .section__right img:last-child",
            {
              yPercent: -10,
              duration: 0.5,
            },
            "-=1"
          );
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          tl.to(".sec6 .section__right img:first-child", {
            yPercent: 0,
            duration: 0.5,
          });
          tl.to(
            ".sec6 .section__right img:last-child",
            {
              yPercent: -10,
              duration: 0.5,
            },
            "-=.5"
          );
        },
      },
    });
  }, []);

  return (
    <section className="sec6 panel d-flex">
      <div className="section__left" style={{ background: "#451FC3" }}>
        <div className="left__up" style={{ background: "#451FC3" }}>
          <p className="text-start">The next big</p>
          <h2>Blockchain</h2>
          <span>Revolution</span>
        </div>
        <div className="left__down">
          <h2>ABC 567</h2>
          <p>
            Best since 2017 <br /> We offer wide range of <br /> web development{" "}
          </p>
        </div>
      </div>
      <div
        className="section__right position-relative d-flex align-items-center justify-content-center"
        style={{ objectFit: "cover", maxWidth: "100%", background: "#141647" }}
      >
        <div className="">
          <img className="mobile__img" src="/img/img6b.png" />
          <img className="mobile__img" src="/img/img4g.png" />
        </div>
      </div>
    </section>
  );
};
export default SectionSix;
