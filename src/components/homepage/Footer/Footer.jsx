import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'
import image2 from '../../../assets/footer 1.png'
import "@fortawesome/fontawesome-free/css/all.css";
import { Center } from '@react-three/drei';

const Footer = () => {
  return (
    

    <div
      className={` relative footer-section  mt-24`}
      // className={` relative footer-section border-[1px] border-slate-300   `}
    >
     
      {/* <div className='bg-gradient-to-b from-black via-transperent to-white w-fit h-fit w-'> */}
      {/* <img src={image2} className=' absolute  bottom-0 h-[39rem] md:h-[50rem]  object-cover md:object-fill md:w-[100vw]  opacity-85' style={{zIndex:"-1",webkitMaskImage: "WebkitGradient(linear, top,  bottom,from(rgba(0,0,0,0)) to(rgba(0,0,0,1)))",backgroundImage: "linear-gradient(to bottom,#000000,#000000, #6766b4,#bb57a1)" }} alt="" /> */}
      {/* <img src={image2} className=' absolute -z-10 bottom-0 h-[39rem] md:h-[50rem] w-[100vw] ' style={{ webkitMaskImage: "-webkit-gradient(linear, top,  bottom,from(rgba(0,0,0,0)),via(rgba(0,0,0,0.5)), to(rgba(0,0,0,1)))"}} alt="" /> */}
      {/* </div> */}
      
      <footer className=" text-white py-12 border rounded-t-3xl backdrop-blur-sm border-white p-2">
        {/* <div className={`z-50    `} style={{ backgroundImage: `url(${image})`, width:screen, height:"20rem"}}></div> */}
        <div className={`w-full h-full  relative m-15 `}>
          <div className="container mx-auto flex flex-col items-center">
            {/* Grid layout and content */}
              <div className="mx-auto flex flex-col items-center flex-wrap">
      
                 <img src="https://www.knowafest.com/files/uploads/Asset%2013-2023012705.png" alt="VIshwapreneur-24" className="VP-img" />
                  {/* <p>The Entrepreneurship Development Cell (EDC) is a student-run organisation that promotes and nurtures an entrepreneurial spirit among students. It serves as a platform for aspiring entrepreneurs to explore and develop their business ideas, gain practical skills, and connect with industry experts and mentors.</p>  */}
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-0\.5">
            
            <div className="text-center ml-2 md:text-left lg:text-left xl:text-left">
                <p
                  className="font-bold mb-2 text-lg hover:underline"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #bb57a1, #6766b4)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Info
                </p>
                
                <p>The Entrepreneurship Development Cell (EDC) is a student-run organisation that promotes and nurtures an entrepreneurial spirit among students.</p>
              </div>

              {/* Quick Links Section */}
              
              <div className="text-center col-span-2 sm:col-span-1 transition  md:ml-1 lg:md-2 duration-300">
                <p
                  className="font-bold mb-2 text-lg hover:underline"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #bb57a1, #6766b4)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Quick Links
                </p>
                {/* ... (rest of the Quick Links section) */}
                <ul className="list-none">
                  <li className="mb-2 hover:scale-105 duration-300 transition">
                    <a href="https://learner.vierp.in/events" target="_blank">
                      Register
                    </a>
                  </li>
                  <li className="mb-2 hover:scale-105 duration-300 transition">
                    <a href="https://edcviit.com/ourteam">Our Team</a>
                  </li>
                  {/* <li className="mb-2 hover:scale-105">
                      <a href="/#termsConditions">Privacy Policy</a>
                    </li> */}
                  <li className="mb-2 hover:scale-105 duration-300 transition">
                    <a href="/#termsConditions">Terms and Conditions</a>
                  </li>
                </ul>
              </div>

              {/* Follow Us Section */}
              <div className="text-center col-span-2 sm:col-span-1 transition  md:ml-1 lg:md-2 duration-300">
                <p
                  className="font-bold mb-2 text-lg transform hover:underline"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #bb57a1, #6766b4)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Follow us on
                </p>
                {/* ... (rest of the Follow Us section) */}
                <div className="textflex space-x-4 -ml-4">
                  <a href="https://www.instagram.com/edcviit/" target="_blank">
                    <i className="fa-brands fa-instagram text-2xl transition duration-300 transform hover:scale-125 instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/entrepreneurship-development-cell-viit/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin-in text-2xl transition duration-300 transform hover:scale-125 linkedin"></i>
                  </a>
                  <a href="https://twitter.com/edcviit" target="_blank">
                    <i class="fa-brands fa-x-twitter text-2xl transition duration-300 transform hover:scale-125 twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/@edcviit" target="_blank">
                    <i
                      class="fa-brands fa-youtube
                      text-2xl
                      transition
                      duration-300
                      transform
                      hover:scale-125
                      youtube"
                    ></i>
                  </a>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="col-span-2 sm:col-span-1 md:-ml-4 lg:-ml-4 -ml-8 md:text-left text-center">
                <p
                  className="font-bold mb-2 text-lg hover:underline"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #bb57a1, #6766b4)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Contact us
                </p>
                {/* ... (rest of the Contact Us section) */}
                <p className="hover:scale-105 duration-300 transition">
                  Email:<a href="Fmailto:edc@viit.ac.in"> edc@viit.ac.in</a>
                </p>
                <p className="hover:scale-105 duration-300 transition">
                  Phone:<a href="tel:+919561211033"> +91 9561211033</a>
                </p>
                <p className="hover:scale-105 duration-300 transition">
                  Address:
                  <a href="https://maps.app.goo.gl/XJaQ351o7yRLJFrHA">
                    {" "}
                    EDC HQ, VIIT, Pune
                  </a>
                </p>
              </div>

             
           
              
                   {/* Download App Section */}
              <div className="text-center  downloadApp transition duration-300 transform">
                <p
                  className=" font-bold mb-2 text-lg "
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #bb57a1, #6766b4)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                     
                  }}
                >
                  Download Our App
                </p>
                {/* ... (rest of the Download App section) */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.edcviit.edcviit"
                  target="_blank"
                  className="text-lg border-b border-white hover:border-opacity-50 "
                >
                  <span className="text-center flex items-center justify-center hover:scale-105 duration-300 transition">
                    <i className="fab fa-google-play pr-2"></i>
                    <h6>Download from Playstore</h6>
                  </span>
                </a>
              </div>
                  
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
