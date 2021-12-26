import "../src/components/style.css";
import Five from "./components/Five";
import Four from "./components/Four";
import One from "./components/One";
import Seven from "./components/Seven";
import Six from "./components/Six";
import Three from "./components/Three";
import Two from "./components/Two";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BrowserView, MobileView } from "react-device-detect";
function App() {
  const div1 = useRef();
  const div2 = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".circle2",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".first",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="main">
      <BrowserView>
        <div>
          <svg
            className="circle"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 414 414"
            version="1.1"
            viewBox="0 0 414 414"
            style={{ backgroundColor: "#6411a9" }}
            xmlSpace="preserve"
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
              strokeDasharray="5, 1000"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
              className="transrgwht filled"
            ></path>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill1"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro1"
              ></path>
            </g>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                className="dotsst dotsfill2"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN"
                className="dotsstro2"
              ></path>
            </g>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                className="dotsst dotsfill3"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                className="dotsstro3"
              ></path>
            </g>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                className="dotsst dotsfill4"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN"
                className="dotsstro4"
              ></path>
            </g>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                className="dotsst dotsfill5"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                className="dotsstro5"
              ></path>
            </g>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                className="dotsst dotsfill6"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN"
                className="dotsstro6"
              ></path>
            </g>
            <g className="dots-nav">
              <path
                fill="#0092FF"
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                className="dotsst dotsfill7"
              ></path>
              <path
                fill="none"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN"
                className="dotsstro7"
              ></path>
            </g>
          </svg>
        </div>
        <One isMobile={false} />
        <Two isMobile={false} />
        <Three isMobile={false} />
        <Four isMobile={false} />
        <Five isMobile={false} />
        <Six isMobile={false} />
        <Seven isMobile={false} />
      </BrowserView>
      <MobileView>
        <Carousel showArrows={true}>
          <One isMobile={true} />
          <Two isMobile={true} />
          <Three isMobile={true} />
          <Four isMobile={true} />
          <Five isMobile={true} />
          <Six isMobile={true} />
          <Seven isMobile={true} />
        </Carousel>
      </MobileView>

      <div className="hiddendiv"></div>
    </div>
  );
}

export default App;
