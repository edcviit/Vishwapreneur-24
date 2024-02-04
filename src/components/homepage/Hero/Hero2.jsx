// import React, { useRef, useLayoutEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "./utils";
// import { useEffect, useState } from 'react';
// import { AnimatePresence, motion, useAnimation } from 'framer-motion';
// import imagel from '../../../assets/GroupL.png'
// import imager from '../../../assets/GroupR.png'
// import vplog from '../../../assets/vp_hpe1ut.svg'

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const controlsLeft = useAnimation();
//   const controlsRight = useAnimation();
//   const controlsZoom = useAnimation();

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useLayoutEffect(() => {
    // controlsLeft.start({
    //   x: -scrollY * 10,
    //   opacity: 1 - (scrollY / 100),
    //   scale: (1 + scrollY / 100),
    //   transition: { type: 'spring', stiffness: 20, damping: 10 }
    // });
    // controlsRight.start({
    //   x: scrollY * 10,
    //   opacity: 1 - (scrollY / 100),
    //   scale: (1 + scrollY / 100),
    //   transition: { type: 'spring', stiffness: 20, damping: 10 }
    // });
    // controlsZoom.start({
    //   scale: 1 + (scrollY / 500),
    //   opacity: 1 - (scrollY / 250),
    //   transition: { type: 'spring', stiffness: 20, damping: 10, },
    // });
//     controlsLeft.start({
//       x: -scrollY * 10,
//       opacity: 1 - (scrollY / 100),
//       scale: (1 + scrollY / 100),
//       transition: { type: 'spring', stiffness: 30, damping: 50 }
//     });
//     controlsRight.start({
//       x: scrollY * 10,
//       opacity: 1 - (scrollY / 100),
//       scale: (1 + scrollY / 100),
//       transition: { type: 'spring', stiffness: 30, damping: 50 }
//     });
//     controlsZoom.start({
//       scale: 1 + (scrollY / 500),
//       opacity: 1 - (scrollY / 250),
//       transition: { type: 'spring', stiffness: 30, damping: 50 },
//     });
//   }, [scrollY, controlsLeft, controlsRight, controlsZoom]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div id="Home">
//       <div className="relative  w-screen h-screen flex items-center justify-center overflow-hidden place-content-center">
//         <AnimatePresence>
//         <Canvas
//           camera={{
//             position: [0, -27.5, -25],
//             zoom: 3,
//             near: 1,
//             far: 100,
//           }}
//           style={{ height: "100vh" }}
//           className="bg-black"
//         >
//           <OrbitControls
//             enableZoom={false}
//             enablePan={false}
//             enableRotate={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//           <directionalLight intensity={1.5} position={[10, 10, 10]} />
//           <pointLight position={[-30, 0, -30]} power={10.0} />
//           <PointCircle />
//         </Canvas>

//         <div className="absolute flex flex-row top-12 place-content-center">
//           <motion.div
//             className="z-100 w-1/2 h-full"
//             animate={controlsLeft}
//           >
//             <img src={imagel} alt="" />
//           </motion.div>

//           <motion.div
//             className="z-100 w-1/2 h-full "
//             animate={controlsRight}
//           >
//             <img src={imager} alt="" />
//           </motion.div>
//         </div>

//         <motion.div className='absolute z-10 top-[15rem]'>
//           <motion.img src={vplog} animate={controlsZoom} className='h-96 opacity-100' alt="" />
//         </motion.div>
//       </AnimatePresence>
//       </div>
//     </div>
//   );
// };


import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "./utils";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import imagel from '../../../assets/GroupL.png'
import imager from '../../../assets/GroupR.png'
import vplog from '../../../assets/vp_hpe1ut.svg'
import './Hero.css'
// import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import Button2 from "../Button2/Btn"


const Hero = () => {

  return (
    <div id="Home">
      <div className="relative  w-screen h-screen flex items-center justify-center overflow-hidden place-content-center">
        
        <AnimatePresence>
        <div class="bg">
                <div class="star-field">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                </div>
        </div>
          <motion.div className='absolute z-10 px-3'
        //   <motion.div className='absolute z-10 top-[15rem]  transform -translate-x-1/2'
            // initial={{ opacity: 0, scale: 0.5 }}
            // // animate={controlsZoom}
            // animate={{opacity:1, scale: 1 }}
            // exit={{ opacity: 0, scale: 0.5 }}
          >

            <motion.img src={vplog} className='h-96 opacity-100' alt="" />
          </motion.div>
        </AnimatePresence>
        <div className="my_register_button">
          <Button2></Button2>
          <p id="tutorial" style={{ color: 'white', paddingTop: "30px" }}>
            <Link to="/How_to_register" style={{ textDecoration: 'none', color: 'white' }}>
                How to register?
            </Link>
          </p>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Hero;
