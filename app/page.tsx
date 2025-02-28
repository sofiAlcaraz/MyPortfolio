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
        <Box sx={{ padding: "4rem" }}>
          <Welcome />
          <AboutMy />
        </Box>
        <Footer />
      </Box>
    </main>
  );
}
