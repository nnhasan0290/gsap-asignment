import React, { useEffect, useRef,useState } from "react";

function Icon() {
  const path = useRef();
  const [scrollPercent, setScrollPercent] = useState(0);

  const animateSvg = () => {
    const svgLength = path.current.getTotalLength();
    path.current.style.strokeDasharray = svgLength; // Get the starting position of the draw.
    path.current.style.strokeDashoffset = svgLength;
    path.current.style.strokeWidth = "5";
    const scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    const draw = svgLength * (scrollpercent);
    setScrollPercent(scrollpercent)

    path.current.style.strokeDashoffset = svgLength - draw;
    if(scrollpercent >= .2){
      path.current
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      animateSvg();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 414 414"
      version="1.1"
      viewBox="0 0 414 414"
      style={{ backgroundColor: "lightblue" }}
      xmlSpace="preserve"
      className="d-lg-block d-none"
    >
      <path
        fill="none"
        stroke="#FFF"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
        className="transrg"
        enableBackground="new"
        opacity="0.4"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeDasharray=""
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
        className="transrgwht"
        ref={path}
      ></path>
      <g className="dots-nav">
        <path
          fill={`${scrollPercent >= 0 ? "#0092FF" : "gray"}`}
          d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsst dotsfill1" 
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsstro1"
        ></path>
      </g>
      <g className="dots-nav">
        <path
          fill="grey"
          d="M 206.8, 29c-3.3, 0-6 2.7-6, 6s2.7, 6, 6, 6, 6-2.7, 6-6-2.7-6-6-6z"
          className="dotsst dotsfill2"
        ></path>
        <path
          fill={`${scrollPercent >= .175 ? "#0092FF" : "gray"}`}
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
          className="dotsstro2"
        ></path>
      </g>
      <g className="dots-nav">
        <path
          fill={`${scrollPercent >= .35 ? "#0092FF" : "gray"}`}
          d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsst dotsfill3"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsstro3"
        ></path>
      </g>
      <g className="dots-nav">
        <path
          fill={`${scrollPercent >= .5 ? "#0092FF" : "gray"}`}
          d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsst dotsfill4"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
          className="dotsstro4"
        ></path>
      </g>
      <g className="dots-nav">
        <path
          fill={`${scrollPercent >= .65 ? "#0092FF" : "gray"}`}
          d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
          className="dotsst dotsfill5"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
          className="dotsstro5"
        ></path>
      </g>
      <g className="dots-nav">
        <path
          fill={`${scrollPercent >= .85 ? "#0092FF" : "gray"}`}
          d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
          className="dotsst dotsfill6"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
          className="dotsstro6"
        ></path>
      </g>
      <g className="dots-nav">
        <path
          fill={`${scrollPercent >= 1 ? "#0092FF" : "gray"}`}
          d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
          className="dotsst dotsfill7"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
          className="dotsstro7"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
