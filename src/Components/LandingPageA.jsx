import HeaderPage from "../Layouts/HeaderPage";
import imaginationHero from "../assets/Img/heroImagination.png";
import DecoverSection from "../Layouts/DecoverSection";
import bgLandingPage from "../assets/Icons/bgLndingPageA.svg";
import SearchWithFilter from "./SearchWithFilter";

const LandingPageA = () => {
  const TitleBtn = "CRÉER";
  return (
    <div className="font-HelveticaNeue">
      <HeaderPage />

      <div
        style={{ backgroundImage: `url(${bgLandingPage})` }}
        className="w-full flex flex-col "
      >
        {/* Sectin image */}
        <div className="w-full h-[450px]">
          <img src={imaginationHero} alt="image" className="w-full h-full" />
        </div>
        <div className="mx-auto bg-white/50 backdrop-blur-md p-6 rounded-lg flex flex-col items-center">
          {/* Section b : */}
          <div className="w-full md:w-[628px] md:h-[165px] space-y-[30px] px-[20px] flex flex-col mx-auto  gap-[10px] md:gap-[20px] md:mb-[120px]">
            <h1 className="font-bodoni text-[32px] md:text-[50px] font-normal text-center">
              Imaginons votre prochaine lieu de vie avec l&apos;IA
            </h1>
            <p className="indent-[10px] text-[14px] md:text-[18px] leading-[150%] font-light">
              En quelques clics, notre assistant virtuel vous propose des
              visualisations adaptées à vos envies pour nourrir votre
              inspiration et démarrer votre projet.
            </p>
          </div>
          {/* section 3 : */}
          <SearchWithFilter TitleBtn={TitleBtn} />
          {/* button Créer */}
          {/* <button className="bg-Primary hover:bg-HoverColor transition-transform duration-300 ease-in-out text-[#fff] text-[12px] tracking-[3%] font-normal rounded-full w-[82px] h-[40px] mt-[30px]  ">CRÉER</button> */}
        </div>
      </div>

      {/* descover seaction : */}
      <DecoverSection />
    </div>
  );
};

export default LandingPageA;
