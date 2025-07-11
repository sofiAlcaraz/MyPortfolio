"use client";

import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/about");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography className={"open-sans"} variant="h2">
            Sofía Alcaraz
          </Typography>
          <Typography className={"open-sans"} variant="h5">
            Desarrolladora Full-Stack y estudiante de la Licenciatura en
            Sistemas.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            endIcon={<EastIcon />}
            onClick={handleClick}
          >
            Conoceme!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
