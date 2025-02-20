import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import "./sponsorMedia.css"; // Your custom styles if needed

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const SponsorsMedia = () => {
  const navigate = useNavigate();





  const ListOfSponsors = [
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965527/VP-23/sponsors-photo/twj-01_o9auxe.png", link: "https://twj.example.com" },
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965467/VP-23/sponsors-photo/kiranacademy-01_jsoztm.png", link: "https://kiranacademy.com" },
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/herody-01_brshxy.png", link: "https://herody.in" },
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965714/VP-23/sponsors-photo/aecc-01_rsiu2e.png", link: "https://aeccglobal.com" },
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/newstride-01_hhrx5e.png", link: "https://www.newstrides.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677479947/VP-23/sponsors-photo/edwise-01_tvwxnw.png", link: "https://www.edwiseinternational.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676206111/VP-23/sponsors-photo/peterengland-01_sgqpek.png", link: "https://www.peter-england.co.uk/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/ather-01_vapcah.png", link: "https://www.atherenergy.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/hero_new-01_etsbgs.png", link: "https://www.heromotors.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/stackos-01_mhietf.png", link: "https://docs.stackos.io/stackos-docs"}, // Confuse
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/balaji-01_akpawr.png", link: "https://www.balajiwafers.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/haldiram-01_ki7j2w.png", link: "https://www.haldiram.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/budhani-01_h2vmka.png", link: "https://www.budhanibros.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/smita-01_rudjre.png", link: "https://smitaholidays.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/growthschool-01_mhrxpp.png", link: "https://www.growthschool.io/in"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204645/VP-23/sponsors-photo/bliss_coffee-01_z9wsyq.png", link: "https://www.blisscoffeebar.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965398/VP-23/sponsors-photo/interview_buddy-01_yd0371.png", link: "https://interviewbuddy.net/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677038643/VP-23/sponsors-photo/wellness-01_xaj2v6.png", link: "https://www.wellnessforever.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/my_nutrition-01_jajigx.png", link: "https://www.mjnutritionist.com/"},
    { img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677478746/VP-23/sponsors-photo/nufurn-01_umzvwp.png", link: "https://www.nufurn.com/"},
    // Add more sponsors with their respective links
  ];

  const ListOfMediaPartners = [
    { img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp", link: "https://redfm.com" }, /* RedFM */
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733689178/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_7_coo8yx.png", link: "https://abpnews.com" }, /* ABP */
    { img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp", link: "https://campusindia.com" }, /* Campus India */
    { img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp", link: "https://eoe.in" }, /* EOE */
    { img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp", link: "http://www.kumarpacificmall.com/"},/*kumarSpecific*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687421/Untitled_design_10_vnvn9l.png", link: "https://www.startupindia.gov.in/"},/*startupindia*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688561/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_6_zirmcd.png", link: "https://theglobalhues.com/"},/*tgh*/  
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688479/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_5_i827oc.png", link: "https://epaper.prabhatkhabar.com/"},/*prabhat*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688406/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_4_uzo8nd.png", link: "https://epaper.esakal.com/smartepaper/UI/?q=Pune/Main/2025-02-06/1"},/*sakal*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688332/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_3_pryu7x.png", link: "https://homebusinessmag.com/"},/*BusinessSphMag*/      
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688252/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_2_u99caj.png", link: "https://www.saamana.com/"},/*samna*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688173/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_1_gqc92l.png", link: "https://unstop.com/"},/*0unstop*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733688067/httpsres.cloudinary.comdi40y80dwimageuploadv1708018193Partenersmgkcx8khmcrtuiihm3aw.png_fynb4d.png", link: "https://www.siliconindia.com/"},/*silicon india*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687943/Untitled_design_13_aspjv3.png", link: "https://bootstart.in/"},/*bootstrap*/
    { img: "https://res.cloudinary.com/dtqrzxyef/image/upload/v1733687812/Untitled_design_12_isyjc8.png", link: "https://startupnews.fyi/"},/*startupnews*/
    { img: "https://res.cloudinary.com/edcviitcom/image/upload/v1740043548/range-p-removebg-preview_csjzsw.png", link: "https://www.rangepublicity.com/"} /*range publicity*/
   
    // Add more media partners with their respective links
  ];

  return (
    <div className="sponsors-container">
      <div className="relative">
        <h1 className="main-heading bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-4xl font-bold text-center py-8 mb-10 Previous">
          Our Sponsors 
        </h1>
        <div className="swiper-container">

          <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{ delay: 1000 }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {ListOfSponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl overflow-hidden backdrop-blur-sm bg-white justify-center">
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.img} alt={`Sponsor ${index + 1}`} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>



        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/sponsermedia")}
            className="space-button"
            style={{ marginTop: "50px", borderColor: "#7c008d" }}
          >
            All Sponsors
          </button>
        </div>
      </div>

      
      <div className="relative">
        <h1 className="main-heading bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-4xl font-bold text-center py-8 mb-10 Previous">
          Our Media Partners
        </h1>
        <div className="swiper-container">

          <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{ delay: 1000 }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {ListOfMediaPartners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl overflow-hidden bg-white">
                  <a href={partner.link} target="_blank" rel="noopener noreferrer">
                    <img src={partner.img} alt={`Media Partner ${index + 1}`} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/mediapartner")}
            className="space-button"
            style={{ marginTop: "50px", borderColor: "#7c008d" }}
          >
            All Media Partners
          </button>
        </div>
      </div>
    </div>
  );};

export default SponsorsMedia;

