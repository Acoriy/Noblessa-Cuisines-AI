import {Routes , Route } from "react-router-dom"
import Home from "./Components/Home"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import LandingPageA from "./Components/LandingPageA";
import LandingPageB from "./Components/LandingPageB";
import LandingPageImages from "./Components/LandingPageImages";
import CharginPage from "./Components/CharginPage";
import LandingPageSuggestions from "./Components/LandingPageSuggestions";
import { useEffect, useState } from "react";
import LandinPageTélechargez from "./Components/LandinPageTélechargez";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement (par exemple, appel API)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Temps de chargement 
  }, []);

  // 🔹 Si la page charge, afficher uniquement CharginPage
  if (isLoading) {
    return <CharginPage />;
  }
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/landingPageA" element={<LandingPageA/>}></Route>
          <Route path="/landingPageB" element={<LandingPageB/>}></Route>
          <Route path="/landingPageImages" element={<LandingPageImages/>}></Route>
          <Route path="/chargin" element={<CharginPage/>}></Route>
          <Route path="/suggestions" element={<LandingPageSuggestions/>}></Route>
          <Route path="/téléchargez" element={<LandinPageTélechargez/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
