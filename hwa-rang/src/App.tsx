import "./App.module.scss";
import { AboutSection } from "./components/AboutSection";
import { AboutTKDSection } from "./components/AboutTKDSection";
import { AdvantageSection } from "./components/AdvantageSection";
import { AthletesGallery } from "./components/AthletesGallery";
import { CoachesSection } from "./components/CoachesSection";
import { Footer } from "./components/Footer";
import { HallsSection } from "./components/HallsSection";
import { Header } from "./components/Header";
import { ServicesSection } from "./components/ServicesSection";

function App() {
    return (
        <>
            <Header />
            <AboutSection />
            <AthletesGallery />
            <AboutTKDSection />
            {/* <AdvantageSection /> */}
            <CoachesSection />
            {/* <ServicesSection /> */}
            <HallsSection />
            <Footer />
        </>
    );
}

export default App;
