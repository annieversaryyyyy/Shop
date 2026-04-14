import AboutUs from "../../widgets/aboutUsSection/ui/AboutUs";
import HeroBanner from "../../widgets/hero-banner/ui/HeroBanner";
import Collection from "../../widgets/collection/ui/Collection";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainRoot">
      <HeroBanner />
      <AboutUs />
      <Collection />
    </div>
  );
}

export default MainPage;
