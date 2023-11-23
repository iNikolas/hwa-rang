import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { domAnimation, LazyMotion, domMax } from "framer-motion";
import { ToastContainer } from "react-toastify";

import { muiTheme } from "theme";
import { Suspense } from "shared/components";
import { FormSchema } from "shared/components/Form/types";

import { Header } from "./components/Header";

import "./App.module.scss";

const AboutSection = React.lazy(() => import("./components/AboutSection"));
const AboutTKDSection = React.lazy(
  () => import("./components/AboutTKDSection")
);
const AdvantageSection = React.lazy(
  () => import("./components/AdvantageSection")
);
const AthletesGallery = React.lazy(
  () => import("./components/AthletesGallery")
);
const CoachesSection = React.lazy(() => import("./components/CoachesSection"));
const Footer = React.lazy(() => import("./components/Footer"));
const HallsSection = React.lazy(() => import("./components/HallsSection"));
const ServicesSection = React.lazy(
  () => import("./components/ServicesSection")
);
const Form = React.lazy(() => import("./shared/components/Form"));
const GoToTop = React.lazy(() => import("./shared/components/btns/GoToTop"));

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
            <Suspense>
              <AboutSection />
            </Suspense>
            <Suspense>
              <AthletesGallery />
            </Suspense>
            <Suspense>
              <AboutTKDSection />
            </Suspense>
            <Suspense>
              <AdvantageSection />
            </Suspense>
            <Suspense>
              <CoachesSection />
            </Suspense>
            <Suspense>
              <ServicesSection />
            </Suspense>
            <Suspense>
              <HallsSection />
            </Suspense>
            <Suspense>
              <Form methods={methods} />
            </Suspense>
            <Suspense>
              <Footer />
            </Suspense>
            <Suspense>
              <GoToTop />
            </Suspense>
            <ToastContainer />
          </FormProvider>
        </ThemeProvider>
      </LazyMotion>
    </LazyMotion>
  );
}

export default App;
