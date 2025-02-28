"use client";

import { Box, Typography } from "@mui/material";
import CardInfo from "./card-info";
import ListTecnologi from "./list-tecnologi";
import RedesList from "./redes-list";

const AboutMy = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "4rem" }}>
      <Typography id="Sobre mi" variant="h4">
        Sobre mi ...
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          gap: "4rem",
        }}
      >
        <Typography id="Experiencia" variant="h5">
          Experiencia
        </Typography>
        <CardInfo
          image="/images/trabajadora.jpg"
          alt="Trabajadora"
          titleImage="Yo trabajando"
          titleCard=" Ticmas, Buenos Aires— Desarrolladora FullStack"
          textSecondaryCard="     MARZO DE 2022 - JULIO DE 2024"
          bodiCard=" Desarrolladora FullStack de la biblioteca “bidi” de ticmas, tuve
              tareas tanto front como back en distintos proyectos de la
              empresas, aprendi distintos lenguajes, algunos mas que otros."
          buttonPage=""
        ></CardInfo>
        <Typography id="Educación" variant="h5">
          Educación
        </Typography>
        <CardInfo
          image="/images/trabajadora.jpg"
          alt="Estudiante"
          titleImage="Yo Estudiando"
          titleCard="Universidad Nacional de General Sarmiento, Los Polvorines — Licenciatura en Sistemas y Tecnicatura en Informática."
          textSecondaryCard="MARZO DE 2019 - ACTUALIDAD"
          bodiCard="Actualmente me encuentro cursando el tercer año de la carrera."
          buttonPage=""
        ></CardInfo>
        <Typography id="Tecnologias" variant="h5">
          Tecnologias
        </Typography>
        <ListTecnologi />
        <Typography id="Redes" variant="h5">
          Redes
        </Typography>
        <RedesList />
      </Box>
    </Box>
  );
};

export default AboutMy;
