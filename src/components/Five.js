import React, { useEffect } from "react";
import "../components/style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/karavan-social-networking-app-screen.png";
import image2 from "../assets/karavan_2.png";
import image3 from "../assets/social-networking-app-case-study.png";
import image4 from "../assets/karavan-social-networking-app-screen-2.png";
import image5 from "../assets/developers-for-social-media-app.png";
function Five({ isMobile }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".pagewrap5", {
        scrollTrigger: {
          trigger: ".pagewrap5",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".pagewrap5", { backgroundColor: "orange" }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "orange",
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".half5", {
        scrollTrigger: {
          trigger: ".half5",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: "restart pause reverse none",
          onEnter: () => gsap.to(".half5", { backgroundColor: "#022b92" }),
          // options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#022b92",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".circle", {
        // strokeDasharray: [1000, 1000],
        // backgroundColor: "#134ca2",
        scrollTrigger: {
          trigger: ".half5",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none restart none",
          onEnter: () =>
            gsap.to(".circle", {
              backgroundColor: "#022b92",
            }),
          onEnterBack: () => {
            gsap.to(".circle", {
              backgroundColor: "#134ca2",
            });
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        backgroundColor: "#022b92",
      });

      gsap.to(".img1", {
        // strokeDasharray: [1000, 1000],
        // backgroundColor: "#134ca2",
        scrollTrigger: {
          trigger: ".img1",

          start: "top 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart none restart none",
          onEnter: () =>
            gsap.fromTo(
              ".img1",
              { y: -60, opacity: 0, duration: 1 },
              { y: 0, opacity: 1, duration: 1 }
            ),
          onEnterBack: () => {
            gsap.fromTo(
              ".img1",
              {
                y: 60,
                opacity: 0,
                duration: 2,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
              }
            );
          },
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      });
    }
  }, []);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".filled", {
        strokeDasharray: [560, 1000],
        scrollTrigger: {
          trigger: ".half5",

          start: "bottom 50%", //when top of herman passes 75% viewport height
          end: "bottom 0%", //when bottom of herman passes 25% viewport height
          scrub: true,
          //events: onEnter onLeave onEnterBack onLeaveBack
          // toggleActions: "restart pause reverse none",
          onEnter: () =>
            gsap.to(".filled", {
              // backgroundColor: "green",
              strokeDasharray: [680, 1000],
            }),
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
        // backgroundColor: "green",
        // eslint-disable-next-line no-dupe-keys
        strokeDasharray: [680, 1000],
      });
    }
  }, []);

  return (
    <div className="pagewrap5 mobile">
      <div className="half5 mobilehalf">
        <div className="box2 marginright hide">
          <div className="p-5 text-white d-flex flex-column">
            <span>Text headline</span>
            <h1>Text Headline</h1>
            <span className="d-flex justify-content-end"> Footer headline</span>
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
      <div className="w-50 d-flex img1 mobilebox">
        <div className="block m-0 p-0 flex-column d-flex justify-content-between ">
          <img
            style={{ width: "200px", height: "300px", objectFit: "contain" }}
            src={image1}
            alt=""
            className="margintop3 hide "
          />
          <img
            style={{ width: "200px", height: "300px", objectFit: "contain" }}
            src={image2}
            alt=""
            className="marginbottom1 hide"
          />
        </div>
        <div className="block m-0 p-0 d-flex flex-column justify-content-between imgcolumn">
          <img
            style={{
              width: "200px",
              height: "300px",
              objectFit: "contain",
              marginTop: "-20px",
            }}
            src={image3}
            alt=""
          />
          <img
            style={{
              width: "200px",
              height: "300px",
              objectFit: "contain",
              marginLeft: "0px",
              marginBottom: "-100px",
            }}
            src={image4}
            alt=""
          />
        </div>
        <div className="block m-0 p-0 d-flex align-items-center">
          <img
            style={{ width: "250px", height: "350px", objectFit: "contain" }}
            src={image5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Five;
