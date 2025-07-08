import { Box, Paper, Typography } from "@mui/material";

const Education = () => {
  return (
    <Box>
      <Typography id="Educación" variant="h6">
        Educación
      </Typography>
      <Paper sx={{ minWidth: "20rem", minHeight: "14rem" }}>
        <Typography gutterBottom variant="h6" component="h2">
          {
            "Universidad Nacional de General Sarmiento, Los Polvorines — Licenciatura en Sistemas"
          }
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {"MARZO DE 2019 - ACTUALIDAD"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {
            "Formación académica en materias clave del área de sistemas, incluyendo: Bases de Datos I y II, Programación I, II y III (con enfoques en Python, Java y estructuras de datos), Sistemas Operativos y RedesI I y II, Organización del Computador I y II, Especificación y Verificación de Software, e Ingeniería de Software I con orientación en gestión de proyectos."
          }
        </Typography>
      </Paper>
    </Box>
  );
};

export default Education;
