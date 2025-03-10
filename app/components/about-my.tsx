"use client";

import { Box, Paper, Typography } from "@mui/material";
import ListTecnologi from "./list-tecnologi";
import RedesList from "./redes-list";

const AboutMy = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography id="Experiencia" variant="h5">
          Experiencia
        </Typography>
        <Paper sx={{}}>
          <Typography gutterBottom variant="h5" component="h2">
            {"Ticmas, Buenos Aires— Desarrolladora FullStack"}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {"MARZO DE 2022 - JULIO DE 2024"}
          </Typography>
          <ol>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Desarrollo de nuevas funcionalidades en el sistema de biblioteca
                digital "Bidi".
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Participación activa en el desarrollo full stack, colaborando
                tanto en frontend (React) como backend (Node.js, PHP con
                Laravel).
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Resolución de bugs y mejora continua de productos.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Integración con APIs y optimización de servicios.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Trabajo colaborativo con equipos de diseño y producto, aplicando
                metodologías ágiles.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Contribución en la documentación técnica de procesos y
                funcionalidades.
              </Typography>
            </li>
          </ol>
        </Paper>

        <Typography id="Educación" variant="h5">
          Educación
        </Typography>
        <Paper sx={{}}>
          <Typography gutterBottom variant="h5" component="h2">
            {
              "Universidad Nacional de General Sarmiento, Los Polvorines — Licenciatura en Sistemas"
            }
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {"MARZO DE 2019 - ACTUALIDAD"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Actualmente me encuentro cursando el tercer año de la carrera."}
          </Typography>
        </Paper>
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
