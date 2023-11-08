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
  const hashRef = React.useRef("");
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

    if (!scrolled) {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrolled]);

  React.useEffect(() => {
    const handler = () => {
      if (!hashRef.current) {
        return;
      }

      const element = document.querySelector(hashRef.current);

      if (element) {
        setTimeout(() => element.scrollIntoView(), 1000);
        hashRef.current = "";
        return;
      }

      window.requestAnimationFrame(handler);
    };

    if (scrolled && hashRef.current) {
      window.requestAnimationFrame(handler);
    }
  }, [scrolled]);

  return (
    <LazyMotion features={domAnimation}>
      <LazyMotion features={domMax}>
        <ThemeProvider theme={muiTheme}>
          <FormProvider {...methods}>
            <CssBaseline />
            <div
              onClick={(e) => {
                if (scrolled) {
                  return;
                }

                let hash = "";
                const target = e.target;
                if (target instanceof HTMLAnchorElement) {
                  hash = new URL(target.href).hash;
                }
                if (target instanceof HTMLButtonElement) {
                  const link = target.closest("a");
                  hash = new URL(link?.href ?? "").hash;
                }

                if (hash && !scrolled) {
                  setScrolled(true);
                  document.querySelector(hash)
                    ? null
                    : (hashRef.current = hash);
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
