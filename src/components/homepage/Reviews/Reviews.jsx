import React, { useState, useEffect } from 'react';
import './Reviews.css';

const REVIEWS = [
  // { id: 6, name: 'Alice', role: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?img=23', review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.` },
  { id: 0, name: 'Nikhil Sharma', role: 'Mumbiker Nikhil', avatar: 'https://res.cloudinary.com/da5mmxnn3/image/upload/v1647506687/Speakers/nikhil_qyuop3.jpg', review: `It was nice, it was fun. Lot of questions were asked and I loved to answer those questions.` },
  { id: 2, name: 'Prajakta Koli', role: 'Mostly Sane', avatar: 'https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510541/Imagescopy/koli_k4yfwv.jpg', review: `First of all, I love college events, I come for the energy, Ifeel like everyone's so mad. So thank you so much for having me and the team is very hardworking, very sweet.Thanks you for making the last minute arrangements.` },
  { id: 3, name: 'Gaurav Chaudhary', role: 'Technical Guruji', avatar: 'https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510544/Imagescopy/Gaurav_uxkq4d.jpg', review: `Yahan jo charm dikh raha hai jo fire hai matlab iss event ki jo complete concept hai wo unique hai. In TG style : Bahot hi badhiya event tha aur isme jo seati thi vo bhi kaafi achi thi kafi badhiya tha, bole toh full value for time.` },
  // { id: 13, name: 'Ethan', role: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?img=57', review: `I really congratulate the team for bringing together so many diverse students and so many good speakers I do hope that this goes further and many many students start a small business of their own to really get a taste of entrepreneurship for themselves!` },
  { id: 4, name: 'Rashmi Bansal', role: 'Non-fiction writer And Entrenpreneur', avatar: 'https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510552/Imagescopy/rashmi2_q0shh6.webp', review: `Plan, create, and explore seamlessly. This service made my creative dreams a reality. Smooth navigation, and the recommendations were spot on.` },
  // { id: 10, name: 'George', role: 'Software Developer', avatar: 'https://i.pravatar.cc/150?img=21', review: `A game-changer for organization. Tasks, calendars, notes – everything neatly synced. My life has never been this streamlined. Pure genius!` },
  // { id: 11, name: 'Hannah', role: 'Graphic Designer', avatar: 'https://i.pravatar.cc/150?img=18', review: `Drowning in a sea of creativity. The content here is a visual feast. An endless source of inspiration for my artistic endeavors.` },
  { id: 5, name: 'Zubin Sharma', role: 'Founder and CEO at Project Potential', avatar: 'https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510587/Imagescopy/zubin1_ydwtyq.webp', review: `I think the team has done an amazing job of using the spirit of entrepreneurship which is there in EDC to create a really really wonderful event for everyone involved from students to the panelists.` },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
        setTransitioning(false);
      }, 500); // Match duration with CSS transition time
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentReview = REVIEWS[currentIndex];

  return (
    <div className="reviews-container">
       <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Reviews</h1>
      <h1 className="reviews-title">A word from our Guests</h1>
      

      <div className={`review-card ${transitioning ? 'transitioning' : ''}`}>
        <blockquote className="review-text ${transitioning ? 'slide-up' : ''}    rounded-md">"{currentReview.review}"</blockquote>
        <div className="review-details">
          <img
            src={currentReview.avatar}
            alt={`${currentReview.name}'s avatar`}
            className={`review-avatar ${transitioning ? 'slide-up' : ''}`}
          />
          <div className={`review-info ${transitioning ? 'slide-up' : ''}`}>
            <p className="review-name">{currentReview.name}</p>
            <p className="review-role">{currentReview.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
