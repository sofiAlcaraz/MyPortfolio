import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";

export default function ListTecnologi() {
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
          bgcolor: "red",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <JavascriptIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="javascript" secondary="3 años" />
        </ListItem>
      </List>
    </Box>
  );
}
