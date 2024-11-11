import React from "react";
import Image from "next/image";
import Navbar from "./nav";
import Contact from "./contact";
import ImageFirst from "@/app/component/ImageFirst.png";
import "@/app/component/style.css";
import Vector from "@/app/component/Vector.svg";
import sofa from "@/app/component/sofa.png";


const landing = () => {
  return (
    <div className="h-screen container mx-auto">
      <Navbar />

      <div class="hero-main flex items-center justify-center">
        <div class="black">Furnish <br/> Your <span className="pink">Vibe.</span></div>
        <div class="outline">Furnish <br/>Your <span className="outline-none">Vibe.</span></div>
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
