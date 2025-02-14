import { Link } from "react-router-dom";
import Concepteure from "../Layouts/Concepteure";
import DecoverSection from "../Layouts/DecoverSection";
import HeaderPage from "../Layouts/HeaderPage";
import HeroTelechargez from "../assets/Img/HeroTelecharger.png";

const LandinPageTélechargez = () => {
  return (
    <div className="flex flex-col ">
      <HeaderPage />
      {/* contenu de a page : */}
      <div className="flex flex-col gap-[15px]">
        {/* section image  */}
        <div
          style={{ backgroundImage: `url(${HeroTelechargez})` }}
          className="w-full h-[450px] bg-cover bg-center flex flex-col items-center justify-end"
        >
          <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[90%] sm:max-w-[841px] h-[182px] min-h-[193px] text-white bg-[rgba(255,255,255,0.2)] backdrop-blur-sm p-6 rounded-xl">
            <h1 className="text-[32px] sm:text-[50px] font-normal font-bodoni leading-[110%] text-center">
              Téléchargez <br /> votre visuel d’inspiration
            </h1>
          </div>
        </div>

        {/* Section Form : */}
        <form className="flex flex-col gap-[20px] p-5 justify-center  mx-auto">
          {/* inputs */}
          <div className="w-[324px] h-[41px] md:w-[450] flex flex-col">
            <input
              type="text"
              placeholder="Nom*"
              className=" w-full h-full outline-none text-[18px] md:text-[26px] leading-[26px] md:leading-[35px] font-light text-Textcolor border border-t-0 border-l-0 border-r-0 border-b-2 border-Textcolor"
            />
          </div>
          <div className="w-[324px] h-[41px] md:w-[450] flex flex-col">
            <input
              type="text"
              placeholder="Prénome*"
              className=" w-full h-full outline-none text-[18px] md:text-[26px] leading-[26px] md:leading-[35px] font-light text-Textcolor border border-t-0 border-l-0 border-r-0 border-b-2 border-Textcolor"
            />
          </div>
          <div className="w-[324px] h-[41px] md:w-[450] flex flex-col">
            <input
              type="email"
              placeholder="Mail*"
              className=" w-full h-full outline-none text-[18px] md:text-[26px] leading-[26px] md:leading-[35px] font-light text-Textcolor border border-t-0 border-l-0 border-r-0 border-b-2 border-Textcolor"
            />
          </div>
          <div className="w-[324px] h-[41px] md:w-[450] flex flex-col">
            <input
              type="number"
              placeholder="Téléphone*"
              className=" w-full h-full outline-none text-[18px] md:text-[26px] leading-[26px] md:leading-[35px] font-light text-Textcolor border border-t-0 border-l-0 border-r-0 border-b-2 border-Textcolor"
            />
          </div>
          <div className="w-[324px] h-[41px] md:w-[450] flex flex-col">
            <input
              type="text"
              placeholder="Code postal*"
              className=" w-full h-full outline-none text-[18px] md:text-[26px] leading-[26px] md:leading-[35px] font-light text-Textcolor border border-t-0 border-l-0 border-r-0 border-b-2 border-Textcolor"
            />
          </div>
          {/* parte 2 */}
          <div className="flex flex-col gap-[12px] md:gap-[14px]">
            <span className="font-light text-[10px] leading-[10px] md:text-[12px] md:leading-[20px] ">
              * champs obligatoires
            </span>
            <div className="flex flex-row gap-[15px] md:gap-[12px]">
              <input type="checkbox" className="w-[14px] h-[14px]" />
              <p className="font-light text-[10px] w-[313px] md:w-[420px] md:text-[12px] leading-[16px] md:leading-[20px] text-Textcolor">
                En utilisant ce formulaire, vous consentez au stockage et au
                traitement de vos données par noblessa afin de répondre à votre
                demande de candidature. Pour plus d’information, consulter
                notrepolitique de confidentialité.*
              </p>
            </div>
            <Link to="/">
              <button className="mx-auto w-[130px] h-[40px] text-[12px]   text-[#fff] rounded-full bg-Primary hover:bg-HoverColor  transition-transform duration-300 ease-in-out">
                TÉLÉCHARGER
              </button>
            </Link>
          </div>
        </form>

        <Concepteure />
        <DecoverSection />
      </div>
    </div>
  );
};

export default LandinPageTélechargez;
