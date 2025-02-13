import Logo from "../assets/Icons/logo-Footer.svg";

import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" md:mx-h-[560px] bg-Textcolor text-[#fff] py-[30px] md:py-[80px] px-[23px] flex flex-col font-HelveticaNeue">
      <div className="container  mx-auto  px-4 flex md:py-[23px] flex-col md:row items-center">
        {/* Section principale du footer */}
        <div className="w-full md:px-[80px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Section 1 : Logo / Social media */}
          <div className="flex flex-row md:flex-col items-center  gap-[20px] w-[300px] h-[70px] md:w-[300px] md:h-[200px] md:relative">
            <div className="w-[167.96px] h-[55.9px] md:w-[167.96px] md:h-[65.89px] md:absolute md:top-0 md:left-0">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="flex flex-row items-center  gap-[13px] text-[#fff] md:absolute md:bottom-0 md:left-0">
              <FaFacebookF className="w-[10.29px] h-[19.35px]  cursor-pointer hover:text-HoverColor transition-transform duration-300 ease-in-out" />
              <FaInstagram className="w-[20.12px] h-[20.12px]  cursor-pointer hover:text-HoverColor transition-transform duration-300 ease-in-out" />
              <FaPinterestP className="w-[16.88px] h-[21.18px]  cursor-pointer hover:text-HoverColor transition-transform duration-300 ease-in-out" />
            </div>
          </div>
          {/* Section 4 : Newsletter mobile */}
          <div className="block md:hidden">
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] md:text-[24px]font-bold mb-4 leading-[28px] md:leading-normal">
                Recevez notre newsletter <br /> et inspirez-vous
              </h3>
              <form className="flex flex-col space-y-4 w-[300px] h-[157px] md:h-[241px]  justify-center">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 rounded-lg border bg-Textcolor border-t-0 border-l-0 border-r-0 border-b-3  focus:outline-none text-[#fff]"
                />

                <div className="flex flex-row w-[300px] h-[55px] gap-[8px] ">
                  <input
                    type="checheckbox"
                    className="text-[#fff] border border-[#fff]  w-[14px] h-[14px] cursor-pointer bg-Textcolor "
                  />
                  <p className="text-[10px] font-light tracking-[3%] taracking-[3%] w-[165px] h-[55px] ">
                    J&apos;accepte que les données personnelles saisies dans ce
                    formulaire soient utilisées à des fins commerciales.
                  </p>
                  <button className="bg-Primary text-[#fff] w-[113px] h-[40px] rounded-full text-[12px] font-normal hover:bg-HoverColor transition-transform duration-300 ease-in-out">
                    M&apos;INSCRIRE
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Section 2 : Nos aménagements */}
          <div className=" w-[300px]  flex flex-col   gap-[20px] md:space-y-[30px] font-light tracking-[3%] text-[14px] md:text-[16px] ">
            {/* <h3 className="text-lg font-bold mb-4">Nos aménagements</h3> */}
            <ul className="space-y-[20px] md:space-y-[30px]">
              <li>
                <a href="/matieres" className="text-sm hover:text-HoverColor">
                Nos aménagements
                </a>
              </li>
              <li>
                <a
                  href="/savoir-faire"
                  className="text-sm hover:text-HoverColor"
                >
                  Nos matières
                </a>
              </li>
              <li>
                <a href="/marque" className="text-sm hover:text-HoverColor">
                Notre savoir-faire
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm hover:text-HoverColor">
                La marque
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm hover:text-HoverColor">
                Le blog du Beau Vivre
                </a>
              </li>
            </ul>
            <div className="block md:hidden bg-[#fff] w-full h-[2px] border border-x-[0.5px] border-y-[0.5px] opacity-[0.7]"></div>
          </div>

          {/* Section 3 : Pour les professionnels */}
          <div className=" w-[300px]  flex flex-col  gap-[20px] md:gap-[30px] font-light tracking-[3%] text-[14px] md:text-[16px] ">
            <ul className="space-y-[20px] md:space-y-[30px]">
              <li>
                <a href="/emplois" className="text-sm hover:text-HoverColor">
                Pour les professionnels
                </a>
              </li>
              <li>
                <a href="/magasin" className="text-sm hover:text-HoverColor">
                Emplois
                </a>
              </li>
              <li>
                <a href="/monde" className="text-sm hover:text-HoverColor">
                Ouvrir un magasin
                </a>
              </li>
              <li>
                <a href="/domicile" className="text-sm hover:text-HoverColor">
                noblessa dans le monde
                </a>
              </li>
              <li>
                <a href="/domicile" className="text-sm hover:text-HoverColor">
                noblessa à domicile
                </a>
              </li>
            </ul>

            <div className="block md:hidden bg-[#fff] w-full h-[2px] border border-x-[0.5px] border-y-[0.5px] opacity-[0.7]"></div>
          </div>

          {/* Section 4 : Newsletter desktop */}
          <div className="hidden md:block">
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] md:text-[24px]font-bold mb-4 leading-[28px] md:leading-normal">
                Recevez notre newsletter <br /> et inspirez-vous
              </h3>
              <form className="flex flex-col space-y-4 w-[300px] h-[207px] md:h-[211px]">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 rounded-lg border bg-Textcolor border-t-0 border-l-0 border-r-0 border-b-3  focus:outline-none text-[#fff]"
                />

                <div className="flex flex-row w-[300px] h-[55px] gap-[8px] ">
                  <input
                    type="checheckbox"
                    className="text-[#fff] border border-[#fff]  w-[14px] h-[14px] cursor-pointer bg-Textcolor "
                  />
                  <p className="text-[10px] font-light tracking-[3%] taracking-[3%] w-[165px] h-[55px] ">
                    J&apos;accepte que les données personnelles saisies dans ce
                    formulaire soient utilisées à des fins commerciales.
                  </p>
                  <button className="bg-Primary text-[#fff] w-[113px] h-[40px] rounded-full text-[12px] font-normal hover:bg-HoverColor transition-transform duration-300 ease-in-out">
                    M&apos;INSCRIRE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Section mentions légales */}
        <div className="md:border-t border-gray-200 md:mt-8 pt-8 text-center text-[16px] font-light ">
          <div className="flex flex-col gap-[20px] md:flex-row  justify-center space-x-4">
            <Link to="/" className="text-sm hover:text-HoverColor">
              Mentions légales
            </Link>
            <div className="bg-[#fff] w-[1px] h-[25px] border-[0.5px] hidden md:block opacity-[0.7]"></div>
            <Link to="/" className="text-sm hover:text-HoverColor">
              Politique de confidentialité
            </Link>
            <div className="bg-[#fff] w-[1px] h-[25px] border-[0.5px] hidden md:block opacity-[0.7]"></div>
            <Link to="/" className="text-sm hover:text-HoverColor">
              Conditions générales de vente
            </Link>
            <div className="bg-[#fff] w-[1px] h-[25px] border-[0.5px] hidden md:block opacity-[0.7]"></div>
            <Link to="/" className="text-sm hover:text-HoverColor">
              Gestion des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
