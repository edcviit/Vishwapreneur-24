import { React, lazy, Suspense } from "react";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Landing from "./Landing";
// import HaveYouPaid from './components/FormFlow/HaveYouPaid';
// import Login from './components/SigninUp/Login';
// import Signup from './components/SigninUp/Signup';
// import SignupPage from './components/SigninUp/SignupPage';
import Footer from "./components/homepage/Footer/Footer";
import Navbar from "./components/homepage/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./components/FormFlow/Registration";
import RegistrationSuccess from "./components/FormFlow/Success";
import Guest3 from "./components/homepage/Guests/Guest3";
import Register from "./components/homepage/Registeration/Register";
import TeamPage from "./components/TeamPage/TeamPage";
// import Navbar from "./components/homepage/Navbar/Navbar";
const SponsorsAll = lazy(() =>
  import("./components/SponsorsPartners/SponsorsBig")
);
const Guest = lazy(() => import("./components/guests/GuestInternal"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Gallery = lazy(() => import("./components/gallery/Gallery"));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/#location" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route
          path="/sponsors"
          element={
            <Suspense fallback={<>loading</>}>
              <SponsorsAll />
            </Suspense>
          }
        />
        <Route
          path="/guests"
          element={
            <Suspense fallback={<>loading</>}>
              <Guest />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<>loading</>}>
              <About />
            </Suspense>
          }
        />
        {/* <Route exact path="/team" element = {<TeamPage />} /> */}
        <Route exact path="/new-guest" element={<Guest3 />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<>loading</>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<>loading</>}>
              <Gallery />
            </Suspense>
          }
        />

        {/* Form Flow */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route exact path="/How_to_register" element={<Register />} />
        <Route path="/RegistrationSuccess" element={<RegistrationSuccess />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
