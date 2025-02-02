import React, {  useRef } from "react";
import "./Guest2.css";
import { Link, useNavigate } from "react-router-dom";
// import ''


const Guest2 = () => {
  const navigate = useNavigate();
  const cardContainerRef = useRef(null);

  const guests = [
    {
     img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521064/vp24/wagqwier1zn6yoqprutd.png",
      name: "Rajan Chopra",
      whoIsHe: "Quantum Computing Educator",
      content: "Chancellor of Mahatma Gandhi University, Meghalaya, and an educationist with a focus on open and distance learning.",
    },
    {
      img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521064/vp24/ldpxlybsqdrlxcmefv5r.jpg",
      name: "Shivangi Narula",
      whoIsHe: "Founder, Skilldify",
      content: "Founder of Skilldify, a corporate training company specializing in soft skills and behavioral training.",
    },
    {
      img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521056/vp24/ygu3vzs11fnqqju081wd.jpg",
      name: "Mr. Vinayak Pai",
      whoIsHe: "Managing Director & CEO,",
      whoIsHe2: "Tata Projects",
      content: "Managing Director and CEO of Tata Projects, an infrastructure company in India.",
    },
    {
      img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521245/vp24/wduvzxijqyor8ebde1ij.jpg",
      name: "Dr. Sanjay Arora",
      whoIsHe: "Founder, Shell Ad Inc",
      content: "Founder and CEO of Shells Advertising Inc., a leading advertising agency in Nagpur, India.",
    },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_548_odb2yh.png",
    //   name: "Mikhil Inani",
    //   whoIsHe: "CEO, Apollo Finvest, ",
    //   whoIsHe2: "Co-Founder, PharmEasy ",
    //   content: "",
    // },
    {
      img: "https://res.cloudinary.com/edcviitcom/image/upload/v1738521056/vp24/zjrunngd2dkenpft7joy.jpg",
      name: "Raj Vikramaditya (Striver)",
      whoIsHe: "Founder & Educator, TakeUForward",
      content: "Software engineer at Google and founder of takeUforward, a platform offering coding tutorials.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_550_ba1rla.png",
      name: "Shreeman Legend",
      whoIsHe: "Content Creator",
      content: "Shreeman Legend, whose real name is Siddhant Joshi, is a well-known gaming content creator and live streamer from Pune, Maharashtra.",
    },

    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899814/vp24%20guest%20app/Instagram_post_-_556_eyereh.png",
      name: "Shreyans Sancheti",
      whoIsHe: "Co-Founder, BlueLearn",
      content: "Shreyans Sancheti a BITS Pilani Goa graduate, co-founded 2 startups, and have experience in the ed tech industry.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899814/vp24%20guest%20app/Instagram_post_-_555_suo5z1.png",
      name: "Harish Uthayakumar",
      whoIsHe: "Co-Founder, Bluelearn",
      content: "Building BlueLearn and helping tier-2,3 college students get benefits of top colleges.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709103711/Instagram_post_-_559_2_1_lne0j4.png",
      name: "Sanjay Sethi",
      whoIsHe: "CEO & Founder, ShopClues.com",
      content: "In 2011, he co-founded ShopClues, a Gurgaon-based online marketplace for unbranded goods.",
    },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709112488/Instagram_post_-_559_4_1_szabnr.png",
    //   name: "Jay Desai",
    //   whoIsHe: "Finance content creator",
    //   content: "",
    // },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_553_sp9ofh.png",
      name: "Abhishek Kar",
      whoIsHe: "Finance Influencer",
      content: "Abhishek Kar has trained more than 15000 students so far with his training initiatives.",
    },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_545_mlsmmb.png",
    //   name: "Nikhil Malhotra",
    //   whoIsHe: "CIO, Tech Mahindra",
    //   whoIsHe2: "Creator, Maker's lab",
    //   // whoIsHe2: "Founder, Hasley India",
    //   content: "",
    // },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_543_r2vxei.png",
      name: "Sushant Bindal",
      whoIsHe: "Founder, Money Monitor",
      // whoIsHe2: "Founder, Hasley India",
      content: "He is a stock market trainer and runs an Investment Advisory firm and two other companies offering real estate and corporate lending services.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_546_xzhqnn.png",
      name: "Kushal Lodha",
      whoIsHe: "Founder, KAGR",
      // whoIsHe2: "Founder, Hasley India",
      content: "Kushal Lodha is the founder of KAGR, an Education platform in Finance Upskilling. the Venture Capital arm of Aditya Birla Group.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_547_v9atfj.png",
      name: "Mahak Garg",
      whoIsHe: "Director, Masters Union",
      content: "Education expert. PnL head. Entrepreneur. Managed 300+ member teams. B2B and B2C Sales, pitch, community led sales growth. Company culture.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_549_b0q9dq.png",
      name: "Atharva Sudame",
      whoIsHe: "Content Creator",
      content: "Famous Content creator in Pune,Maharahtra. Known for its series 'Sthal Pune'.",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709108299/Instagram_post_-_559_3_1_qg6fji.png",
      name: "RJ Soham",
      whoIsHe: "Content Creator",
      content: "He is the founder of Cryptexa Analytics, a dynamic digital marketing agency specializing in marketing strategy, AI integration, brand development, and content production.",
    },

    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108953/Guests/new17/image_134-removebg-preview_gdbd3u.webp",
    //   name: "Rajesh Desai",

    //   whoIsHe: "CoFounder, CEO &",
    //   whoIsHe2: "MD, Lyra Network Asia",
    //   content: "",
    // },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108957/Guests/new17/channels4_profile__1__1-removebg-preview_ptfihq.webp",
    //   name: "Bhanu Pathak",

    //   whoIsHe: "Content Creator",
    //   content: "",
    // },
  ];
  return (
    <div className="main-container pt-12" name="guest2" id="guest">
      <div className="nine">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-2xl font-bold text-center py-8 mb-5">
          Guests
        </h1>
      </div>
  
      <div className="card-container">
        {guests.map((guest, index) => (
          <div key={index} className="card" style={{ background: "#1e1e2f" }}>
            <div className="card-body pt-3 cursor-default">
              <div className="card-images">
                <img
                  src={guest.img}
                  alt="card figure"
                  className="card-figure"
                />
              </div>
              <div className="card-info">
                <h2 className="card-name">{guest.name}</h2>
                <p className="card-description" style={{ color: "white" }}>
                  {guest.whoIsHe}
                  <br/>
                  {guest.whoIsHe2}
                </p>
                <p className="card-content" style={{ color: "#aaa", marginTop: "10px" }}>
                  {guest.content}
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

export default Guest2;
