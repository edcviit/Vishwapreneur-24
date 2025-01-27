
// import React, { useEffect } from 'react';
// import { useRive, useStateMachineInput } from 'rive-react';
// import "./Hero5.css";

// function Hero5() {
//   const STATE_MACHINE_NAME = "State Machine 1";
//   const INPUT_NAME = "Switch";

//   const { rive, RiveComponent } = useRive({
//     src: "/rive/vp.riv",
//     stateMachines: STATE_MACHINE_NAME,
//     autoplay: true,
//   });

//   const onLoadFunction = useStateMachineInput(
//     rive,
//     STATE_MACHINE_NAME,
//     INPUT_NAME
//   );

//   useEffect(() => {
//     if (onLoadFunction) {
//       onLoadFunction.fire(); 
//     }
//   }, [onLoadFunction]);

//   return (
//     <div>
//       <h1 className="H1">Rive React Animation</h1>
//       <RiveComponent />
//     </div>
//   );
// }

// export default Hero5;












// import { useRive } from '@rive-app/react-canvas';

// export default function Hero5() {
//   const { rive, RiveComponent } = useRive({
//     src: 'vp.riv',
//     stateMachines: "bumpy",
//     autoplay: false,
//   });

//   return (
//     <RiveComponent
//       onMouseEnter={() => rive && rive.play()}
//       onMouseLeave={() => rive && rive.pause()}
//     />
//   );
// }





















import React from "react";
import { useState, useEffect } from "react";

const ResponsiveVideo = () => {
  const [videoSource, setVideoSource] = useState("/rive/new5.mp4"); // Default video for desktop

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        // Mobile size
        setVideoSource("/rive/mobile.mp4");
      } else if (screenWidth <= 1024) {
        // Tablet size
        setVideoSource("/rive/tablet.mp4");
      } else {
        // Desktop size
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




