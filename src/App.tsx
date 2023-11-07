import { CssBaseline, ThemeProvider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { domAnimation, LazyMotion, domMax } from "framer-motion";
import { ToastContainer } from "react-toastify";

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
import { FormSchema } from "shared/components/Form/types";

function App() {
  const methods = useForm<FormSchema>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      viber: "",
      telegram: "",
      service: "none",
      hall: "none",
      for: "",
      age: "",
      howToConnect: [],
    },
  });

  return (
    <LazyMotion features={domAnimation}>
      <LazyMotion features={domMax}>
        <ThemeProvider theme={muiTheme}>
          <FormProvider {...methods}>
            <CssBaseline />
            <Header />
            <AboutSection />
            <AthletesGallery />
            <AboutTKDSection />
            <AdvantageSection />
            <CoachesSection />
            <ServicesSection />
            <HallsSection />
            <Form methods={methods} />
            <Footer />
          </FormProvider>
          <ToastContainer />
        </ThemeProvider>
      </LazyMotion>
    </LazyMotion>
  );
}

export default App;
