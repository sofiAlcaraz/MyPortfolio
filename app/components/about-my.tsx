"use client";

import { Box, Typography } from "@mui/material";
import CardInfo from "./card-info";
import ListTecnologi from "./list-tecnologi";
import RedesList from "./redes-list";

const AboutMy = () => {
  return (
    <Box>
      <Typography variant="h4">Sobre mi</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5">Experiencia</Typography>
        <CardInfo></CardInfo>
        <Typography variant="h5">Educación</Typography>
        <CardInfo></CardInfo>
        <Typography variant="h5">Tecnologias</Typography>
        <ListTecnologi />
        <Typography variant="h5">Redes</Typography>
        <RedesList />
      </Box>
    </Box>
  );
};

export default AboutMy;
