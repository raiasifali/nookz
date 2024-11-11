import React from "react";
import Image from "next/image";
import Navbar from "./nav";
import ImageFirst from "@/app/component/ImageFirst.png";
import "@/app/component/style.css";
import calender from "@/app/component/calender.svg";
import Vector from "@/app/component/Vector.svg";

const landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="home-page grid grid-cols-1">
        <div className="div relative flex items-center justify-center flex-col">
          {/* Centered Images */}

          <div
            className="image-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // to center the images horizontally
              gap: "1rem", // adjust the gap between the images as needed
            }}
          >
            <img
              className="atlas-u float-chair z-10"
              alt="Atlas"
              src="https://c.animaapp.com/GXftPX7k/img/atlas-u020007-01-1-1.png"
              style={{
                height: "45rem",
                marginTop: "-102px",
              }}
            />
            <div className="absolute">
              <div className="text-[197.2px] height-[92px] text-shadow-lg text-shadow">
                <p className="furnish-tex">FURNISH</p>
                <p className="-mt-[155px] -ml-[108px]">YOUR</p>
                <p
                  className="absolute text-shadow furnish-tex text-shadow-lg text-shadow z-10  ml-[441px] -mt-[295px]"
                  style={{ color: "rgba(242, 17, 112, 1)" }}
                >
                  VIBE.
                </p>
                {/* <img
                  className="absolute text-shadow furnish-tex text-shadow-lg text-shadow z-10 ml-[441px] -mt-[200px]"
                  alt="vibe"
                  src="https://c.animaapp.com/GXftPX7k/img/furnish-your-vibe-.svg"
                /> */}
              </div>
            </div>
            <img
              className="img z-10 absolute items-center"
              alt="Furnish your"
              src="https://c.animaapp.com/GXftPX7k/img/group-1000003157.svg"
              style={{
                marginTop: "5.7rem",
                marginBottom: "1rem",
                marginLeft: "-7rem",
              }}
            />
          </div>

          <div className="relative w-full flex flex-col items-center">
            <img
              className="lovepik-com"
              alt="Lovepik com"
              src="https://c.animaapp.com/GXftPX7k/img/lovepik-com-401079559-water-ripple-1.png"
              style={{
                width: "38rem",
                marginTop: "-239px",
              }}
            />
            <Image
              className="Chair float-chair-opposite"
              alt="Modern chair on white background"
              src={ImageFirst}
              style={{
                width: "44rem",
                marginTop: "-256px",
              }}
            />
            <div
              className="absolute z-10 container mx-auto flex justify-between items-center px-6"
              style={{
                fontFamily: "Urbanist",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                fontWeight: "800",
                gap: "0px",
                opacity: "1",
                marginTop: "-90px",
                color: "rgba(0, 0, 0, 0.56)",
              }}
            >
              {/* First Section: SEND US YOUR SPECS */}
              <div className="flex items-center gap-1">
                <img
                  className="w-12 h-12"
                  alt="Group"
                  src="https://c.animaapp.com/GXftPX7k/img/group.svg"
                />
                <div className="ml-4">
                  SEND US
                  <br />
                  YOUR SPECS
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Image className="w-12 h-12" src={Vector} alt="Vector" />
              </div>

              {/* Second Section: WE SOURCE & PRICE */}
              <div className="flex items-center gap-1">
                <Image className="w-12 h-12" alt="Frame" src={calender} />
                <div className="text-xl mr-4">
                  WE SOURCE
                  <br />
                  <span>&amp; PRICE</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Image className="w-12 h-12" src={Vector} alt="Vector" />
              </div>

              {/* Third Section: WE DELIVER & INSTALL */}
              <div className="flex items-center justify-center gap-1">
                <img
                  className="w-12 h-12"
                  alt="Group"
                  src="https://c.animaapp.com/GXftPX7k/img/group-1000003144.svg"
                />
                <div className="text-xl mr-4">
                  WE DELIVER
                  <br />
                  &amp; INSTALL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
