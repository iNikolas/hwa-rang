import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export const MenuMobile = () => {
    return (
        <Menu placement="bottom-end">
            <MenuHandler>
                <Button className="text-black text-base font-normal leading-14 mr-6 tracking-normal text-right  md:text-white xs:text-black">
                    Menu
                </Button>
            </MenuHandler>
            <MenuList>
                <MenuItem>/ ПРО КЛУБ</MenuItem>
                <MenuItem>/ НАШІ ПЕРЕВАГИ</MenuItem>
                <MenuItem>/ ТРЕНЕРИ</MenuItem>
                <MenuItem>/ ЗАЛИ</MenuItem>
                <MenuItem>/ ПОСЛУГИ</MenuItem>
            </MenuList>
        </Menu>
    );
};
