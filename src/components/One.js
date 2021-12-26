import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/nexgtv-entertainment-mobile-app-development.png";
import image2 from "../assets/nexgtv-mobile-app-ui-design.png";
function One({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!isMobile) {
      gsap.from(
        ".image1",

        {
          opacity: 0,
          y: -500,
          duration: 2,
        }
      );
      gsap.from(
        ".image2",
        {
          scrollTrigger: {
            trigger: ".circle",

            start: "bottom bottom", //when top of herman passes 75% viewport height
            end: "bottom 100%", //when bottom of herman passes 25% viewport height
            scrub: true,
            //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions: "reverse pause reverse none",
          },
        },

        {
          opacity: 0,
          y: 500,
          duration: 2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
        }
      );

      gsap.to(".half", {
        scrollTrigger: {
          trigger: ".half",

          start: "center center", //when top of herman passes 75% viewport height
          end: "bottom 100%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "reverse pause reverse none",
          onEnter: () => gsap.to(".half", { backgroundColor: "#4e27ce" }),
          onEnterBack: () => gsap.to(".half", { backgroundColor: "#4e27ce" }),
          // options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#4e27ce",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".circle", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".half",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "reverse none reverse none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#4E27CE",
            }),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#4E27CE",
      });

      gsap.to(".imageboxanim", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".imageboxanim",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart reverse none reverse",
          onEnter: () =>
            gsap.to(".imageboxanim", {
              opacity: 0,
              y: 500,
              duration: 1,
            }),
          onEnterBack: () =>
            gsap.to(".imageboxanim", {
              opacity: 1,
              y: 0,
              duration: 1,
            }),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".filled", {
        strokeDasharray: [150, 1000],
        scrollTrigger: {
          trigger: ".half",

          duration: 1,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart play reverse reset",
          onEnter: () =>
            gsap.to(".filled", {
              // backgroundColor: "green",
              strokeDasharray: [150, 1000],
            }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        // backgroundColor: "green",
        // eslint-disable-next-line no-dupe-keys
      });
    }
  }, []);

  return (
    <div className="pagewrap mobile">
      <div className="half mobilehalf">
        <div className="box2 w-100 justify-content-end hide">
          <div className=" text-white d-flex flex-column">
            <h1 className="w-100">25M+ Downloads</h1>
            <span className="d-flex justify-content-end">
              on app store and google playstore
            </span>
          </div>
        </div>

        <div className="box1  w-100 box1mobile">
          <div className="p-5 text-white mobileText">
            <h1 className="text-uppercase  ">ABC 456</h1>
            {!isMobile ? (
              <div className="d-flex flex-column  ">
                <span>We are the best </span>
                <span>web development company </span>
                <span>in the world</span>
              </div>
            ) : (
              <span className="text-start"> This is a sample text for ABC</span>
            )}
          </div>
        </div>
      </div>
      <div className="imagebox  imageboxanim d-flex justify-content-center mobilebox">
        <img
          style={{ width: "280px", height: "400px", objectFit: "contain" }}
          src={image1}
          className="image1 mobileimg"
          alt=""
        ></img>
        <img
          style={{ width: "280px", height: "400px", objectFit: "contain" }}
          src={image2}
          className="image2 mobileimg"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default One;
