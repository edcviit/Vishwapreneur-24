import { React, lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Landing";
import Footer from "./components/homepage/Footer/Footer";
import Navbar from "./components/homepage/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
const Guest3 = lazy(() => import("./components/homepage/Guests/Guest3"));
import Loader1 from "./components/Preloader/loader1";
import SponsorMedia1 from "./components/homepage/SponsorsMedia/SponserMedia1";
import Mediapartner1 from "./components/homepage/SponsorsMedia/MediaPartner1";
import TimelineMain from "./components/timeline/TimelineMain";
const Register = lazy(() =>
  import("./components/homepage/Registeration/Register")
);
const TeamPage = lazy(() =>
  import("./components/TeamPage/TeamPage")
);

import { tsParticles } from "tsparticles-engine";



function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const startTime = new Date().getTime();

    const onPageLoad = () => {
      const endTime = new Date().getTime();
      const loadingTime = endTime - startTime;

      console.log('page loaded');

      // Ensure the loader is visible for at least 3 seconds
      const minimumLoaderDuration = 3000;

      if (loadingTime < minimumLoaderDuration) {
        setTimeout(() => {
          setIsPageLoaded(true);
        }, minimumLoaderDuration - loadingTime);
      } else {
        setIsPageLoaded(true);
      }
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  /* tsParticles.load(@params); */

tsParticles.load({
    id: "tsparticles",
    options: {
        /* options here */
    },
    // url: "http://foo.bar/particles.js // this can be used as an alternative to options property
});

// after initialization this can be used.

/* tsParticles.setOnClickHandler(@callback); */

/* this will be fired from all particles loaded */

tsParticles.setOnClickHandler((event, particles) => {
    /* custom on click handler */
});

// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles.play();

// pause will stop the animations
particles.pause();

  return (
    
    <div>
      {isPageLoaded ? (
        <>
        <div id="tsparticles"></div>

<script src="tsparticles.engine.min.js"></script>
          <Navbar />
          {/* <div class="bg">
                <div class="star-field">
                  <div class="layer"></div>
                  <div class="layer"></div>
                  <div class="layer"></div>
                </div>
            </div> */}
          <Routes>
            <Route path="/#location" element={<Landing />} />
            <Route path="/" element={<Landing />} />
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/#location"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/guests"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Guest3 />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Register />
                </Suspense>
              }
            />
          

            <Route exact path="/sponsermedia" element={<SponsorMedia1 />} />
            <Route exact path="/mediapartner" element={<Mediapartner1 />} />

            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/timeline"  element={<TimelineMain/>}/>
          </Routes>
          <Footer />
        </>
      ) : (
        <Loader1 />
      )}
    </div>
  );
}

export default App;
