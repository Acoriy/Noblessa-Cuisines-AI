import DesignLeft from "../assets/Icons/iconDesignLeft.svg";
import imageCatalogue from "../assets/Img/imageCatalogue.png";

const DecoverSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between  md:h-[560px] w-full overflow-hidden ">
      <div className="flex flex-row items-center justify-between w-full  md:pb-[50px] pr-[40px]">
        <img
          src={DesignLeft}
          alt="icon"
          className="hidden sm:hidden md:block"
        />
        <div className="flex flex-col items-start justify-center gap-6 md:gap-10 px-6 md:px-12 lg:px-24 py-8 md:py-12 w-full md:w-auto ">
          <h1 className="text-[45px] sm:text-[50px] md:text-[60px] lg:text-6xl font-normal font-bodoni leading-tight md:leading-snug text-Textcolor min-w-[330px] md:w-[534px] mx-auto">
            Découvrez tous nos univers dans notre nouveau catalogue.
          </h1>
          <button className="font-normal text-xs md:text-sm tracking-wide text-white w-[225px] md:w-[245px] h-10 md:h-12 rounded-full bg-Primary hover:bg-HoverColor transition-colors duration-300 ease-in-out">
            TÉLÉCHARGER LE CATALOGUE
          </button>
        </div>
      </div>
      <div className="w-auto h-[390px] md:h-[560px] md:min-w-[720px]">
        <img
          src={imageCatalogue}
          alt="image"
          className="w-full h-full  object-cover object-center"
        />
      </div>
    </div>
  );
};

export default DecoverSection;
