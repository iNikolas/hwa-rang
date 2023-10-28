import {
  TextField,
  FormControl as MuiFormControl,
  FormControlLabel as MuiFormControlLabel,
  Radio,
  RadioGroup,
  MenuItem as MuiMenuItem,
  Select,
  SelectChangeEvent,
  FormGroup,
  Checkbox,
  FormControlProps,
  FormControlLabelProps,
  MenuItemProps,
} from "@mui/material";
import React from "react";

import { GradientText } from "./GradientText";
import { cn } from "../utils";

import { theme } from "theme";
console.log(theme);

const Label = ({ className, ...props }: React.HTMLProps<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={cn("text-xl leading-none font-medium mb-[9px]", className)}
    />
  );
};

const MenuItem = (props: MenuItemProps) => {
  return <MuiMenuItem sx={{ color: theme.colors.gray[400] }} {...props} />;
};

const FormControlLabel = ({
  checkbox = false,
  ...props
}: { checkbox?: boolean } & FormControlLabelProps) => {
  console.log(theme.colors["dark-blue"], theme.colors.purple);
  return (
    <MuiFormControlLabel
      className="[&_.MuiTypography-root]:text-secondary [&_.MuiTypography-root]:font-montserrat"
      sx={{
        height: 48,
        "& .Mui-checked": {
          color: checkbox ? theme.colors["dark-blue"] : theme.colors.purple,
        },
      }}
      {...props}
    />
  );
};

const FormControl = (props: FormControlProps) => {
  return (
    <MuiFormControl
      className="[&_.MuiSelect-select]:text-gray-400"
      variant="standard"
      size="small"
      fullWidth
      sx={{ mb: 4.5 }}
      {...props}
    />
  );
};

export const Form: React.FC = () => {
  const [services, setServices] = React.useState("none");
  const [halls, setHalls] = React.useState("none");

  const servicesSelect = (event: SelectChangeEvent) => {
    setServices(event.target.value);
  };
  const hallsSelect = (event: SelectChangeEvent) => {
    setHalls(event.target.value);
  };

  return (
    <form className="[&_input]:placeholder:text-gray-400 [&_input]:placeholder:opacity-100 max-w-[600px] p-4 flex flex-col [&_.MuiInputLabel-shrink]:opacity-0 [&_.MuiInput-root]:h-[29px] [&_.MuiInputBase-root]:mt-0 [&_input]:text-gray-400">
      <GradientText className="ml-1 mb-[42px]">
        Запишись <span className="whitespace-nowrap">на тренування</span>
      </GradientText>
      <Label htmlFor="name">Ім’я</Label>
      <TextField
        id="name"
        placeholder="Введіть ваше ім’я"
        variant="standard"
        size="small"
        sx={{
          marginBottom: 4.5,
        }}
      />
      <FormControl>
        <Label htmlFor="services-select">Послуги</Label>
        <Select id="services-select" value={services} onChange={servicesSelect}>
          <MenuItem sx={{ display: "none" }} value="none">
            Оберіть послугу
          </MenuItem>
          <MenuItem value={"Групові тренування"}>Групові тренування</MenuItem>
          <MenuItem value={"Персональні тренування"}>
            Персональні тренування
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="halls-select">Зал</Label>
        <Select id="halls-select" value={halls} onChange={hallsSelect}>
          <MenuItem sx={{ display: "none" }} value="none">
            Оберіть зал
          </MenuItem>
          <MenuItem value={"Метро Диміївська/Голосіївська"}>
            Метро Диміївська/Голосіївська
          </MenuItem>
          <MenuItem value={"Метро Іподром/Теремки"}>
            Метро Іподром/Теремки
          </MenuItem>
          <MenuItem value={"Метро Героїв Дніпра"}>Метро Героїв Дніпра</MenuItem>
          <MenuItem value={"Метро Дарниця"}>Метро Дарниця</MenuItem>
        </Select>
      </FormControl>

      <Label htmlFor="row-radio-buttons-group-label">
        Оберіть хто буде тренуватись
      </Label>
      <RadioGroup
        row
        id="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginBottom: 2 }}
      >
        <FormControlLabel
          value="Дорослий"
          control={<Radio />}
          label="Дорослий"
        />
        <FormControlLabel value="Дитина" control={<Radio />} label="Дитина" />
      </RadioGroup>
      <Label htmlFor="age">Вік</Label>
      <TextField
        id="age"
        size="small"
        placeholder="Вкажіть ваш вік"
        variant="standard"
        sx={{ marginBottom: 5.25 }}
      />
      <FormGroup>
        <Label>Оберіть спосіб зв’язку</Label>
        <FormControlLabel
          checkbox
          control={<Checkbox />}
          label="Мобільний телефон"
        />
        <FormControlLabel checkbox control={<Checkbox />} label="Viber" />
        <FormControlLabel checkbox control={<Checkbox />} label="Telegram" />
      </FormGroup>
    </form>
  );
};
