import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/erp-app-development-service.png";
function Six({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".pagewrap6", {
        scrollTrigger: {
          trigger: ".pagewrap6",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".pagewrap6", { backgroundColor: "#01824d" }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#01824d",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".half6", {
        scrollTrigger: {
          trigger: ".half6",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".half6", { backgroundColor: "#01b76a" }),
          // options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#01b76a",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".circle", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".half6",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none restart none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#01b76a",
            }),
          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#022b92",
            });
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#01b76a",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".filled", {
        strokeDasharray: [700, 1000],
        scrollTrigger: {
          trigger: ".half6",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart pause reverse none",
          onEnter: () =>
            gsap.to(".filled", {
              // backgroundColor: "green",
              strokeDasharray: [800, 1000],
            }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        // backgroundColor: "green",
        // eslint-disable-next-line no-dupe-keys
        strokeDasharray: [800, 1000],
      });
    }
  }, []);

  return (
    <div className="pagewrap6 mobile">
      <div className="half6 mobilehalf">
        <div className="box2 marginright hide">
          <div className="p-5 text-white d-flex flex-column">
            <span>Developing ERP Solution for</span>
            <h1>Text Headline</h1>
            <span className="d-flex justify-content-end">
              in furniture industry
            </span>
          </div>
        </div>
        <div className="box1 box1mobile">
          <div className="p-5 text-white mobileText">
            <h1 className="text-uppercase  ">ABC 234</h1>
            {!isMobile ? (
              <div className="d-flex flex-column  ">
                <span>We are the best </span>
                <span>web development company </span>
                <span>in the world</span>
              </div>
            ) : (
              <span className="text-start">This is a sample text for ABC</span>
            )}
          </div>
        </div>
      </div>
      <div className="imagebox imagebg d-flex justify-content-center "></div>
    </div>
  );
}

export default Six;
