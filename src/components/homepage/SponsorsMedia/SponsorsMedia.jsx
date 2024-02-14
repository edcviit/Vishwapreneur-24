import React from "react";

const SponsorCard = ({ img }) => {
  return (
    <>
      <span className="mx-8 justify-center items-center md:w-200px md:h-200px h-100% w-100%">
        <div className="md:max-w-200 rounded overflow-hidden shadow-lg backdrop-blur-sm inline-block bg-white">
          <img className="brightness-75 bg-white" src={img} alt="brand Logo" />
        </div>
      </span>
    </>
  );
};
const SponsorsMedia = () => {
  let ListOfSponsors = [
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389607/Sponsors%20and%20PR/r29wfuwam0vt4ie5cfe0.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389608/Sponsors%20and%20PR/qleucrldkztyn5zbjl4g.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389633/Sponsors%20and%20PR/ruvxktrtw0qjjcigpor0.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389633/Sponsors%20and%20PR/gvdnhnkneyvitetkflnq.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389633/Sponsors%20and%20PR/ww9yluhpq5ronnjax6pe.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389633/Sponsors%20and%20PR/zrq2einlwtysfwfr598a.webp",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676206111/VP-23/sponsors-photo/peterengland-01_sgqpek.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/ather-01_vapcah.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/hero_new-01_etsbgs.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/stackos-01_mhietf.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/balaji-01_akpawr.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/haldiram-01_ki7j2w.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/budhani-01_h2vmka.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/smita-01_rudjre.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/growthschool-01_mhrxpp.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204645/VP-23/sponsors-photo/bliss_coffee-01_z9wsyq.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965398/VP-23/sponsors-photo/interview_buddy-01_yd0371.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677038643/VP-23/sponsors-photo/wellness-01_xaj2v6.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/my_nutrition-01_jajigx.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677478746/VP-23/sponsors-photo/nufurn-01_umzvwp.png",
  ];
  let ListOfMediaPartners = [
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/samana-01_lh82tl.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/Akash_logo_s5ifiz.jpg",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/area37-01_q4qd2t.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/punyanagari-01_m2dg8k.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/dais-01_dycp5b.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677652119/VP-23/mediap-photos/collegedunia-01_ykivhy.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/teoi-01_ngjhgs.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/campustimes-01_hw6xpz.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/tgh-01_n1rihs.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676281999/VP-23/mediap-photos/radiocity-01_zyl0oa.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676351949/VP-23/mediap-photos/edtimes-01_lkmh1m.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/highereducation-01_rdcdif.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/knowafest-01_ju3fzv.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/noticebard-01_xr1a20.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/startupfyi-01_p4fxc0.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204666/VP-23/mediap-photos/cryptonewsz-01_vifskr.png",
    // "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676352855/VP-23/mediap-photos/indianstartupstories-01_qy6igq.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389632/Sponsors%20and%20PR/ccfctr9xshiv1vdcb2bs.webp",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1707884982/partners/dauksspgpises9sehctr.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389632/Sponsors%20and%20PR/owxnr963gwomiwle2odp.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389632/Sponsors%20and%20PR/tr7wqrgqrcbz4zeknjun.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389631/Sponsors%20and%20PR/evvrmdfhfdvx8yzrlspz.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1707389631/Sponsors%20and%20PR/xmjrrwi8svdmh59ilczr.webp",


  ];
  return (
    <>
      <div className=" group mt-44">
        <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
          Our Sponsors
        </h1>
        <div className="relative flex overflow-x-hidden justify-center items-center">
          <div className="py-12  animate-marquee md:animate-none md:flex items-center  whitespace-nowrap ">
            {ListOfSponsors.map((img, index) => (
           
                <SponsorCard key={`sponsor${index}`} img={img} />
            
            ))}
          </div>
        </div>
        <h1 className="main-heading text-4xl font-bold text-center py-8">
          Media Partners
        </h1>
        <div className="relative flex overflow-x-hidden bg-black">
          <div className="py-12 animate-marquee2 md:animate-none md:flex items-center whitespace-nowrap ">
            {ListOfMediaPartners.map((img, index) => (
              <SponsorCard key={`media${index}`} img={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsMedia;
