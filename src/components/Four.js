import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/ux-strategy-for-mobile-app-devlopment.png";
import image2 from "../assets/domi-img1.png";
import image3 from "../assets/pizza_box.png";
import image4 from "../assets/dominos-bread.png";

function Four({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".pagewrap4", {
        scrollTrigger: {
          trigger: ".pagewrap4",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".pagewrap4", { backgroundColor: "#2ecdde" }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#2ecdde",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".half4", {
        scrollTrigger: {
          trigger: ".half4",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".half4", { backgroundColor: "#134ca2" }),
          // options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#134ca2",
      });

      gsap.to(".img24241", {
        // strokeDasharray: [1000, 1000],
        // backgroundColor: "#17263c",
        scrollTrigger: {
          trigger: ".img24241",

          start: "center 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none reverse none",
          onEnter: () =>
            gsap.fromTo(
              ".img24241",
              {
                y: -100,
                opacity: 0,
                duration: 2,
              },
              {
                y: 0,
                opacity: 1,
                duration: 2,
              }
            ),
          onEnterBack: () => {
            gsap.fromTo(
              ".img24241",
              {
                y: 600,
                opacity: 0,
                duration: 2,
              },
              { y: 0, opacity: 1, duration: 2 }
            );
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".circle", {
        // strokeDasharray: [1000, 1000],
        // backgroundColor: "#17263c",
        scrollTrigger: {
          trigger: ".half4",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none reverse none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#134ca2",
            }),
          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#17263c",
            });
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#134ca2",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".filled", {
        strokeDasharray: [420, 1000],
        scrollTrigger: {
          trigger: ".half4",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart pause reverse none",
          onEnter: () =>
            gsap.to(".filled", {
              // backgroundColor: "green",
              strokeDasharray: [560, 1000],
            }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },

        // backgroundColor: "green",
        // eslint-disable-next-line no-dupe-keys
        strokeDasharray: [560, 1000],
      });
    }
  }, []);

  return (
    <div className="pagewrap4 mobile">
      <div className="half4 mobilehalf">
        <div className="box2 w-100 justify-content-end hide">
          <div className=" text-white d-flex flex-column">
            <span className="w-100">Redefining</span>
            <h2 className="d-flex justify-content-end">UX Strategy</h2>
            <span className="w-100">and UI design</span>
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
      <div className="imagebox1  d-flex  img24241 mobilebox ">
        <div className=" d-flex flex-column justify-content-between imgcolumn ">
          <img
            style={{ width: "280px", height: "100px" }}
            src={image3}
            alt=""
          ></img>
          <img
            style={{ width: "325px", height: "340px", objectFit: "contain" }}
            src={image2}
            alt=""
          ></img>
        </div>
        <div className=" d-flex flex-column justify-content-start ">
          <img
            style={{ width: "270px", height: "240px", objectFit: "contain" }}
            src={image4}
            alt=""
            className=" potato"
          ></img>
          <img
            style={{ width: "325px", height: "340px", objectFit: "contain" }}
            src={image1}
            alt=""
            className="phone"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Four;
