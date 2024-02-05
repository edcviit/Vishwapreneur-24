import Hero from "./components/homepage/Hero/Hero";
import Hero2 from "./components/homepage/Hero/Hero2";
import About from "./components/homepage/About/About";
// import Media from "./components/homepage/Media/media";
import Media2 from "./components/homepage/Media/media2";
import Contact from "./components/homepage/Contact/Contact";
import FAQ2 from "./components/homepage/FAQ/FAQ2";
// import FAQ from "./components/homepage/FAQ/FAQ";
import Footer from "./components/homepage/Footer/Footer";
// import Guest from "./components/homepage/Guests/Guest";
import Guest2 from "./components/homepage/Guests/Guest2";
// import Gallery from "./components/homepage/Gallery/Gallery";
import Gallery2 from "./components/homepage/Gallery/Gallery2";
import Reviews from "./components/homepage/Reviews/Reviews";
// import Reviews2 from "./components/homepage/Reviews/Reviews2";
import Testimonials from "./components/homepage/Reviews/Testimonials";
import Terms from "./components/homepage/Terms/Terms";
import SponsorsMedia from "./components/homepage/SponsorsMedia/SponsorsMedia";
// import NavBar from './components/homepage/Navbar/Navbar'
import Navbar from "./components/homepage/Navbar/Navbar";
import Gallery3 from "./components/homepage/Gallery/Gallery3";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    // window.scrollTo(0, 0);
    const fragment = window.location.hash.substring(1);
    console.log(fragment);
    const targetElement = fragment && document.getElementById(fragment);

    // If the element is found, scroll to it
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Hero2></Hero2>
      <About></About>
      <Guest2></Guest2>
      <Gallery3 />
      <SponsorsMedia></SponsorsMedia>
      <Reviews></Reviews>
      <Media2></Media2>
      <Terms></Terms>
      <FAQ2></FAQ2>
      <Contact></Contact>
    </div>
  );
}

export default Landing;
