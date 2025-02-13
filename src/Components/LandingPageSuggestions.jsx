import DecoverSection from "../Layouts/DecoverSection"
import HeaderPage from "../Layouts/HeaderPage"
import Imaginion from "../Layouts/Imaginion"
import SearchWithFilter from "./SearchWithFilter"
import Textes from "../Layouts/Textes";

const LandingPageSuggestions = () => {
    const TitleBtn = "GÉNÉRER PLUS D’IMAGES"
  return (
    <div>
      <HeaderPage/>
      {/* section 1 */}
      <Imaginion/>
      {/* Section 2 */}
      <div>
        <Textes/>
      </div>
      {/* Section 3 */}
      <SearchWithFilter TitleBtn = {TitleBtn}/>
      {/* Section 4 */}
      <DecoverSection/>

    </div>
  )
}

export default LandingPageSuggestions
