import { Card, List, ListItem } from "@material-tailwind/react";

export const Sidebar = () => {
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <List>
                <ListItem>/ ПРО КЛУБ</ListItem>
                <ListItem>/ НАШІ ПЕРЕВАГИ</ListItem>
                <ListItem>/ ТРЕНЕРИ</ListItem>
                <ListItem>/ ЗАЛИ</ListItem>
                <ListItem>/ ПОСЛУГИ</ListItem>
            </List>
        </Card>
    );
};
