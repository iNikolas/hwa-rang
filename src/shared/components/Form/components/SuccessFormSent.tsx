import { Dialog, DialogProps, useMediaQuery } from "@mui/material";

import { GradientText } from "shared/components";
import { SignUpButton } from "shared/components/btns/SignUpButton";
import { theme } from "theme";

export function SuccessFormSent({
  onClose,
  ...props
}: { onClose: () => void } & Omit<DialogProps, "onClose">) {
  const gtMd = useMediaQuery(`(min-width: ${theme.screens.md.max})`);

  return (
    <Dialog onClose={onClose} fullScreen {...props}>
      <div
        className="flex flex-col justify-between items-center text-center h-full bg-kyiv-kyiv bg-[bottom_left_75%] pt-12 pb-[70px] px-[211px] tablet:py-[74px] tablet:px-[70px] sm:py-[88px] sm:px-5 overflow-hidden"
        style={{ ...(gtMd && { backgroundSize: "120%" }) }}
      >
        <div className="font-fontMonument cursor-pointer" onClick={onClose}>
          <GradientText className="sm:text-[32px] font-[800] leading-none">
            HWA-RANG
          </GradientText>
          <p className="text-[14px] translate-x-[42px] tracking-[.18rem] leading-none">
            Kyiv taekwondo club
          </p>
        </div>
        <div>
          <p className="max-w-[1018px] mx-auto sm:text-[32px] text-[48px] sm:leading-[48px] tablet:leading-[57.6px] leading-[67.2px] font-[700] sm:mb-[34px] mb-20">
            Дякуємо, <span className="whitespace-nowrap">що записались</span>{" "}
            <span className="whitespace-nowrap">на тренування</span>
          </p>
          <p className="max-w-[453px] mx-auto sm:font-normal font-[500] lg:text-[24px] text-[32px] sm:leading-[36px] tablet:leading-[40.8px] leading-[54.4px]">
            Тренер зв’яжеться{" "}
            <span className="whitespace-nowrap">з вами найближчим часом</span>
          </p>
        </div>
        <SignUpButton
          onClick={onClose}
          className="whitespace-nowrap !min-w-max sm:!text-14 !text-20"
        >
          Повернутись до головної сторінки
        </SignUpButton>
      </div>
    </Dialog>
  );
}
