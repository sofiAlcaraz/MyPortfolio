import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Madimi One", sans-serif',
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#8ecbae",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

export default theme;
