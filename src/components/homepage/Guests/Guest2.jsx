import React, {  useRef } from "react";
import "./Guest2.css";
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
      name: "Chinu Kala",
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
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108956/Guests/new17/Screenshot__232_-removebg-preview_j4apni.webp",
      name: "V Krishnan",
      whoIsHe: "Co-founder &",
      whoIsHe2: "Group President, JustDial ",
      content: "",
    },

    {
      img: "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707620797/vpGuests/mikhilInani-removebg-preview_hoxqzk.webp",
      name: "Mikhil Inani",
      whoIsHe: "CEO, Apollo Finvest, ",
      whoIsHe2: "Co-Founder, PharmEasy ",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108954/Guests/new17/paritosh_anand_1-removebg-preview_a1tpkn.webp",
      name: "Paritosh Anand",
      whoIsHe: "Founder, WeSmile Media",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108952/Guests/new17/2f2c895f-8212-4b11-af81-2ffda04b5c7e_1-removebg-preview_uaer5g.webp",
      name: "Abhishek Kar",
      whoIsHe: "Content Creator",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108952/Guests/new17/image_133-removebg-preview_q2keek.webp",
      name: "Mahak Garg",
      whoIsHe: "Director, Masters Union",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708081678/Guests/image_132-removebg-preview_eozu6g.webp",
      name: "Ankit Madaan",
      whoIsHe: "Founder, CollabX",
      whoIsHe2: "Founder, Hasley India",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108953/Guests/new17/image_134-removebg-preview_gdbd3u.webp",
      name: "Rajesh Desai",

      whoIsHe: "CoFounder, CEO &",
      whoIsHe2: "MD, Lyra Network Asia",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108974/Guests/new17/channels4_profile_1-removebg-preview_fk8fno.webp",
      name: "Atharva Sudame",

      whoIsHe: "Content Creator",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108957/Guests/new17/channels4_profile__1__1-removebg-preview_ptfihq.webp",
      name: "Bhanu Pathak",

      whoIsHe: "Content Creator",
      content: "",
    },
  ];

  return (
      <div className="main-container pt-12" name="guest2" id="guest">
        <div class="nine">
          <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-16">
            Guests
          </h1>
        </div>

        <div className="card-container" ref={cardContainerRef}>
          {guests.map((guest, index) => (
            <div key={index} className="card">
             
                <div className="card-body pt-3 cursor-default ">
                  {/* Add class called  si-buttons-scifi to card-body*/}
                  {/* <shine className="shine"></shine> */}
                  <div className="card-images ">
                    {/* <img src={img} alt="card background" className="card-bg" /> */}
                    <img
                      src={guest.img}
                      alt="card figure"
                      className="card-figure border-r-4 glass-bg-01"
                      style={{ borderRadius: "50%", height: "12rem" }}
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
  );
};

export default Guest2;
