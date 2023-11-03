import React from "react";
import { Drawer, DrawerProps } from "@mui/material";

import { cn } from "utils/index";
import { CloseIconSvg } from "assets/components";

import { SignUpButtonOutline } from "./btns/SignUpButtonOutline";
import { GradientText } from ".";

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={cn(
        "text-14 text-alternative-black font-[500] leading-none mb-[38px]",
        className
      )}
    />
  );
};

export const MenuMobile: React.FC<Omit<DrawerProps, "onClose">> = ({
  ...props
}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      <span
        className="mr-[19px] text-14 cursor-pointer"
        onClick={() => setShow(true)}
      >
        MENU
      </span>
      <Drawer
        className="[&_.MuiPaper-root]:p-[32px] [&_.MuiPaper-root]:w-[321px]"
        anchor="left"
        onClose={handleClose}
        open={show}
        onClick={(e) => {
          if (
            e.target instanceof HTMLAnchorElement ||
            e.target instanceof HTMLButtonElement
          ) {
            handleClose();
          }
        }}
        {...props}
      >
        <div className="flex justify-between items-center mb-[60px]">
          <a href="#top">
            <GradientText onClick={handleClose} className="!text-20 max-w-max">
              hwa-rang
            </GradientText>
          </a>
          <CloseIconSvg
            className="cursor-pointer hover:scale-x-125 hover:scale-y-75 transition"
            onClick={handleClose}
          />
        </div>
        <Link href="#about">/ ПРО КЛУБ</Link>
        <Link href="#advantages">/ НАШІ ПЕРЕВАГИ</Link>
        <Link href="#trainers">/ ТРЕНЕРИ</Link>
        <Link href="#halls">/ ЗАЛИ</Link>
        <Link href="#services">/ ПОСЛУГИ</Link>

        <a href="#form">
          <SignUpButtonOutline className="whitespace-nowrap text-12" />
        </a>
      </Drawer>
    </>
  );
};
