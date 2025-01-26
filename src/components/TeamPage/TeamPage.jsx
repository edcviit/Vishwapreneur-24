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
      whoIsHe: "Sponsorship",
      linkedinLink: "https://www.linkedin.com/in/atharva-shinde-ab9459228",
      twitterLink:
        "https://twitter.com/Atharva68716615?t=kkxydCRnm_MDSOhqFqnTNg&s=09",
      mailLink: "atharva7110@gmail.com",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505799/new%20vp%20compressed/photo_9_2024-02-08_12-48-43_dx4bt0_nqotky.webp",
      name: "Sakshi Bedmutha",
      whoIsHe: "Sponsorship",
      linkedinLink: "https://www.linkedin.com/in/sakshi-bedmutha-0a420322a",
      twitterLink:
        "https://x.com/sakshi_bedmutha?t=vAfs63jYKKjGcM6LxhooeA&s=09",
      mailLink: "sakshi.22110686@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505791/new%20vp%20compressed/photo_15_2024-02-08_12-48-43_hzziol_d5opxb_prlrwe.webp",
      name: "Ketan Choudhari",
      whoIsHe: "Sponsorship",
      linkedinLink: "https://www.linkedin.com/in/ketan-choudhari-101146216",
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
      name: "Amey Kottawar",
      whoIsHe: "Public Relation",
      linkedinLink: "http://linkedin.com/in/amey-kottawar-b8473b211",
      twitterLink: "https://twitter.com/AmeyKottawar",
      mailLink: "amey.22110236@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505813/new%20vp%20compressed/bhagyashree-old-removebg-preview_we3qna_urnb1b.webp",
      name: "Bhagyashree Tambake",
      whoIsHe: "Public Relation",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708259353/new%20vp%20compressed/h6caboowxm9gyh1lycjw.webp",
      name: "Shravani Dhobale",
      whoIsHe: "Public Relation",
      linkedinLink: "https://www.linkedin.com/in/shravani-dhobale-068b7722a",
      twitterLink: "https://x.com/shravanidhobale",
      mailLink: "shravnidhobale@gmail.com",
    },
  ];

  const finance = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505804/new%20vp%20compressed/photo_2_2024-02-08_12-48-43_uoomou_zyqem6.webp",
      name: "Kartik Bhage",
      whoIsHe: "Chief Finance Officer",
      linkedinLink: "https://www.linkedin.com/in/triambak-kapoor-22bb7b22a/",
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

  const marketing = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505786/new%20vp%20compressed/Screenshot_2024-02-09_192333_j912iw_rwlmtc.webp",
      name: "Parth Sukhia",
      whoIsHe: "Marketing",
      linkedinLink: "https://www.linkedin.com/in/parth-sukhia-65935927b",
      twitterLink:
        "https://twitter.com/ParthSukhia?t=JPA3lkxV7rAOFTds7-rgFw&s=09",
      mailLink: "parth.22110274@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708258830/new%20vp%20compressed/drc5c8tyo8lhnjsrbgds.webp",
      name: "Akash Kalshetti",
      whoIsHe: "Marketing",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505786/new%20vp%20compressed/photo_16_2024-02-08_12-48-43_ng1fef_ce0d6k.webp",
      name: "Shailesh Pallod",
      whoIsHe: "Marketing",
      linkedinLink: "https://www.linkedin.com/in/shailesh-pallod-2b7105241",
      twitterLink: "https://x.com/rudeme11?t=JkbFkZi4zacPMriY-L9MrQ&s=09",
      mailLink: "shailesh.22110362@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505803/new%20vp%20compressed/photo_4_2024-02-08_12-48-43_xg0yjc_nmp4pe.webp",
      name: "Manas Shenge",
      whoIsHe: "Marketing",
      linkedinLink: "",
      twitterLink: "",
      mailLink: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708259165/new%20vp%20compressed/ih02hb8yuidhgwueskpq.webp",
      name: "Deepak Ghume",
      whoIsHe: "Marketing",
      linkedinLink: "https://www.linkedin.com/in/deepak-ghume-35537628a",
      twitterLink: "https://twitter.com/deeapakghume",
      mailLink: "deepak.22220159@viit.ac.in",
    },
  ];
  const salesandcust = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505792/new%20vp%20compressed/photo_14_2024-02-08_12-48-43_z1xg5b_fck3h4.webp",
      name: "Kishan Gyamlani",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink: "https://www.linkedin.com/in/kishan-gyamlani-130217227",
      twitterLink: "https://x.com/Kishan_2445?t=_OxfwIHtz-E4c_3bSRz6jQ&s=09",
      mailLink: "kishan.22110802@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505795/new%20vp%20compressed/photo_12_2024-02-08_12-48-43_w8hlbe_p0vnoi.webp",
      name: "Pratham Patil",
      whoIsHe: "Sales & Customer Experience",
      linkedinLink: "https://www.linkedin.com/in/pratham-patil-4826a422b",
      twitterLink:
        "https://twitter.com/_Pratham18_?t=dH-901vGaqu26r6StnAeAA&s=09",
      mailLink: "pratham.22111326@viit.ac.in ",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708502192/new%20vp%20compressed/eqlgtktmuuy8gmzuvseo.webp",
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
      name: "Mayur Nimkande",
      whoIsHe: "Technical",
      linkedinLink: "http://www.linkedin.com/in/mayur-kailas-nimkande",
      twitterLink: "https://twitter.com/Mayur_nimkande?s=09",
      mailLink: "mayur.22110922@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505787/new%20vp%20compressed/rohan_new_ncd8a5.webp",
      name: "Rohan Vaidya",
      whoIsHe: "Technical",
      linkedinLink: "https://www.linkedin.com/in/rohan-vaidya-359680190",
      twitterLink: "https://twitter.com/vaidya_jiii",
      mailLink: "rohan.22110021@viit.ac.in",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505808/new%20vp%20compressed/devesh_new_q2zx0s_rws5hv.webp",
      name: "Devesh Rathi",
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
      linkedinLink:
        "https://www.linkedin.com/in/parth-chavan-46448b210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitterLink: "",
      mailLink: "parthchavan214@gmail.com",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1707505794/new%20vp%20compressed/photo_13_2024-02-08_12-48-43_msja0p_uzlrbx.webp",
      name: "Aakash Dudhane",
      whoIsHe: "Co-Convenor",
      linkedinLink:
        "https://www.linkedin.com/in/akash-dudhane-b0b30920b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADVC1vsBQ5RCKXZHfYYoSH0QntwLTxXB55Q&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bn9Gb3eqvROy0Yk9GdkrD8g%3D%3D",
      twitterLink: "",
      mailLink: "",
    },
  ];

  const categories = {
    eventHeads,
    curation,
    sponsorship,
    publicrelation,
    finance,
    hr,
    marketing,
    salesandcust,
    technical,
  };

  const domainSections = [
    { title: "Convenors", members: eventHeads },
    { title: "Treasurer", members: finance },
    { title: "Curation", members: curation },
    { title: "Sponsorship", members: sponsorship },
    { title: "Public Relation", members: publicrelation },
    { title: "Human Resource", members: hr },
    // { title: "Operation & Supply Management", members: opretionandsupply },
    { title: "Marketing", members: marketing },
    { title: "Sales & Customer Experiences", members: salesandcust },
    { title: "Technical", members: technical },
  ];

  return (
    <div className="team-page">
      {Object.entries(categories).map(([categoryName, members]) => (
        <div key={categoryName} className="team-category">
          <h1 className="sub-heading bg-gradient-to-r from-[#b74b9b] pt-5 to-white text-transparent bg-clip-text text-2xl font-bold text-center py-8">
            {categoryName}
          </h1>
          <div className="team-members" >
            <div
              className="h-[10rem] flex items-center"
              style={{
                marginTop: "150px",
                paddingTop: "20px",
                paddingBottom: "225px",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {members.map((member, index) => (
                <div key={index} className="card">
                  <button className="mail">
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M4 4h16v16H4z" fill="none"></path>
                        <path d="M4 8l8 5 8-5v8H4V8z"></path>
                      </svg>
                    </a>
                  </button>
                  <div className="profile-pic">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <span className="name">{member.name}</span>
                      <span className="about-me">{member.whoIsHe}</span>
                    </div>
                    <div class="bottom-bottom">
                      <div className="social-links-container">
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            viewBox="0 0 16 15.999"
                            height="15.999"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              transform="translate(6 598)"
                              d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                              data-name="Subtraction 4"
                              id="Subtraction_4"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href={member.twitterLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                          </svg>
                        </a>
                        <a
                          href={member.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="100"
                            viewBox="0 0 50 50"
                          >
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                          </svg>
                        </a>
                      </div>
                      <button className="button">
                        <a
                          href={`mailto:${member.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contact Me
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
