"use client";

import { Box, IconButton, Typography } from "@mui/material";
import RedesList from "../components/redes-list";
import ListTecnologiStatic from "../components/list-tecnologi-static";
import Experience from "../components/experience";
import Education from "../components/education";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useRouter } from "next/navigation"; //error de not mounted

const AboutMy = () => {
  const router = useRouter();

  const onClickUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // hace que el scroll sea animado
    });
  };
  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

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
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "40rem",
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
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
        }}
      >
        <IconButton
          color="primary"
          aria-label="up"
          size="large"
          onClick={onClickUp}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }}
      >
        <IconButton
          color="primary"
          aria-label="back"
          size="large"
          onClick={onClickBack}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutMy;
