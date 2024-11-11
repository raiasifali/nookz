import Image from "next/image";
import Link from 'next/link'
import logo from "./LogoSvg.svg";

const navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-5 w-full relative z-20">
      <div>
        <Image
          alt="Nookz"
          src={logo}
          width={42}
          height={130}
          style={{
            width: "120px",
            height: "42px"
          }}
        />
      </div>
      <div>
        <Link href="mailto:vibe@nookz.co.uk" className="pink text-xl">
          vibe@nookz.co.uk
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
