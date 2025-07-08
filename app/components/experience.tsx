import { Box, Paper, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box>
      <Typography id="Experiencia" variant="h6">
        Experiencia
      </Typography>
      <Paper sx={{ minWidth: "20rem", minHeight: "14rem" }}>
        <Typography gutterBottom variant="h6" component="h2">
          {"Ticmas, Buenos Aires— Desarrolladora FullStack"}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {"MARZO DE 2022 - JULIO DE 2024"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Participación activa en el mantenimiento de una biblioteca digital,
          colaborando en tareas de frontend (JavaScript, React, ReactAdmin) y
          backend (PHP y Laravel), con gestión de base de datos (MySQL). Trabajo
          conjunto con los equipos de diseño y producto, aplicando metodologías
          ágiles (Scrum)
        </Typography>
      </Paper>
    </Box>
  );
};

export default Experience;
