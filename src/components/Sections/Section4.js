import { gsap } from "gsap";
import { useEffect } from "react";

const SectionFour = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec4",
        start: () => 4 * innerHeight,
        end: () => 5 * innerHeight,
        onLeave: ({ progress, direction, isActive }) => {
          tl.to(".sec4 .section__right .left__imgs", {
            yPercent: -100,
            duration: 0.3,
          });
          tl.to(
            ".sec4 .section__right .mid__imgs",
            {
              yPercent: 100,
              duration: 0.3,
            },
            "-=.3"
          );
          tl.to(".sec4 .section__right .last__img", {
            xPercent: 200,
            duration: 0.2,
          })
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          tl.to(".sec4 .section__right .left__imgs", {
            yPercent: -100,
            duration: 0.3,
          });
          tl.to(
            ".sec4 .section__right .mid__imgs",
            {
              yPercent: 100,
              duration: 0.5,
            },
            "-=.3"
          );
          tl.to(".sec4 .section__right .last__img", {
            xPercent: 200,
            duration: 0.2,
          },"-=.2")
        },
        onEnter: ({ progress, direction, isActive }) => {
          tl.from(".sec4 .section__right .left__imgs", {
            yPercent: -100,
            duration: 0.3,
          }).to(".sec4 .section__right .left__imgs", {
            yPercent: 0,
            duration: 0.3,
          });
          tl.from(".sec4 .section__right .mid__imgs", {
            yPercent: 100,
            duration: 0.3,
          }).to(".sec4 .section__right .mid__imgs", {
            yPercent: 0,
            duration: 0.3,
          },"-=.3");
          tl.from(".sec4 .section__right .last__img", {
            xPercent: 200,
            duration: 0.2,
          }).to(".sec4 .section__right .last__img", {
            xPercent: 0,
            duration: 0.2,
          },"-=.2");
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          tl.to(".sec4 .section__right .left__imgs", {
            yPercent: 0,
            duration: 0.3,
          });
          tl.to(
            ".sec4 .section__right .mid__imgs",
            {
              yPercent: 0,
              duration: 0.3,
            },
            "-=.3"
          );
          tl.to(".sec4 .section__right .last__img", {
            xPercent: 0,
            duration: 0.2,
          })
        },
      },
    });
  }, []);

  return (
    <section className=" panel d-flex sec4">
      <div className="section__left" style={{ background: "#0A62A9" }}>
        <div className="left__up" style={{ background: "#0A62A9" }}>
          <p>Developing ERP Solution for</p>
          <h2>Text Headline</h2>
          <span>In Furniture Industry</span>
        </div>
        <div className="left__down">
          <h2>ABC 567</h2>
          <p>
            Best since 2017 <br /> We offer wide range of <br /> web development{" "}
          </p>
        </div>
      </div>
      <div
        className="section__right d-flex flex-row justify-content-around align-items-center"
        style={{ objectFit: "cover", maxWidth: "100%", background: "#43B8D4" }}
      >
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-3 left__imgs">
            <img className="mobile__img mb-5" src="/img/img4c.png" />
            <img className="mobile__img mb-2" src="/img/img4h.png" />
          </div>
          <div className="d-flex flex-row gap-3 mid__imgs">
            <img className="mobile__img" src="/img/img4g.png" />
            <img className="mobile__img" src="/img/img4g.png" />
          </div>
        </div>
        <div className="d-flex flex-column gap-5 last__img">
          <img className="mobile__img" src="/img/img4h.png" />
        </div>
      </div>
    </section>
  );
};
export default SectionFour;
