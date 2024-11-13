"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./nav";
import Contact from "./contact";
import sofa from "@/app/assets/sofa.png";
import "@/app/component/style.css";

const landing = () => {
  return (
    <div className="h-screen container mx-auto">
      <Navbar />

      <div className="hero-main flex items-center justify-center">
        <h1 className="black">Furnish <br/> Your <span className="pink">Vibe.</span></h1>
        <div className="outline">Furnish <br/>Your <span className="outline-none">Vibe.</span></div>
        <div className="sofa">
          <Image
            className="float-chair"
            alt="Modern chair on white background"
            src={sofa}
          />  
        </div> 
      </div>

      <Contact />
    </div>
  );
};

export default landing;
