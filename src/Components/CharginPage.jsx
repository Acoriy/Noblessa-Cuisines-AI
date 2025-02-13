import { motion } from "framer-motion";
import HeaderPage from "../Layouts/HeaderPage";
import DecoverSection from "../Layouts/DecoverSection";
import CharginIcon from "../assets/Icons/Chargin.svg";

const CharginPage = () => {
  return (
    <div>
      <HeaderPage />

      <div className="flex flex-col min-h-screen gap-[30px] md:gap-[40px] items-center justify-center">
        {/* 🔹 Animation du logo */}
        <motion.div
          className="w-[166px] h-[180px] md:w-[281px] md:h-[275px]"
          animate={{
            rotate: [0, 360], // Rotation complète
            scale: [1, 1.1, 1], // Effet de pulsation
            opacity: [0.8, 1, 0.8], // Changement de transparence
          }}
          transition={{
            duration: 2, // Durée totale
            repeat: Infinity, // Répète à l'infini
            ease: "easeInOut", // Effet fluide
          }}
        >
          <img src={CharginIcon} alt="Icon" className="w-full h-full" />
        </motion.div>

        {/*  Texte de chargement */}
        <div className="font-bodoni w-[390px] h-[123px] text-center">
          <motion.h1
            className="text-[32px] font-normal leading-[110%]"
            animate={{
              opacity: [0.5, 1, 0.5], // Effet de clignotement
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Création en cours...
          </motion.h1>
        </div>
      </div>

      {/* Section cachée sur mobile */}
      <DecoverSection className="hidden md:block" />
    </div>
  );
};

export default CharginPage;
