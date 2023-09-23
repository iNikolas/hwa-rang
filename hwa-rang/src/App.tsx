import "./App.module.scss";
import { AboutSection } from "./components/AboutSection";
import { AdvantageSection } from "./components/AdvantageSection";
import { Header } from "./components/Header";
import { ServicesSection } from "./components/ServicesSection";

function App() {
    return (
        <>
            <Header />
            <AboutSection />
            <AdvantageSection />
            <ServicesSection />
        </>
    );
}

export default App;
