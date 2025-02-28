"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const Welcome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        margin: "2rem",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <Image
        src="/images/welcome-photo.jpg"
        width={500}
        height={500}
        alt="My photo"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h1">Bienvenido!</Typography>
        <Typography variant="h3">
          Mi nombre es Sofia Alcaraz, desarrolladora Full Stack y estudiante de
          la carrera Licenciatura en Sistemas.
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
