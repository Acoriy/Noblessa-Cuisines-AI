import cons1 from "../assets/Img/cons1.png";
import cons2 from "../assets/Img/cons2.png";
import cons3 from "../assets/Img/cons3.png";
import iconDesignRight from "../assets/Icons/iconDesignRight.svg";
const Concepteure = () => {
  return (
    
          <div className="w-full h-[862px] md:h-[670px] p-[20px] flex flex-col md:flex-row items-center  gap-[40px] relative md:pl-[40px] ">
            <div className=" md:w-[630px] md:h-[630px] flex flex-row gap-[20px]">
              <div className="w-[170px] h-[373px] md:w-[305px] md:h-[631px] relative">
                <img
                  src={cons3}
                  alt="image"
                  className="w-[169.95px] h-[273.59px] md:w-[305px] md:h-[491px] bg-cover bg-center absolute left-0 bottom-0"
                />
              </div>
              <div className="flex flex-col w-[181px] h-[373px] md:w-[305px] md:h-[631px] gap-[20px]">
                <img
                  src={cons1}
                  alt="image"
                  className="bg-cover bg-center w-[119px] h-[119px] md:w-[230px] md:h-[230px]"
                />
                <img
                  src={cons2}
                  alt="image"
                  className="bg-cover bg-center w-[170px] h-[170px] md:w-[305px] md:h-[305px]"
                />
              </div>
            </div>
    
            <div className="w-[350px] h-[423px] md:w-[630px]  md:h-[630px] flex items-center justify-center ">
              <div className="w-[415px] h-[420px] flex flex-col gap-[25px]">
                <h1 className="font-light text-[40px] md:text-[60px] leading-[100%] text-start">
                  Rencontrez votre concepteur
                </h1>
                <ul className="font-light text-[20px] list-disc pl-5">
                  <li>Explorez nos aménagements & matières.</li>
                  <li>Bénéficiez de conseils techniques et créatifs.</li>
                  <li>
                    Recevez des propositions et un devis gratuit pour votre projet.
                  </li>
                </ul>
                {/* btns */}
                <div className="flex flex-col mx-auto md:mx-0 md:flex-row gap-[20px]">
                  <button className="w-[191px] h-[40px] rounded-full text-[#fff] text-[12px] bg-Primary hover:bg-HoverColor tracking-[3%] font-normal">
                    PRENDRE RENDEZ-VOUS
                  </button>
                  <button className="w-[191px] h-[40px] rounded-full text-[12px] border border-Primary border-x-2 border-y-2 text-Primary tracking-[3%] font-normal hover:text-HoverColor hover:border-HoverColor">
                    TROUVER VOTRE MAGASIN
                  </button>
                </div>
                {/* icon design right  */}
                <img
                  src={iconDesignRight}
                  alt="icon"
                  className="absolute right-0 w-[257px] h-[469px] hidden md:block"
                />
              </div>
            </div>
          </div>
  )
}

export default Concepteure
