import "./App.module.scss";
import { AboutSection } from "./components/AboutSection";
import { AdvantageSection } from "./components/AdvantageSection";
import { Header } from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <AboutSection />
            <AdvantageSection />
        </>
    );
}

export default App;
