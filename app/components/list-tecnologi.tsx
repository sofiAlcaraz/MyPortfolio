import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
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
