"use client";
import Image from "next/image";
import calender from "@/app/assets/calender.svg";

const Contact = () => {
  return (
    <div
      className="mx-auto md:flex justify-center items-center md:py-5 relative z-20"
    >
      <div className="flex items-center justify-center md:w-1/3 py-5 md:py-0">
        <img
          className="md:w-16 md:h-16 w-12 h-12"
          alt="Group"
          src="https://c.animaapp.com/GXftPX7k/img/group.svg"
        />
        <div className="ml-4 gray">
          SEND US
          <br />
          YOUR SPECS
        </div>
      </div>

      <div className="flex items-center justify-center md:w-1/3 py-5 md:py-0 cal-box">
        <Image className="md:w-16 md:h-16 w-12 h-12" alt="Frame" src={calender} />
        <div className="ml-4 gray">
          WE SOURCE
          <br />
          <span>&amp; PRICE</span>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-1/3 py-5 md:py-0">
        <img
          className="md:w-16 md:h-16 w-12 h-12"
          alt="Group"
          src="https://c.animaapp.com/GXftPX7k/img/group-1000003144.svg"
        />
        <div className="ml-4 gray">
          WE DELIVER
          <br />
          &amp; INSTALL
        </div>
      </div>
    </div>
  );
};

export default Contact;
