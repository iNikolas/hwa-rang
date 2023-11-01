import { CssBaseline, ThemeProvider } from "@mui/material";
import { domAnimation, LazyMotion, domMax } from "framer-motion";

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
import { Form } from "./shared/components/Form";
import { muiTheme } from "./theme";

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <LazyMotion features={domMax}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Header />
          <AboutSection />
          <AthletesGallery />
          <AboutTKDSection />
          <AdvantageSection />
          <CoachesSection />
          <ServicesSection />
          <HallsSection />
          <Form />
          <Footer />
        </ThemeProvider>
      </LazyMotion>
    </LazyMotion>
  );
}

export default App;
