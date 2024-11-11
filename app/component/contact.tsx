import Image from "next/image";
import calender from "@/app/component/calender.svg";

const Contact = () => {
  return (
    <div
      className="mx-auto flex justify-evenly items-center py-5"
    >
      <div className="flex items-center gap-1">
        <img
          className="w-16 h-16"
          alt="Group"
          src="https://c.animaapp.com/GXftPX7k/img/group.svg"
        />
        <div className="ml-4 gray">
          SEND US
          <br />
          YOUR SPECS
        </div>
      </div>

      <div className="flex items-center gap-1 cal-box">
        <Image className="w-16 h-16" alt="Frame" src={calender} />
        <div className="ml-4 gray">
          WE SOURCE
          <br />
          <span>&amp; PRICE</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1">
        <img
          className="w-16 h-16"
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
