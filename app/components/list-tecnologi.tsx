import { Box, Button, List, ListItem } from "@mui/material";
import React, { useState } from "react";

const listTecnologi = [
  { tecnologia: "JavaScript", anios: "4 años" },
  { tecnologia: "Java", anios: "3 años" },
  { tecnologia: "Python", anios: "1 año" },
  { tecnologia: "HTML", anios: "4 años" },
  { tecnologia: "CSS", anios: "4 años" },
  { tecnologia: "React", anios: "4 años" },
  { tecnologia: "MySQL", anios: "4 años" },
  { tecnologia: "Postman", anios: "6 años" },
  { tecnologia: "Laravel", anios: "4 años" },
  { tecnologia: "Git", anios: "6 años" },
];

export default function ListTecnologi() {
  const [optionClicked, setOptionCliked] = useState<string[]>([]);

  const OnClickOption = (option: string) => {
    setOptionCliked((prevOptions) => {
      if (prevOptions.includes(option)) {
        // Si ya está, lo saco
        return prevOptions.filter((o) => o !== option);
      } else {
        // Si no está, lo agrego
        return [...prevOptions, option];
      }
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
      >
        {listTecnologi.map((option) => (
          <ListItem key={option.tecnologia}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => OnClickOption(option.tecnologia)}
            >
              {optionClicked.includes(option.tecnologia)
                ? option.anios
                : option.tecnologia}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
