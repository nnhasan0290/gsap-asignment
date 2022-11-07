import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {





  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.sec4",
        start: () => 5 * innerHeight,
        end: () => 6 * innerHeight,

        onLeave: ({ progress, direction, isActive }) => {
          console.log("leave");
          tl.to(".sec2 .section__right .top_images", {
            yPercent: -100,
            duration: 0.2,
          });
          tl.to(".sec2 .section__right .bottom__images", {
            yPercent: 100,
            duration: 0.2,
          })
          tl.to(".sec2 .section__right .mid__image", {
            yPercent: -200,
            duration: 0.2,
          })
        },
         onLeaveBack: ({ progress, direction, isActive }) => {
          console.log("back")
          tl.to(".sec2 .section__right .top_images", {
            yPercent: -100,
            duration: 0.2,
           });
          tl.to(".sec2 .section__right .bottom__images", {
            yPercent: 100,
            duration: 0.2,
          })
          tl.to(".sec2 .section__right .mid__image", {
            yPercent: -200,
            duration: 0.2,
          })
        },
        onEnter: ({ progress, direction, isActive }) => {
          tl.from(".sec2 .section__right .top_images", {
            yPercent: -100,
            duration: 0.2,
          }).to(".sec2 .section__right .top_images", {
            yPercent: 0,
            duration: 0.2,
          });
          tl.from(".sec2 .section__right .bottom__images", {
            yPercent: 100,
            duration: 0.2,
          }).to(".sec2 .section__right .bottom__images", {
            yPercent: 0,
            duration: 0.2,
          });
          tl.from(".sec2 .section__right .mid__image", {
            yPercent: -200,
            duration: 0.2,
          }).to(".sec2 .section__right .mid__image", {
            yPercent: 0,
            duration: 0.2,
          });
        },
         onEnterBack: ({ progress, direction, isActive }) => {
          tl.to(".sec2 .section__right .top_images", {
            yPercent: 0,
            duration: 0.2,
          });
          tl.to(".sec2 .section__right .bottom__images", {
            yPercent: 0,
            duration: 0.2,
          });
          tl.to(".sec2 .section__right .mid__image", {
            yPercent: 0,
            duration: 0.2,
          },"-=.6");
        },
      },
    });
  }, []);






  return (
    <section className=" panel d-flex sec2">
        <div className="section__left" style={{background: "#0B1D33"}}>
          <div className="left__up" style={{background: "#0B1D33"}}>
            <p className="text-start">Redefining</p>
            <h2>UX strategy</h2>
            <span>And Ui design</span>
          </div>
          <div className="left__down">
            <h2>ABC 456</h2>
            <p>Best since 2017 <br/> We offer wide range of <br/> web development </p>
          </div>
        </div>
        <div  className="section__right d-flex flex-column justify-content-between" style={{background:"#00070C",position: "relative"}}>
          <div className="d-flex justify-content-between top_images">
            <img style={{width: "200px"}} src="/img/img2pz.png"/>
            <img style={{height: "200px", width: "150px", paddingBottom: "50px", marginRight: "50px"}} src="/img/img2p.png"/>
          </div>
          <img className="mid__image" style={{width: "200px", position: "absolute", top:"100px", right:"150px" }}  src="/img/img2mr.png"/>
          <div className="bottom__images d-flex justify-content-between align-items-bottom">
            <img src="/img/img2.png" style={{width: "200px",marginLeft:"50px"}}/>
            <img src="/img/img2b.png" style={{width: "200px"}}/>
          </div>
        </div>
    </section>
  );
};
export default SectionTwo;
