import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "./Nav";
import Hero from "../assets/Img/HeroImage.png";
import nextArrow from "../assets/Icons/arrow-next.svg";
import lastArrow from "../assets/Icons/arrow-laste.svg";
import DevoverSection from "../Layouts/DecoverSection";

// Import des images du slider
import SldImg1 from "../assets/Img/caro-cuisin.png";
import SldImg2 from "../assets/Img/caro-Dressing.png";
import SldImg3 from "../assets/Img/caro-Salles.png";
import SldImg4 from "../assets/Img/caro-salon.png";
import SldImg5 from "../assets/Img/caro-beraux.png";

// images section 3 :

import Geron from "../assets/Img/Geron.png";
import Cuisin from "../assets/Img/CuisinS3.png";
import SercleDesign from "../assets/Icons/sercles-design.svg";

const Data = [
  { src: SldImg1, des: "Cuisines" },
  { src: SldImg2, des: "Dressings" },
  { src: SldImg3, des: "Salles de bain" },
  { src: SldImg4, des: "Salon | Salles à manger" },
  { src: SldImg5, des: "La cuisine de Julia & Matthieu" },
];

// Data : Nos projets du moment
import { GrFavorite } from "react-icons/gr";
import project1 from "../assets/Img/imgProjects1.png";
import project2 from "../assets/Img/imgProjects2.png";
import project3 from "../assets/Img/imgProjects3.png";
import project4 from "../assets/Img/imgProjects4.png";

const DataProjets = [
  {
    img: project1,
    title: "La cuisine de Thomas",
    icon: <GrFavorite size={30} />,
    modele: "Modèles Sentido | Scala ",
  },
  {
    img: project2,
    title: "La cuisine de Santiago",
    icon: <GrFavorite size={30} />,
    modele: "Modèles Sentido | Scala ",
  },
  {
    img: project3,
    title: "La cuisine de Julia & Matthieu",
    icon: <GrFavorite size={30} />,
    modele: "Modèles Sentido | Scala ",
  },
  {
    img: project4,
    title: "La cuisine de Julia & Matthieu",
    icon: <GrFavorite size={30} />,
    modele: "Modèles Sentido | Scala ",
  },
];

// Imagination Section Assets :
import imaginationHero from "../assets/Img/heroImagination.png";
import iconDesignImagin from "../assets/Icons/iconDesignImagin.svg";

// data : (Accompagement , Garantie , Surclassement)
import stilo from "../assets/Icons/stilo.svg";
import icon25 from "../assets/Icons/25.svg";
import dyamond from "../assets/Icons/dyamond.svg";

const DataAcomp = [
  {
    icon: stilo,
    title: "Accompagnement\nsur-mesure",
    des: "Grâce à l’écoute, à l’expérience et au service de nos concepteurs, vous bénéficiez d’un accompagnement pas à pas et hautement personnalisé.",
  },
  {
    icon: icon25,
    title: "Garantie\n25 ans",
    des: "Nos meubles sont garantis 10 ans et nos pièces 25 ans pour vous fournir un service premium même après la pose de votre projet.",
  },
  {
    icon: dyamond,
    title: "Surclassement\noffert",
    des: "Nos tiroirs sont spécialement concus pour apporter une finition haut de gamme avec des côtés en verre et des tapis anti-dérapants.",
  },
];

// rencontrer votre concepteur assets :
import Concepteure from "../Layouts/Concepteure";

