"use client";

import { Box, Typography } from "@mui/material";
import RedesList from "../components/redes-list";
import ListTecnologiStatic from "../components/list-tecnologi-static";
import Experience from "../components/experience";
import Education from "../components/education";

const AboutMy = () => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "1rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Experience />
        <Education />
      </Box>

      <Box>
        <Box>
          <Typography id="Tecnologias" variant="h5">
            Tecnologias
          </Typography>
          <ListTecnologiStatic />
        </Box>
        <Box>
          <Typography id="Redes" variant="h5">
            Redes
          </Typography>
          <RedesList />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMy;
