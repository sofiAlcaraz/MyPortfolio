"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";

const options = [
  "Sobre mi",
  "Experiencia",
  "Educación",
  "Tecnologias",
  "Redes",
  "Contacto",
];

const Navbar = () => {
  const scrollToSection = (option: string) => {
    const section = document.getElementById(option);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Alcaraz Sofia
          </Typography>

          <Box sx={{ display: { md: "flex" } }}>
            {options.map((option) => (
              <Button
                key={option}
                onClick={(e) => scrollToSection(option)}
                sx={{ color: "white" }}
              >
                {option}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
