import Hero from "./components/homepage/Hero/Hero";
import Hero2 from "./components/homepage/Hero/Hero2";
import Hero3 from "./components/homepage/Hero/Hero3";
import Hero4 from "./components/homepage/Hero/Hero4";
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
import { useEffect,useState } from "react";
import ParticleButton from "./components/Button/Btn";

function Landing() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Add event listener to handle window resize
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust threshold as needed
    };

    window.addEventListener("resize", handleResize);

    // Check initial viewport width
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? <Hero4 /> : <Hero3 />}
      
      {!isMobileView && <div className="bg-black w-screen h-screen"></div>}
      <div className="flex justify-center items-center" style={{ marginTop: '50px' }}>
  <ParticleButton></ParticleButton>
</div>


         {/* <ParticleButton></ParticleButton> */}
      {/* <Hero2></Hero2> */}
      {/* <About className="z-100"></About> */}
      {/* <div class="my-6100 ..."></div> */}
      
      {/* <About className='abouts my-10rem'></About> */}
      {/* <Guest2></Guest2> */}
      {/* <div class = 'my-0'>
         <Gallery3/>

      </div> */}
      <div className="mt-0">

         <About></About>
      </div>
      <div className="mt-0">

      <Guest2></Guest2>
         
      </div>

      <Gallery3/>
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
