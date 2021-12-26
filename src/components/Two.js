import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import image1 from "../assets/veme-blockchain-app-developed.png";
import image2 from "../assets/veme-app-ui-design.png";
import ScrollTrigger from "gsap/ScrollTrigger";
function Two({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".imageboxanim2", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".imageboxanim2",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse resume",
          onEnter: () =>
            gsap.to(".imageboxanim2", {
              opacity: 1,
              y: 200,
              duration: 1,
            }),
          onEnterBack: () =>
            gsap.to(".imageboxanim2", {
              opacity: 1,
              y: 0,
              duration: 1,
            }),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
      gsap.to(".imageboxanim3", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".imageboxanim2",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse resume",
          onEnter: () =>
            gsap.from(".imageboxanim3", {
              opacity: 1,
              y: 200,
              duration: 1,
            }),
          onEnterBack: () =>
            gsap.to(".imageboxanim3", {
              opacity: 1,
              y: 0,
              duration: 1,
            }),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });

      gsap.fromTo(
        ".image11",

        {
          opacity: 0,
          y: -500,
          duration: 2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
        }
      );
      gsap.fromTo(
        ".image22",

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
      gsap.to(".pagewrap2", {
        scrollTrigger: {
          trigger: ".pagewrap2",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "reverse pause reverse none",
          onEnter: () => gsap.to(".pagewrap2", { backgroundColor: "#151649" }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#151649",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".half2", {
        scrollTrigger: {
          trigger: ".half2",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "reverse pause reverse none",
          onEnter: () => gsap.to(".half2", { backgroundColor: "#0f113b " }),
          // options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#0f113b ",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".circle", {
        // backgroundColor: "#4E27CE",
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".half2",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none reverse none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#0f1139",
            }),
          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#4E27CE",
            });
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#0f1139",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".filled", {
        strokeDasharray: ["+=150", "1000"],
        scrollTrigger: {
          trigger: ".half2",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart pause reverse none",
          onEnter: () =>
            gsap.to(".filled", {
              // backgroundColor: "green",
              strokeDasharray: [280, 1000],
            }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        // backgroundColor: "green",
        // eslint-disable-next-line no-dupe-keys
        strokeDasharray: [280, 1000],
      });
    }
  }, []);

  return (
    <div className="pagewrap2 mobile">
      <div className="half2 mobilehalf">
        <div className="box2 hide">
          <div className="p-5 text-white d-flex flex-column marginright">
            <span>The Next Big</span>
            <h2>Blockchain</h2>
            <span className="d-flex justify-content-end"> Revolution</span>
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
      <div className="imagebox  d-flex justify-content-center mobilebox ">
        <img
          style={{ width: "280px", height: "400px", objectFit: "contain" }}
          src={image1}
          alt=""
          className="image11 imageboxanim2 mobileimg"
        />
        <img
          style={{ width: "280px", height: "400px", objectFit: "contain" }}
          src={image2}
          alt=""
          className="image22 imageboxanim3 mobileimg"
        />
      </div>
    </div>
  );
}

export default Two;
