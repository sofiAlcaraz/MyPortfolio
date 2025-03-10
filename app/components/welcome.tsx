"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Welcome = () => {
  return (
    <Box
      id="Bienvenidos"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <Image
        src="/images/welcome-photo.jpg"
        width={400}
        height={400}
        alt="My photo"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h4"> ¡Bienvenidos!</Typography>
        <Typography variant="h6">
          Me llamo Sofía Alcaraz, soy desarrolladora Full Stack y estudiante de
          Licenciatura en Sistemas. Este es mi primer portfolio, en desarrollo.
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
