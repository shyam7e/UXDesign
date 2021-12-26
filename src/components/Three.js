import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/nasa-fitness-tracking-mobile-app.png";
import image2 from "../assets/measure-total-body-weight-through-fitness-app.png";
import textimg from "../assets/nasa-mobile-app.png";
function Three({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".pagewrap3", {
        scrollTrigger: {
          trigger: ".pagewrap3",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".pagewrap3", { backgroundColor: "#0e131c" }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#0e131c",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".half3", {
        scrollTrigger: {
          trigger: ".half3",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".half3", { backgroundColor: "#17263c" }),
          // options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#17263c",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".imageboxanim4", {
        // strokeDasharray: [1000, 1000],\
        scrollTrigger: {
          trigger: ".imageboxanim4",

          start: "top 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart none none reverse",
          onEnter: () =>
            gsap.fromTo(
              ".imageboxanim4",
              {
                opacity: 0,
                y: 200,
              },
              { opacity: 1, y: 0, duration: 1 }
            ),
          onEnterBack: () =>
            gsap.fromTo(
              ".imageboxanim4",
              {
                opacity: 0,
                y: 50,
              },
              { opacity: 1, y: 0, duration: 1 }
            ),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });

      gsap.to(".imageboxanim5", {
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".circle",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart none none reverse",
          onEnter: () =>
            gsap.fromTo(
              ".imageboxanim5",
              {
                opacity: 0,
                y: -200,
                duration: 1,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
              }
            ),
          onEnterBack: () =>
            gsap.to(".imageboxanim5", {
              opacity: 1,
              y: 0,
              duration: 1,
            }),

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });

      gsap.to(".circle", {
        // backgroundColor: "#0f1139",
        // strokeDasharray: [1000, 1000],
        scrollTrigger: {
          trigger: ".half3",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none reverse none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#17263c",
            }),
          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#0f1139",
            });
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#17263c",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".filled", {
        strokeDasharray: [280, 1000],
        scrollTrigger: {
          trigger: ".half3",
          //
          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () =>
            gsap.to(".filled", {
              backgroundColor: "green",
              strokeDasharray: [420, 1000],
            }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        // eslint-disable-next-line no-dupe-keys
        backgroundColor: "green",
        // eslint-disable-next-line no-dupe-keys
        strokeDasharray: [420, 1000],
      });
    }
  }, []);

  return (
    <div className="pagewrap3 mobile">
      <div className="half3 mobilehalf">
        <div className="box2 w-100 hide">
          <div className="p-5 text-white justify-content-end">
            <div className="d-flex flex-column marginright">
              <span>Powered by advance </span>
              <img src={textimg} alt=""></img>
              <span className="d-flex justify-content-end">algorithms</span>
            </div>
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
      <div className="imagebox  d-flex justify-content-center mobilebox">
        <img
          style={{ width: "280px", height: "400px", objectFit: "contain" }}
          src={image1}
          alt=""
          className="margintop imageboxanim4"
        />
        <img
          style={{ width: "280px", height: "400px", objectFit: "contain" }}
          src={image2}
          alt=""
          className="margintop2 imageboxanim5"
        />
      </div>
    </div>
  );
}

export default Three;
