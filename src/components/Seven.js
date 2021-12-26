import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/mobile-app-of-the-year-by-entrepreneur.png";

function Seven({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".pagewrap7", {
        scrollTrigger: {
          trigger: ".pagewrap7",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".pagewrap7", { backgroundColor: "#01824d" }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#01824d",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".half7", {
        scrollTrigger: {
          trigger: ".half7",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".half7", { backgroundColor: "#01b76a" }),
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
          trigger: ".half7",
          // markers: true,
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none reverse none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#01b76a",
            }),
          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#01b76a",
            });
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#01b76a",
      });

      gsap.to(".imgggg2", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".imgggg2",
          // markers: true,
          start: "top 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none reverse none",
          onEnter: () =>
            gsap.fromTo(
              ".imgggg2",
              {
                y: 600,
                opacity: 0,
                duration: 2,
              },
              { y: 0, opacity: 1, duration: 1 }
            ),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".circle", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".half7",
          // markers: true,
          start: "bottom 0%", //when top of herman passes 75% viewport height
          end: "bottom 50%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart none restart none",

          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#01b76a",
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
          trigger: ".half7",
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
    <div className="pagewrap7 mobile">
      <div className="half7 mobilehalf">
        <div className="box2 marginright hide">
          <div className="p-5 text-white d-flex flex-column">
            <span>Biggest Classifieds</span>
            <h1>East Asia</h1>
            <span className="d-flex justify-content-end"> Countries</span>
          </div>
        </div>
        <div className="box1 box1mobile">
          <div className="p-5 text-white mobileText">
            <img src={image1} alt="" />
            <h1 className="text-uppercase mx-1">ABC 23478</h1>
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
      <div className="w-50 d-flex justify-content-end  align-items-end imgggg2 mobilebox">
        <div
          className="fimage1 mobileimg"
          style={{
            width: "280px",
            height: "400px",
            marginRight: "-65px",
            marginBottom: "-60px",
          }}
        ></div>
        <div
          className="fimage2 mobileimg"
          style={{ width: "320px", height: "400px", marginBottom: "-20px" }}
        ></div>
      </div>
    </div>
  );
}

export default Seven;
