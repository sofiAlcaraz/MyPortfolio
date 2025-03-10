import Welcome from "./components/welcome";
import Navbar from "./components/nav-bar";
import AboutMy from "./components/about-my";
import Footer from "./components/footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box>
        <Navbar />
        <Box
          sx={{
            maxWidth: "65ch",
            margin: "auto",
            lineHeight: "1.6",
            marginTop: "5rem",
          }}
        >
          <Welcome />
          <AboutMy />
        </Box>
        <Footer />
      </Box>
    </main>
  );
}
