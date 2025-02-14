import { useState } from "react";


const SuggestionBlock = () => {
  return (
    <div className="max-w-[350px] text-[#1a1206] font-HelveticaNeue text-[16px] tracking-[3%]">
      {/* Texte principal */}
      <p className="text-[16px] leading-[150%] font-light">
        Mauris vitae euismod massa. Nulla sit amet mauris venenatis, fermentum sem id, pellentesque felis.
        Vivamus at eleifend sem, in condimentum odio. Etiam eleifend ex quis volutpat ultricies. Praesent 
        ultrices elit neque, congue maximus mi mollis sed. Sed id aliquet sapien, ac viverra augue.
      </p>

      {/* Façade recommandée */}
      <p className="font-bold text-[16px] mt-4 tracking-[3%] text-Primary">Façade recommandée</p>
      <ul className="list-none mt-[6px]">
        <li className="text-[14px] flex items-center">
          <span className=" mr-2 font-bold text-[16px] mt-4 tracking-[3%] pb-3 flex items-center ">•</span> Easytouch 964 Vert Minéral Ultra-Mat
        </li>
      </ul>

      {/* Plans de travail recommandés */}
      <p className="font-bold text-[16px] mt-4 tracking-[3%] text-Primary ">Plans de travail recommandés</p>
      <ul className="list-none mt-1 space-y-1">
        {["366 Noir structuré", "378 Décor béton noir", "330 Décor béton gris"].map((plan, i) => (
          <li key={i} className="text-[14px] flex items-center">
            <span className=" mr-2">•</span> {plan}
          </li>
        ))}
      </ul>

      {/* Ligne de séparation */}
      <div className="border-t-[1px] border-[#1a1206] mt-4 w-full" />
    </div>
  );
};

const SuggestionsGrid = () => {
  const [activeTab, setActiveTab] = useState("Suggestions Noblessa");
  return (
    <div className="max-w-[1200px] mx-auto mt-8 px-[40px] md:px-0">
      {/* Titre de la section */}
      <div className="flex justify-between text-[14px] font-medium mb-4 md:justify-start md:gap-[31px]">
      {["Images créées", "Suggestions Noblessa"].map((tab) => (
        <span
          key={tab}
          className={`text-[16px] cursor-pointer transition-colors ${
            activeTab === tab ? "text-Primary font-bold" : "font-light"
          }`}
          onClick={() => setActiveTab(tab)} //Lorsque vous cliquez sur un onglet, il devient actif
        >
          {tab}
        </span>
      ))}
      </div>

      {/* Grille des suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SuggestionBlock />
        <SuggestionBlock />
        <SuggestionBlock />
        <SuggestionBlock />
      </div>
    </div>
  );
};

export default SuggestionsGrid;