const Home = () => {
  const Slide = useRef(null);

  const settings = {
    dots: false, // Supprime les dots pour un affichage plus propre
    infinite: true,
    speed: 500,
    slidesToShow: 4.5, // Affiche 2 slides complets + un demi-slide
    slidesToScroll: 2,
    centerMode: true, // Centre le slide actif
    arrows: false, // Désactiver les flèches Slick, on utilise les nôtres
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2, // Ajustement pour écran moyen
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5, // Afficher un slide entier + moitié de l'autre
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2, // Garder un peu de visibilité sur les autres slides
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  // Setting du slide de no projet
  const settingsNoProjet = {
    dots: false, // Supprime les dots pour un affichage plus propre
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Affiche 2 slides complets + un demi-slide
    slidesToScroll: 2,
    centerMode: true, // Centre le slide actif
    arrows: false, // Désactiver les flèches Slick, on utilise les nôtres
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Ajustement pour écran moyen
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Afficher un slide entier + moitié de l'autre
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Garder un peu de visibilité sur les autres slides
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="font-HelveticaNeue flex flex-col gap-[10px]">
      {/* Section Hero */}
      <div
        style={{ backgroundImage: `url(${Hero})` }}
        className="w-full h-full object-cover min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      >
        <Nav />

        <div className="font-bodoni min-h-screen flex flex-col items-center justify-center text-center text-white font-medium mx-auto gap-[24px] ">
          <h1 className="text-[45px] md:text-[60px] leading-[102.6%] font-normal w-[365px] md:w-[862px]">
            Prenons le temps d&apos;imaginer votre prochain lieu de vie
          </h1>
          <p className="text-[26px] md:text-[30px] font-light w-[334px] md:w-[752px]">
            Aménagements d&apos;intérieurs pour toute la maison.
          </p>
        </div>
      </div>

      {/* Section Slider ----------------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center px-[30px] md:h-[667px]">
        <div className="w-full max-w-[1279px] h-auto flex flex-col md:flex-row items-center justify-between">
          {/* Titre */}
          <h1 className="text-[40px] md:text-[50px] font-light text-[#0D0802] text-left w-full">
            Nos aménagements d&apos;intérieur
          </h1>

          {/* Section Boutons */}
          <div className="flex flex-row items-center justify-between md:justify-normal gap-[20px] w-full md:w-[269px] h-[60px] mx-auto">
            {/* Lien Voir Tout */}
            <p className="underline text-[16px] font-light cursor-pointer text-left inline-block whitespace-nowrap">
              voir tout
              <span className="md:hidden"> les cuisines</span>
            </p>

            {/* Flèches de Navigation */}
            <div className="flex flex-row items-center gap-[20px]">
              <img
                src={lastArrow}
                alt="lastArrow"
                className="w-[29px] h-[35px] cursor-pointer"
                onClick={() => Slide.current?.slickPrev()}
              />

              <img
                src={nextArrow}
                alt="nextArrow"
                className="w-[29px] h-[35px] cursor-pointer"
                onClick={() => Slide.current?.slickNext()}
              />
            </div>
          </div>
        </div>

        {/* slider  */}
        <div className="max-w-full mt[10px] pl-[30px]  overflow-hidden">
          <Slider ref={Slide} {...settings}>
            {Data.map((e, index) => (
              <div key={index} className="px-2">
                {" "}
                {/* Espacement entre slides */}
                <div className="h-[600px] bg-white  cursor-pointer overflow-hidden">
                  <img
                    src={e.src}
                    alt="Img"
                    className="h-[470px] w-full object-cover "
                  />
                  <div className="flex flex-col justify-center items-center py-4">
                    <h1 className="font-light text-[26px]">{e.des}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* section : Des espaces concus avec soin ------------------------------- */}

      <div className=" min-h-[800px] md:min-h-[630px] flex flex-col md:flex-row md:justify-between  px-4 md:px-0 py-5 md:py-0">
        {/* Section gauche */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center text-center md:text-left font-HelveticaNeue relative pb-10 md:pb-0">
          {/* Icône design (cercle) */}
          <div className="absolute left-0 -top-12 hidden md:block w-[180px]">
            <img src={SercleDesign} alt="sercles" className="w-full h-auto" />
          </div>

          <div className="w-full md:w-[415px] px-4 md:px-0 md:ml-20 pb-[40px]">
            <h1 className="text-[40px] sm:text-[45px] md:text-[60px] lg:text-6xl font-light leading-tight text-Textcolor">
              Des espaces <br /> conçus avec soin
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-[145%] mt-2 md:mt-4 text-start"
              style={{ wordSpacing: "1rem" }}
            >
              Savoir-faire impeccable, finitions nobles, fonctionnalités
              optimales... Noblessa vous propose des cuisines, des salles de
              bains, des bibliothèques et des dressings durables, faits de
              lignes modernes et bâtis avec les meilleurs matériaux.
            </p>
            <button className="text-xs sm:text-sm md:text-base tracking-wide font-normal w-40 sm:w-48 md:w-56 h-10 md:h-12 bg-Primary hover:bg-HoverColor transition-colors duration-300 ease-in-out text-white rounded-full mx-auto md:mx-0 mt-4 md:mt-6">
              Découvrir notre savoir-faire
            </button>
          </div>
        </div>

        {/* Section droite */}
        <div className="w-full md:w-[50%] flex flex-row gap-2 sm:gap-4 md:gap-6 justify-center md:justify-start px-2 sm:px-4 md:px-6">
          <div className="w-[45%] sm:w-[170px] md:w-[305px] h-[352px] md:h-[631px] relative">
            <img
              src={Geron}
              alt="imgGeron"
              className="w-full h-[273px] md:h-[500px] object-cover absolute bottom-0 left-0"
            />
          </div>
          <div className="w-[45%] sm:w-[170px] md:w-[305px] h-[352px] md:h-[631px] relative">
            <img
              src={Cuisin}
              alt="imgCuisin"
              className="w-full h-[273px] md:h-[500px] object-cover absolute top-0 left-0"
            />
          </div>
        </div>
      </div>

      {/* Nos Projets du moment ---------------------------- */}

      <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-18 py-[40px] md:h-[754px]">
        <h1 className="text-center text-[40px] md:text-[50px] lg:text-[50px] leading-[100%] font-light">
          Nos projets du moment
        </h1>

        {/* Conteneur des projets */}
        <div className="flex flex-wrap justify-center gap-5">
          <div className="w-full px-4 md:px-10 py-10">
            <Slider {...settingsNoProjet}>
              {DataProjets.map((e, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full sm:w-[280px] md:w-[305px] h-auto md:h-[600px] text-[#000] gap-4 px-2"
                >
                  {/* Image Responsive */}
                  <img
                    src={e.img}
                    alt="img"
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  {/* Titre & Icône */}
                  <div className="flex flex-row items-center justify-between font-light">
                    <h2 className="text-[20px] md:text-[26px]">{e.title}</h2>
                    <span className="text-lg md:text-xl cursor-pointer">
                      {e.icon}
                    </span>
                  </div>

                  {/* Modèle */}
                  <h3 className="font-bodoni font-normal text-[18px] md:text-[22px]">
                    {e.modele}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* imagination votre prochaine lieux : ------------------- */}

      <div className="w-full flex flex-col justify-center px-4 pb-[20px] relative">
        {/* Icône Design (affichée uniquement sur desktop) */}
        <img
          src={iconDesignImagin}
          alt="icon"
          className="absolute -bottom-40 -left-3 w-[200px] sm:w-[257px] h-[350px] sm:h-[450px] hidden md:block"
        />

        {/* Section avec Background */}
        <div
          style={{ backgroundImage: `url(${imaginationHero})` }}
          className="w-full max-w-[1280px] h-auto min-h-[440px] mx-auto mt-[40px] flex flex-col items-center justify-center md:justify-end bg-cover bg-center relative z-20"
        >
          {/* Contenu avec fond flou */}
          <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[90%] sm:max-w-[652px] h-auto min-h-[322px] text-white bg-[rgba(255,255,255,0.2)] backdrop-blur-sm p-6 rounded-xl">
            <h1 className="text-[24px] sm:text-[50px] font-normal font-bodoni leading-[110%] text-center">
              Imaginons Votre prochain lieu de vie avec l&apos;IA
            </h1>
            <p className="text-center leading-[150%] text-[14px] sm:text-[18px] font-light px-2 sm:px-4">
              En quelques clics, créez des images pour nourrir votre inspiration
              selon vos envies et imaginez votre projet.
            </p>
            <button className="bg-Primary text-white w-[120px] sm:w-[140px] h-[40px] hover:bg-HoverColor transition-transform duration-300 ease-in-out text-[12px] font-normal rounded-full mx-auto">
              DÉCOUVRIR
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 px-4 w-full h-[292px] md:h-[220px] mx-auto">
        <div className="text-[40px] md:text-[50px] w-full max-w-[1064px] h-auto leading-[120%] font-light text-center">
          <h1>Un idéal que l’on poursuit.</h1>
          <h1>Un sentiment que vous vivez.</h1>
        </div>
        <button className="bg-Primary text-white w-[180px] md:w-[191px] text-[12px] h-[40px] rounded-full hover:bg-HoverColor transition-transform duration-300 ease-in-out">
          PRENDRE RENDEZ-VOUS
        </button>
      </div>

      {/* Accompagement , Garantie , Surclassement */}

      <div className="md:h-[416px] flex flex-col md:flex-row items-center justify-center gap-[90px] md:gap-[120px] py-[20px] md:pb-[60px]">
        {DataAcomp.map((item, index) => (
          <div
            key={index}
            className="w-full h-[248px] md:w-[336px] flex flex-col md:h-[287px] gap-[20px] md:gap-[40px]  "
          >
            <div className="w-[67px] h-[67px] flex mx-auto">
              <img src={item.icon} alt="icon" className="w-full h-full" />
            </div>
            <h1 className="font-bodoni font-normal text-[50px] text-center leading-[50px] whitespace-pre-line">
              {item.title}
            </h1>
            <p className="text-center font-normal text-[18px]">{item.des}</p>
          </div>
        ))}
      </div>

      {/* Renconter votre concipteure  */}
      <Concepteure />

      {/*Découvrez tous nos univers dans notre nouveau catalogue.  */}
      <DevoverSection />
    </div>
  );
};

export default Home;
