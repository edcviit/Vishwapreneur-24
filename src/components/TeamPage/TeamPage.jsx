import React from "react";
import "./team.css";

const TeamPage = () => {
  const curation = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505807/new%20vp%20compressed/photo_1_2024-02-08_12-48-43_akmldw_cvgiqt.webp",
      name: "Sanwara Chandak",
      whoIsHe: "Curator",
      linkedinLink: "https://www.linkedin.com/in/sanwara-chandak-a81ab322a/",
      twitterLink: "https://twitter.com/ChandakSawara",
      mailLink: "sanwara.22110035@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505796/new%20vp%20compressed/photo_10_2024-02-08_12-48-43_opje6h_g3injf.webp",
      name: "Vedant Vedpathak",
      whoIsHe: "Curator",
      linkedinLink: "https://www.linkedin.com/in/vedant-vedpathak-18411422b/",
      twitterLink: "https://twitter.com/VedpathakVedant",
      mailLink: "vedant.22110246@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505788/new%20vp%20compressed/Screenshot_2024-02-09_184225_xz25qx_rcvuwr.webp",
      name: "Vaibhav Sawate",
      whoIsHe: "Curator",
      linkedinLink: "https://www.linkedin.com/in/vaibhav-sawate04",
      twitterLink: "https://x.com/theratinme",
      mailLink: "vaibhav.22110326@viit.ac.in",
    },
  ];
  const sponsorship = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505802/new%20vp%20compressed/photo_5_2024-02-08_12-48-43_mcsybw_tpsxlj_z6txqe.webp",
      name: "Atharva Shinde",
      whoIsHe: "sponsorship",
      linkedinLink:
        "https://www.linkedin.com/in/atharva-shinde-ab9459228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink:
        "https://twitter.com/Atharva68716615?t=kkxydCRnm_MDSOhqFqnTNg&s=09",
      mailLink: "atharva7110@gmail.com",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505799/new%20vp%20compressed/photo_9_2024-02-08_12-48-43_dx4bt0_nqotky.webp",
      name: "Sakshi Bedmutha",
      whoIsHe: "Sponsorship",
      linkedinLink:
        "https://www.linkedin.com/in/sakshi-bedmutha-0a420322a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink:
        "https://x.com/sakshi_bedmutha?t=vAfs63jYKKjGcM6LxhooeA&s=09",
      mailLink: "sakshi.22110686@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505791/new%20vp%20compressed/photo_15_2024-02-08_12-48-43_hzziol_d5opxb_prlrwe.webp",
      name: "Ketan Choudhari",
      whoIsHe: "sponsorship",
      linkedinLink:
        "https://www.linkedin.com/in/ketan-choudhari-101146216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink: "",
      mailLink: "ketan.22110060@gmail.com",
    },
  ];
  const publicrelation = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505790/new%20vp%20compressed/photo_18_2024-02-08_12-48-43_kvbmi2_my7qqf.webp",
      name: "Malhar Dhakulkar",
      whoIsHe: "Public Relation",
      linkedinLink: "https://www.linkedin.com/in/malhar-dhakulkar-302346253/",
      twitterLink: "https://twitter.com/MALHAR0704",
      mailLink: "malhar.22110506@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505800/new%20vp%20compressed/photo_7_2024-02-08_12-48-43_qdeogx_zuvyae.webp",
      name: "Amey kottawar",
      whoIsHe: "Public Relation",
      linkedinLink: "http://linkedin.com/in/amey-kottawar-b8473b211",
      twitterLink: "https://twitter.com/AmeyKottawar",
      mailLink: "amey.22110236@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505813/new%20vp%20compressed/bhagyashree-old-removebg-preview_we3qna_urnb1b.webp",
      name: "Bhagyashree",
      whoIsHe: "Public Relation",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
  ];
  const hr = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707506923/new%20vp%20compressed/Screenshot_2024-02-10_005727_bbooph.webp",
      name: "Triambak Kapoor",
      whoIsHe: "HR",
      linkedinLink: "https://www.linkedin.com/in/triambak-kapoor-22bb7b22a/",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505805/new%20vp%20compressed/photo_3_2024-02-08_12-48-43_q34vqh_uttdkj.webp",
      name: "Swarnima Yogi",
      whoIsHe: "HR",
      linkedinLink: "https://www.linkedin.com/in/swarnima-yogi-90141b22a/",
      twitterLink: "",
      mailLink: "swarnima.22110483@viit.ac.in",
    },
   
  ];
  const opretionandsupply = [
    {
      img: " ",
      name: "Ayush",
      whoIsHe: "Operation & Supply Chain",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: " ",
      name: "Aditya Patil",
      whoIsHe: "Operation & Supply Chain",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Vyankatesh ",
      whoIsHe: "Operation & Supply Chain",
      linkedinLink:
        "https://www.linkedin.com/in/vyankatesh-kumbhakarna-480b38229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink: "https://x.com/vyankatesh1444?t=_X93Nj5mOuScD0eYS1qYZw&s=09",
      mailLink: "vyankatesh.22110041@viit.ac.in",
    },
  ];
  const marketing = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505786/new%20vp%20compressed/Screenshot_2024-02-09_192333_j912iw_rwlmtc.webp",
      name: "Parth Sukhia    ",
      whoIsHe: "Marketing",
      linkedinLink: "https://www.linkedin.com/in/parth-sukhia-65935927b",
      twitterLink:
        "https://twitter.com/ParthSukhia?t=JPA3lkxV7rAOFTds7-rgFw&s=09",
      mailLink: "parth.22110274@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Akash",
      whoIsHe: "Marketing",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505786/new%20vp%20compressed/photo_16_2024-02-08_12-48-43_ng1fef_ce0d6k.webp",
      name: "Shailesh",
      whoIsHe: "Marketing",
      linkedinLink: "https://www.linkedin.com/in/shailesh-pallod-2b7105241",
      twitterLink: "https://x.com/rudeme11?t=JkbFkZi4zacPMriY-L9MrQ&s=09",
      mailLink: "shailesh.22110362@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505803/new%20vp%20compressed/photo_4_2024-02-08_12-48-43_xg0yjc_nmp4pe.webp",
      name: "Manas",
      whoIsHe: "Marketing",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "",
      name: "Deepak Ghume",
      whoIsHe: "Marketing",
      linkedinLink: "https://www.linkedin.com/in/deepak-ghume-35537628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink: "https://twitter.com/deeapakghume",
      mailLink: "deepak.22220159@viit.ac.in",
    }
  ];
  const salesandcust = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505792/new%20vp%20compressed/photo_14_2024-02-08_12-48-43_z1xg5b_fck3h4.webp",
      name: "Kishan",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink:
        "https://www.linkedin.com/in/kishan-gyamlani-130217227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink: "https://x.com/Kishan_2445?t=_OxfwIHtz-E4c_3bSRz6jQ&s=09",
      mailLink: "kishan.22110802@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505795/new%20vp%20compressed/photo_12_2024-02-08_12-48-43_w8hlbe_p0vnoi.webp",
      name:"",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink:
        "https://www.linkedin.com/in/pratham-patil-4826a422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink:
        "https://twitter.com/_Pratham18_?t=dH-901vGaqu26r6StnAeAA&s=09",
      mailLink: "pratham.22111326@viit.ac.in ",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Kaushik Munde",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink: "https://www.linkedin.com/in/kaushik-munde-18923b22a/",
      twitterLink: "",
      mailLink: "kaushik.22111149@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505812/new%20vp%20compressed/animesh_new_gaj5d1_i2ulgs.webp",
      name: "Animesh Kothawade",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505811/new%20vp%20compressed/darshan_new_kbbnaj.webp ",
      name: "Darshan Kotecha ",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink:
        "https://www.linkedin.com/in/darshan-kotecha-46a967244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitterLink: "https://x.com/Darshank79?t=1zDMlWjlliSNTZSvxrAqlQ&s=09",
      mailLink: "darshan.22110342@viit.ac.in",
    },
  ];
  const technical = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505809/new%20vp%20compressed/mayur-new_ovsrpl_fknd6k.webp",
      name: "Mayur",
      whoIsHe: "Technical",
      linkedinLink: "http://www.linkedin.com/in/mayur-kailas-nimkande",
      twitterLink: "https://twitter.com/Mayur_nimkande?s=09",
      mailLink: "mayur.22110922@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505787/new%20vp%20compressed/rohan_new_ncd8a5.webp",
      name: "Rohan",
      whoIsHe: "Technical",
      linkedinLink: "https://www.linkedin.com/in/rohan-vaidya-359680190",
      twitterLink: "https://twitter.com/vaidya_jiii",
      mailLink: "rohan.22110021@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505808/new%20vp%20compressed/devesh_new_q2zx0s_rws5hv.webp",
      name: "Devesh",
      whoIsHe: "Technical",
      linkedinLink:
        "https://www.linkedin.com/in/devesh-rathi-46538822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      twitterLink: "https://twitter.com/dev_rathi37241",
      mailLink: "deveshdiliprathi@gmail.com",
    },
  ];

  const eventHeads = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505798/new%20vp%20compressed/photo_11_2024-02-08_12-48-43_yqn9sz_dvnwrv.webp",
      name: "Parth Chavhan",
      whoIsHe: "Convenor",
      linkedinLink: "https://www.linkedin.com/in/parth-chavan-46448b210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitterLink: "",
      mailLink: "parthchavan214@gmail.com",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505794/new%20vp%20compressed/photo_13_2024-02-08_12-48-43_msja0p_uzlrbx.webp",
      name: "Aakash Dudhane",
      whoIsHe: "Co-Convenor",
      linkedinLink:"https://www.linkedin.com/in/akash-dudhane-b0b30920b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADVC1vsBQ5RCKXZHfYYoSH0QntwLTxXB55Q&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bn9Gb3eqvROy0Yk9GdkrD8g%3D%3D",
      twitterLink: "",
      mailLink: "",
    }, 
  ];

  const domainSections = [
    { title: "Event Heads", members: eventHeads },
    { title: "Curation", members: curation },
    { title: "Sponsorship", members: sponsorship },
    { title: "Public Relation", members: publicrelation },
    { title: "HR", members: hr },
    { title: "Operation & Supply Management", members: opretionandsupply },
    { title: "Marketing", members: marketing },
    { title: "Sales & Customer Experience", members: salesandcust },
    { title: "Technical", members: technical },
  ];

  return (
    <div className="Team ">
      <br />
      <br /> <br />
      <br />
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] pt-5 to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
        Our Team
      </h1>
      {/* <h1 className="sub-heading bg-gradient-to-r from-[#b74b9b] pt-5 to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
       Event heads
      </h1>
      <subHeading title="Event Heads" /> */}
      {/* <div className="flex items-center justify-around mt-6 mb-16 ">
        <TeamCard
          img="https://res.cloudinary.com/da5mmxnn3/image/upload/v1675611745/teamimages/parth-01_scajmz.jpg"
          name="Parth Chavhan"
          whoIsHe="Convenor"
        />
        <TeamCard
          img="https://res.cloudinary.com/da5mmxnn3/image/upload/v1675611745/teamimages/parth-01_scajmz.jpg"
          name="Parth Chavhan"
          whoIsHe="Convenor"
        />
      </div> */}
      {/* <h1 className="sub-heading  pt-5  text-transparent bg-clip-text text-2xl font-bold text-center py-8">
        Curation
      </h1> */}
      {/* <div className="flex items-center justify-around mt-6 mb-16 ">
        <TeamCard
          img="https://res.cloudinary.com/da5mmxnn3/image/upload/v1675611745/teamimages/parth-01_scajmz.jpg"
          name="Parth Chavhan"
          whoIsHe="Convenor"
        />
        <TeamCard
          img="https://res.cloudinary.com/da5mmxnn3/image/upload/v1675611745/teamimages/parth-01_scajmz.jpg"
          name="Parth Chavhan"
          whoIsHe="Convenor"
        />
      </div> */}
      {/* <div className="teamPage">
        {team.map((member) => (
          <>
            <TeamCard
              img={member.img}
              name={member.name}
              whoIsHe={member.whoIsHe}
            />
          </>
        ))}
      </div> */}
      {/* <br /> */}
      {domainSections.map((section) => (
        <>
          <h1 className="sub-heading bg-gradient-to-r from-[#b74b9b] pt-5 to-white text-transparent bg-clip-text text-2xl font-bold text-center py-8">
            {section.title}
          </h1>
          <div className="flex items-center justify-around mt-6 mb-16 My_card_wrapper">
            {section.members.map((member) => (
              <TeamCard
                img={member.img}
                name={member.name}
                whoIsHe={member.whoIsHe}
                linkedinLink={member.linkedinLink}
                twitterLink = {member.twitterLink}
                mailLink = {member.mailLink}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

const subHeading = ({ title }) => {
  return (
    <>
      <h1 className="sub-heading bg-gradient-to-r from-[#b74b9b] pt-5 to-white text-transparent bg-clip-text text-2xl font-bold text-center py-8">
        {title}
      </h1>
    </>
  );
};

const TeamCard = ({ img, name, whoIsHe, linkedinLink, twitterLink, mailLink }) => {
  const handleMailClick = () => {
    window.open(`mailto:${mailLink}`, '_blank');
  };
  return (
    <>
      <div className="h-[10rem] flex items-center" style={{ width: "230px", marginTop: "76px" }}>
        <div className="Teamcard">
          <div className="imgBx">
            <img src={img} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                {name} <br />
                <br />
                <span>{whoIsHe}</span>
              </h2>
              <div className="flex w-full justify-between px-10 py-4 ">
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
                  <img className="h-8 rounded-xl" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" />
                </a>
                <img
                  className="h-8 rounded-xl"
                  src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
                  alt=""
                  onClick={handleMailClick}
                  style={{ cursor: 'pointer' }}
                />
                <a href={twitterLink} target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
                  <img className="h-8 rounded-xl" src="https://img.freepik.com/premium-vector/x-new-social-network-black-app-icon-twitter-rebranded-as-x-twitter-s-logo-was-changed_277909-568.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;