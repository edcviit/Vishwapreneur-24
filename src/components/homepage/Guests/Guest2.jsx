import React, { useEffect, useRef } from "react";
import "./Guest2.css";
import ScrollAnimation from "../../Animations/ScrollAnimation";
import { AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
// import ''

const Guest2 = () => {
  const navigate = useNavigate();
  const cardContainerRef = useRef(null);

  const guests = [
    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620798/vpGuests/vivekBhatia-removebg-preview_xjwyec.webp",
      name: "Mr. Vivek Bhatia",
      whoIsHe: "MD, Thyssenkrupp Industries",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620798/vpGuests/chinukala-removebg-preview_cb29sb.webp",
      name: "Mrs. Chinu Kala",
      whoIsHe: "Founder & CEO, Rubans Accessories",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620797/vpGuests/shreeman-removebg-preview_ubneft.webp",
      name: "Shreeman Legend",
      whoIsHe: "Content Creator",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620798/vpGuests/harshilKaria-removebg-preview_efmpa0.webp",
      name: "Mr. Harshil Karia",
      whoIsHe: "Founder, Schbang",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620798/vpGuests/ayushWadhwa-removebg-preview_or1zfx.webp",
      name: "Mr. Ayush Wadhwa",
      whoIsHe: "Founder, OWLED",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620797/vpGuests/mikhilInani-removebg-preview_hoxqzk.webp",
      name: "Mr. Mikhil Inani",
      whoIsHe: "CEO, Apollo Finvest, ",
      whoIsHe2: "Co-Founder, PharmEasy ",
      content: "",
    },
  ];

  return (
    <AnimatePresence>
      <div className="main-container pt-12" name="guest2" id="guest">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
          Guests
        </h1>

        <div className="card-container" ref={cardContainerRef}>
          {guests.map((guest, index) => (
            <div key={index} className="card">
              <ScrollAnimation>
                <div className="card-body cursor-default ">
                  {/* Add class called  si-buttons-scifi to card-body*/}
                  {/* <shine className="shine"></shine> */}
                  <div className="card-images ">
                    {/* <img src={img} alt="card background" className="card-bg" /> */}
                    <img
                      src={guest.img}
                      alt="card figure"
                      className="card-figure border-r-4 glass-bg-01"
                      style={{ borderRadius: "50%", height: "13rem" }}
                    />
                  </div>
                  <div className="card-info">
                    <h2 className="card-name">{guest.name}</h2>
                    <p className="card-description" style={{ color: "white" }}>
                      {guest.whoIsHe}
                      <br />
                      {guest.whoIsHe2}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            navigate("/guests");
          }}
          class="space-button"
          style={{ marginTop: "40px", borderColor: "#7c008d" }}
        >
          Previous Guests
        </button>
      </div>
    </AnimatePresence>
  );
};

export default Guest2;
