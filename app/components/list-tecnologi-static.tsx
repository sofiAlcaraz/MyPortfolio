import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";

const listTecnologi = [
  { tecnologia: "JavaScript (React/Next)" },
  { tecnologia: "Java" },
  { tecnologia: "PHP (Laravel)" },
  { tecnologia: "Python" },
  { tecnologia: "HTML" },
  { tecnologia: "CSS" },
  { tecnologia: "React" },
  { tecnologia: "MySQL - MongoDB- Cassandra - PostgreSq" },
  { tecnologia: "Postman - JUnit" },
  { tecnologia: "Laravel" },
  { tecnologia: " GitLab - GitHub " },
  { tecnologia: "Linux" },
  { tecnologia: "Aws" },
  { tecnologia: "Node" },
  { tecnologia: "DBeaver" },
  { tecnologia: "Docker" },
  {
    tecnologia:
      " Metodologías Ágiles (Scrum) - Especificación y verificación de Software",
  },
];

export default function ListTecnologiStatic() {
  return (
    <Box>
      <List>
        {listTecnologi.map((option) => (
          <ListItem key={option.tecnologia}>
            <ListItemText secondary={option.tecnologia} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
