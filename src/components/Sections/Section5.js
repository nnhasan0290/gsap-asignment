import { gsap } from "gsap";
import { useEffect } from "react";


const SectionFive = () => {




  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec3",
        start: () => 3 * innerHeight,
        end: () => 4 * innerHeight,
        onLeave: ({ progress, direction, isActive }) => {
          tl.to(".sec5 .section__right img:first-child", {
            yPercent: 100,
            duration: 0.3
          });
          tl.to(
            ".sec5 .section__right img:last-child",
            {
              yPercent: -100,
              duration: 0.3,
            }
          );
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          tl.to(".sec5 .section__right img:first-child", {
            yPercent: 100,
            duration: 0.3
          });
          tl.to(
            ".sec5 .section__right img:last-child",
            {
              yPercent: -100,
              duration: 0.3,
            }
          );
        },
        onEnter: ({ progress, direction, isActive }) => {
          tl.from(".sec5 .section__right img:first-child", {
            yPercent: 100,
            duration: 0.5,
          }).to(".sec5 .section__right img:first-child", {
            yPercent: 0,
            duration: 0.5,
          });
          tl.from(
            ".sec5 .section__right img:last-child",
            {
              yPercent: -100,
              duration: 0.5,
            },
            "-=1"
          ).to(
            ".sec5 .section__right img:last-child",
            {
              yPercent: -10,
              duration: 0.5,
            },
            "-=.5"
          );
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          tl.to(".sec5 .section__right img:first-child", {
            yPercent: 0,
            duration: 0.5,
          });
          tl.to(
            ".sec5 .section__right img:last-child",
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
    <section className="sec5 panel d-flex">
        <div className="section__left" style={{background: "#0E1138"}}>
          <div className="left__up" style={{background: "#0E1138"}}>
            <p>Developing ERP Solution for</p>
            <h2>Text Headline</h2>
            <span>In Furniture Industry</span>
          </div>
          <div className="left__down">
            <h2>ABC 567</h2>
            <p>Best since 2017 <br/> We offer wide range of <br/> web development </p>
          </div>
        </div>
        <div className="section__right position-relative d-flex align-items-center justify-content-center" style={{objectFit: "cover", maxWidth: "100%", background: "#141647"}}>
          <div>
          <img className="mobile__img" src="/img/img5z.png"/>
          <img className="mobile__img" src="/img/img5n.png"/>
          </div>
        </div>
    </section>
  );
};
export default SectionFive;
