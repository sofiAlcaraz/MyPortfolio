"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita renderizar en SSR

  return (
    <Box sx={{ display: "flex", margin: "2rem", justifyContent: "center" }}>
      <Image
        src="/images/welcome-photo.jpg"
        width={500}
        height={500}
        alt="My photo"
      />
      <Box sx={{ display: "flex", margin: "8rem", flexDirection: "column" }}>
        <Typography variant="h1" suppressHydrationWarning>
          Bienvenido!
        </Typography>
        <Typography variant="h3" suppressHydrationWarning>
          Mi nombre es Sofia Alcaraz, desarrolladora Full Stack y estudiante de
          la carrera Licenciatura en Sistemas.
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
