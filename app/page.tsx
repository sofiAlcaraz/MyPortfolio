import Welcome from "./components/welcome";
import Navbar from "./components/nav-bar";
import AboutMy from "./about/page";
import Footer from "./components/footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Footer />
    </main>
  );
}
