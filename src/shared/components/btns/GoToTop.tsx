import React from "react";
import { AnimatePresence, m, useScroll } from "framer-motion";

import { ArrowTop } from "shared/icons";
import { cn } from "utils/index";

const SCROLL_THRESHOLD = 0.5;

function GoToTop({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const [show, setShow] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const handler = () => setShow(scrollYProgress.get() > SCROLL_THRESHOLD);

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(
              "z-10 w-[48px] h-[48px] block fixed right-[19px] lg:right-2 top-[95%] lg:bottom-2 lg:top-auto lg:translate-y-0 -translate-y-1/2 shadow-custom rounded-full bg-white border-border-semi-transparent border hover:border-0 fill-alternative-deep-black transition hover:fill-white hover:bg-gradient hover:animate-gradient-shift",
              className,
            )}
            style={{ backgroundSize: "200% 200%" }}
            {...props}
          >
            <ArrowTop className="mx-auto" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default GoToTop;
