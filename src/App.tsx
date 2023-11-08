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

function App() {
  const [hash, setHash] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);
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

  React.useEffect(() => {
    const scrollHandler = () => setScrolled(true);

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  React.useEffect(() => {
    const handler = () => {
      const element = document.querySelector(hash);

      if (!hash) {
        return;
      }

      if (element) {
        element.scrollIntoView();
        setHash("");
        return;
      }

      window.requestAnimationFrame(handler);
    };

    if (hash) {
      window.requestAnimationFrame(handler);
    }
  }, [hash]);

  return (
    <LazyMotion features={domAnimation}>
      <LazyMotion features={domMax}>
        <ThemeProvider theme={muiTheme}>
          <FormProvider {...methods}>
            <CssBaseline />
            <div
              onClick={(e) => {
                let hash = "";
                const target = e.target;
                if (target instanceof HTMLAnchorElement) {
                  setScrolled(true);
                  hash = new URL(target.href).hash;
                }
                if (target instanceof HTMLButtonElement) {
                  setScrolled(true);
                  const link = target.closest("a");
                  hash = new URL(link?.href ?? "").hash;
                }

                if (hash) {
                  document.querySelector(hash) ? null : setHash(hash);
                }
              }}
            >
              <Header />
            </div>
            {scrolled && (
              <>
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
              </>
            )}
            {!scrolled && <div className="min-h-screen" />}
          </FormProvider>
          <ToastContainer />
        </ThemeProvider>
      </LazyMotion>
    </LazyMotion>
  );
}

export default App;
