import React from "react";
import { useState, useEffect } from "react";

const ResponsiveVideo = () => {
  const [videoSource, setVideoSource] = useState("/rive/new5.mp4"); // Default video for desktop
  // console.log(videoSource, setVideoSource);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(window.innerWidth)
      if (screenWidth <= 768) {
        // Mobile size
        console.log("mobile");
        
        setVideoSource("/rive/mobile2.mp4");
      } else if (screenWidth <= 1024) {
        // Tablet size
        console.log("tab");

        setVideoSource("/rive/tablet.mp4");
      } else {
        // Desktop size
        console.log("desk");

        setVideoSource("/rive/new5.mp4");
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video element */}
      <video
        key={videoSource}  // 👈 Forces a re-render when the source changes
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ResponsiveVideo;