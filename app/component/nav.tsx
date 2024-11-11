import Image from "next/image";
import logo from "./LogoSvg.svg";

const navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 w-full">
      <div className="flex-shrink-0">
        <Image
          alt="Nookz"
          className="group-7"
          src={logo}
          width={42} // Adjust size as necessary
          height={130}
          style={{
            width: "119px",
            height: "42px",
            top: "24px",
            left: "33px",
            gap: "0px",
            opacity: "0px",
          }} // Adjust size as necessary
        />
      </div>
      <div
        className="text-xl text-gray-600"
        style={{
          color: "rgba(242, 17, 112, 1)",
          fontFamily: "Urbanist",
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "24px",
          textAlign: "right",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          width: "158px",
          height: "24px",
          top: "33px",
          left: "1248px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        vibe@nookz.co.uk
      </div>
    </nav>
  );
};

export default navbar;
