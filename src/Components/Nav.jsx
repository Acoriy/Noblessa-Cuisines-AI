import MenuIcon from "../assets/Icons/Menu-Icon.svg";
import Catalogue from "../assets/Icons/Catalogue-v2.svg";
import Magasins from "../assets/Icons/Magasins-v2.svg";
import LogoApp from "../assets/Icons/noblessa_logo.svg";
import { GrFavorite } from "react-icons/gr";


import { useState } from "react";
import { Link } from "react-router-dom";
// import { GrFavorite } from "react-icons/gr";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-row justify-between items-center text-white bg-transparent h-[80px] md:h-[90px] w-full px-[30px] absolute top-0 right-0">
        <div 
          className="flex flex-row items-center gap-5 w-[390px] md:w-[600px] h-[25.68px] md:h-[63px] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <img src={MenuIcon} alt="MenuIcon" className="w-[37px] h-[25.68px]" />
          <p className="text-[16px] leading-[19.34px] tracking-[3%] hidden md:block hover:underline transition-transform duration-500 ease-in-out">
            Menu
          </p>
        </div>

        <div className="flex items-center justify-center mr-[30px] cursor-pointer">
          <img src={LogoApp} alt="logo" className="w-[99.22px] h-[80px]  md:w-[127px] md:h-[64px]" />
        </div>

        <div className="flex flex-row items-center gap-[26px]">
          <div className="flex flex-row items-center gap-5 cursor-pointer">
            <img src={Magasins} alt="magasinIcon" className="w-[24px] h-[24px] hidden md:block" />
            <p className="text-[16px] leading-[19.34px] tracking-[3%] hidden md:block hover:underline transition-transform duration-500 ease-in-out">
              Magasins
            </p>
          </div>

          <div className="flex flex-row items-center gap-5 cursor-pointer">
            <img src={Catalogue} alt="magasinIcon" className="w-[24px] h-[24px] hidden md:block" />
            <p className="text-[16px] leading-[19.34px] tracking-[3%] hidden md:block hover:underline transition-transform duration-500 ease-in-out">
              Catalogue
            </p>
          </div>

          <GrFavorite className="w-[24px] md:h-[24px] hover:text-Primary cursor-pointer hidden md:block" />

          <Link to="/téléchargez">
              <button className="w-[129px] md:w-[191px] md:h-[40px] text-white text-[12px] tracking-[3%] px-[20px] bg-[#A48145] rounded-full hover:bg-HoverColor flex-wrap">
                PRENDRE RENDEZ-VOUS
              </button>
          </Link>
          
        </div>
      </div>

      {/* Overlay (background foncé) */}
      {menuOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Slide-out menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[250px] md:w-[300px] bg-gray-900 text-white transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-5">
          <button 
            className="text-white text-xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-5">
          <Link to="/" className="hover:text-gray-400 cursor-pointer">Home Page</Link>
          <Link to="/landingPageA" className="hover:text-gray-400 cursor-pointer">Landing page 1/A </Link>
          <Link to="/landingPageB" className="hover:text-gray-400 cursor-pointer">Landing Page 1/B</Link>
          <Link to="/landingPageImages" className="hover:text-gray-400 cursor-pointer">Landing Page Images</Link>
          <Link to="/chargin" className="hover:text-gray-400 cursor-pointer">Chargin Page</Link>
          <Link to="/suggestions" className="hover:text-gray-400 cursor-pointer">Landing Page Suggestions</Link>
          <Link to="/téléchargez" className="hover:text-gray-400 cursor-pointer">Landing Page Téléchargez </Link>
          

          {/* <Link to="/">
            <button className="w-full bg-[#A48145] text-white py-2 rounded-full hover:bg-HoverColor">
              PRENDRE RENDEZ-VOUS
            </button>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

