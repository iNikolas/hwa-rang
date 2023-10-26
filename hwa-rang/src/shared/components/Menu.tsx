import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { SignUpButtonOutline } from "./btns/SignUpButtonOutline";

export const MenuMobile = () => {
    return (
        <Menu
            animate={{
                mount: { transform: "translateX(0)", left: "0" },
                unmount: { transform: "translateX(-55px)", left: "-55px" },
            }}
            placement="left"
            lockScroll={true}
        >
            <MenuHandler>
                <Button className="text-black text-base font-normal leading-14 mr-6 tracking-normal text-right">
                    Menu
                </Button>
            </MenuHandler>
            <MenuList className="w-[321px] h-full bg-[#ffffff] pt-[100px] pl-5 font-medium text-14">
                <MenuItem className="my-[19px] text-left">
                    <a href="#about">/ ПРО КЛУБ</a>
                </MenuItem>
                <MenuItem className="my-[19px] text-left">
                    <a href="#advantages">/ НАШІ ПЕРЕВАГИ</a>
                </MenuItem>
                <MenuItem className="my-[19px] text-left">
                    {" "}
                    <a href="#trainers">/ ТРЕНЕРИ</a>
                </MenuItem>
                <MenuItem className="my-[19px] text-left">
                    <a href="#halls">/ ЗАЛИ</a>
                </MenuItem>
                <MenuItem className="my-[19px] text-left">
                    {" "}
                    <a href="#services">/ ПОСЛУГИ</a>
                </MenuItem>
                <SignUpButtonOutline />
            </MenuList>
        </Menu>
    );
};
