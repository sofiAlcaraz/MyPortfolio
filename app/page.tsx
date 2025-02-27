import Welcome from "./components/welcome";
import Navbar from "./components/nav-bar";
import AboutMy from "./components/about-my";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Navbar />
          <Welcome />
          <AboutMy />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
