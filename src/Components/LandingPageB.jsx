import HeaderPage from "../Layouts/HeaderPage";
import DecoverSection from "../Layouts/DecoverSection";
import imaginationHero from "../assets/Img/heroImagination.png";
// import { IoIosArrowDown } from "react-icons/io";
import SearchWithFilter from "./SearchWithFilter";

const LandingPageB = () => {
  const TitleBtn = "CRÉER";
  return (
    <div>
      <HeaderPage />

      {/* section 1 : imaginons*/}
      <div
        style={{ backgroundImage: `url(${imaginationHero})` }}
        className="w-full h-[450px] bg-cover bg-center flex flex-col items-center justify-end"
      >
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[90%] sm:max-w-[841px] h-[182px] min-h-[243px] text-white bg-[rgba(255,255,255,0.2)] backdrop-blur-sm p-6 rounded-xl">
          <h1 className="text-[32px] sm:text-[50px] font-normal font-bodoni leading-[110%] text-center">
            Imaginons Votre prochain lieu de vie avec l&apos;IA
          </h1>
          <p className="text-center leading-[150%] text-[14px] sm:text-[18px] font-normal px-2 sm:px-4">
            En quelques clics, créez des images pour nourrir votre inspiration
            selon vos envies et imaginez votre projet.
          </p>
          {/* <button className="bg-Primary text-white w-[120px] sm:w-[140px] h-[40px] hover:bg-HoverColor transition-transform duration-300 ease-in-out text-[12px] font-normal rounded-full mx-auto">
              DÉCOUVRIR
            </button> */}
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col gap-[10px] mx-auto "></div>
      {/* searche aevc filtre */}
      <SearchWithFilter TitleBtn={TitleBtn} />

      <DecoverSection />
    </div>
  );
};

export default LandingPageB;
