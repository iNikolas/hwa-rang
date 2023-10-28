import {
  Card,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormGroup,
  Checkbox,
} from "@mui/material";
import React from "react";
import { GradientText } from ".";

export const Form: React.FC = () => {
  const [services, setServices] = React.useState("");
  const [halls, setHalls] = React.useState("");

  const servicesSelect = (event: SelectChangeEvent) => {
    setServices(event.target.value);
  };
  const hallsSelect = (event: SelectChangeEvent) => {
    setHalls(event.target.value);
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GradientText>Запишись на тренування</GradientText>
      <FormControl>
        <TextField
          id="name"
          label="Введіть ваше ім’я"
          variant="standard"
          sx={{ marginBottom: 5 }}
        />
      </FormControl>
      <FormControl variant="standard" sx={{ marginBottom: 5 }}>
        <InputLabel id="services-select">Послуги</InputLabel>
        <Select
          labelId="services-select"
          id="services-select"
          value={services}
          onChange={servicesSelect}
          label="Послуги"
        >
          <MenuItem value={"Групові тренування"}>Групові тренування</MenuItem>
          <MenuItem value={"Персональні тренування"}>
            Персональні тренування
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ marginBottom: 5 }}>
        <InputLabel id="halls-select">Зал</InputLabel>
        <Select
          labelId="halls-select"
          id="halls-select"
          value={halls}
          onChange={hallsSelect}
          label="Зал"
        >
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

      <FormLabel id="row-radio-buttons-group-label">
        Оберіть хто буде тренуватись
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginBottom: 5 }}
      >
        <FormControlLabel
          value="Дорослий"
          control={<Radio />}
          label="Дорослий"
        />
        <FormControlLabel value="Дитина" control={<Radio />} label="Дитина" />
      </RadioGroup>
      <FormControl>
        <TextField
          id="age"
          label="Вкажіть ваш вік"
          variant="standard"
          sx={{ marginBottom: 5 }}
        />
      </FormControl>
      <FormGroup>
        <Typography variant="h6" color="blue-gray">
          Оберіть спосіб зв’язку
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Мобільний телефон" />
        <FormControlLabel control={<Checkbox />} label="Viber" />
        <FormControlLabel control={<Checkbox />} label="Telegram" />
      </FormGroup>
    </Card>
  );
};
