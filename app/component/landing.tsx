import React from "react";
import Image from "next/image";
import Navbar from "./nav";
import Contact from "./contact";
import "@/app/component/style.css";
import sofa from "@/app/component/sofa.png";

const landing = () => {
  return (
    <div className="h-screen container mx-auto">
      <Navbar />

      <div className="hero-main">
        <div className="black">
          Furnish <br /> Your <span className="pink">Vibe.</span>
        </div>
        <div className="outline">
          Furnish <br />
          Your <span className="outline-none">Vibe.</span>
        </div>
        <Image
          className="sofa float-chair"
          alt="Modern chair on white background"
          src={sofa}
        />
      </div>

      <Contact />
    </div>
  );
};

export default landing;
