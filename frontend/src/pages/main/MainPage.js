import AboutUs from "../../widgets/aboutUsSection/ui/AboutUs";
import HeroBanner from "../../widgets/hero-banner/ui/HeroBanner";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainRoot">
      <HeroBanner />
      <AboutUs />
    </div>
  );
}

export default MainPage;
