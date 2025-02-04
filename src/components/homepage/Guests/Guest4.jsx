import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Guest4.css";

const Guest4 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const guests = [
    {
      img: "/image/Rajan Chopra.png", // Update with actual image path
      name: "RAJAN CHOPRA",
      whoIsHe: "Quantum Computing",
      whoIsHe2: "Educator",
    },
    {
        img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521064/vp24/ldpxlybsqdrlxcmefv5r.jpg",
        name: "Shivangi Narula",
        whoIsHe: "Founder, Skilldify",
    },
    {
        img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521056/vp24/ygu3vzs11fnqqju081wd.jpg",
        name: "Mr. Vinayak Pai",
        whoIsHe: "Managing Director & CEO,",
        whoIsHe2: "Tata Projects",
    },
    {
        img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521245/vp24/wduvzxijqyor8ebde1ij.jpg",
        name: "Dr. Sanjay Arora",
        whoIsHe: "Founder, Shell Ad Inc",
    },
    {
        img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521056/vp24/zjrunngd2dkenpft7joy.jpg",
        name: "Raj Vikramaditya (Striver)",
        whoIsHe: "Founder & Educator, TakeUForward",
    },

    {
      img: "/image/Upcoming.webp", // Update with actual image path
      name: "Coming Soon",
    //   whoIsHe: "Artificial Intelligence",
    //   whoIsHe2: "Researcher",
    },
    {
        img: "/image/Upcoming.webp", // Update with actual image path
        name: "Coming Soon",
        // whoIsHe: "Artificial Intelligence",
        // whoIsHe2: "Researcher",
    },
    {
        img: "/image/Upcoming.webp", // Update with actual image path
        name: "Coming Soon",
        // whoIsHe: "Artificial Intelligence",
        // whoIsHe2: "Researcher",
    },
    {
        img: "/image/Upcoming.webp", // Update with actual image path
        name: "Coming Soon",
        // whoIsHe: "Artificial Intelligence",
        // whoIsHe2: "Researcher",
    },
    {
        img: "/image/Upcoming.webp", // Update with actual image path
        name: "Coming Soon",
        // whoIsHe: "Artificial Intelligence",
        // whoIsHe2: "Researcher",
    },
    {
        img: "/image/Upcoming.webp", // Update with actual image path
        name: "Coming Soon",
        // whoIsHe: "Artificial Intelligence",
        // whoIsHe2: "Researcher",
    },
    {
        img: "/image/Upcoming.webp", // Update with actual image path
        name: "Coming Soon",
        // whoIsHe: "Artificial Intelligence",
        // whoIsHe2: "Researcher",
    },
    // Add more guests as needed
  ];

  return (
    <div className="main-container pt-12" name="guest2" id="guest">
      <div className="nine">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-2xl font-bold text-center py-8 mb-5">
          Guests
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {guests.map((guest, index) => (
          <div
            key={index}
            className={`cardG ${hoveredCard === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="cardG-body">
              <div className="cardG-images">
                <img src={guest.img} alt="cardG figure" className="cardG-figure" />
                <div className="glowing-border"></div>
              </div>
              <div className={`cardG-info ${hoveredCard === index ? "show" : ""}`}>
                <h2 className="cardG-name">{guest.name}</h2>
                <p className="cardG-description">
                  {guest.whoIsHe}
                  <br />
                  {guest.whoIsHe2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/guests");
        }}
        className="space-button"
        style={{ marginTop: "40px", borderColor: "#7c008d" }}
      >
        Previous Guests
      </button>
    </div>
  );
};

export default Guest4;
