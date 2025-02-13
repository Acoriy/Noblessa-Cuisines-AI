import Logo from "../assets/Icons/noblessa-logo-landingPage.svg";
import Arrow from "../assets/Icons/arrowBack.svg";
import { Link } from "react-router-dom";
const HeaderPage = () => {
  return (
    <div>
       <div className="w-full h-[90px] flex flex-row justify-center items-center relative shadow-md">
           <Link to="/"><img src={Arrow} alt="arrowBack" className="w-[29px] h-[35px] absolute top-[30px] left-6 "/></Link>
           <img src={Logo} alt="logo" className="w-[127px] h-[64px]" />
       </div>
      
    </div>
  )
}

export default HeaderPage
