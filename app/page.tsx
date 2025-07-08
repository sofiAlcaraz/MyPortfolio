import Welcome from "./components/welcome";
import Navbar from "./components/nav-bar";
import AboutMy from "./about/page";
import Footer from "./components/footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      {/*<Navbar />
        <Box
          sx={{
            maxWidth: "65ch",
            margin: "auto",
            lineHeight: "1.6",
            marginTop: "5rem",
          }}
        >
          <AboutMy />
        </Box>
        <Footer />*/}
      <Welcome />

      <Footer />
    </main>
  );
}
