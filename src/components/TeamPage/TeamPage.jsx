import React from "react";
import "./team.css";

const TeamPage = () => {
  const team = [
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/darshan-min_jcnx2t.webp",
      name: "Darshan Kotecha",
      whoIsHe: "Sales Head",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966711/atharva-min_acrz3x.webp",
      name: "Atharva Shinde",
      whoIsHe: "Curator",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702976878/compressed%20team%20img/gtnxrcavr7nikgrbaoam_2_af2kkx.webp",
      name: "Sanwara Chandak",
      whoIsHe: "Curator",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/sakshi-min_u9uqnj.webp",
      name: "Sakshi Bedmutha",
      whoIsHe: "CEO of JetsetGo",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966711/shravani-min_gotuka.webp",
      name: "Shravani Dhobale",
      whoIsHe: "Founder  Media",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966713/kishan-min_v5cosq.webp",
      name: "Kishan",
      whoIsHe: "Founder & CEO",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/pratham-min_ns1nhd.webp",
      name: "Pratham Patil",
      whoIsHe: "Blockchain &",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/amey-min_qlknit.webp",
      name: "Amey Kottawar",
      whoIsHe: "Founder ",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677265053/Speakers/vishnukorde-01_pfjft1.png",
      name: "Mr. Vishnu Korde",
      whoIsHe: "CEO & Chief ",
      content:
        "Alumni of Harvard University. Skilled in Cryptography, Development operation, Business Planning, Team Management, Product Management, Negotiation, Analytical Skills, and Customer Relationship Management (CRM).",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676441222/Speakers/hairsh_vp23_parbuy.jpg",
      name: "Mr. Harish Uthayakumar",
      whoIsHe: "Co-Founder ",
      content:
        "Featured in Forbes 30U30 Asia, the co-founder of Bluelearn, India's largest and smartest student community.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676449856/Speakers/rishabh-jain_vp23_myt1sc.jpg",
      name: "Mr. Rishabh Jain",
      whoIsHe: "Creator at",
      content:
        "Entrepreneur at Qriyo (EdTech Company) and Quick Payroll (Free Payroll app for MSME's). Has over 3 million subscribers on YouTube.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676449220/Speakers/ashokramchandran_vp23_nynaor.jpg",
      name: "Mr. Ashok Ramchandran",
      whoIsHe: "CEO & President ",
      content:
        "He has 30+ years of experience in the corporate world, was named one of India’s brightest business leaders under the age of 40, In the Economic Times 40 under Forty.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676440812/Speakers/anantlodha_ywriun-removebg-preview_kgngpz.jpg",
      name: "Mr. Anant Ladha",
      whoIsHe: "Founder at ",
      content:
        "A national bestselling author and the Founder and CEO of Invest Aaj for Kal, a channel with over 2M+ subscribers.",
    },

    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676441340/Speakers/shreyanssancheti_vp23_ncbxln.jpg",
      name: "Mr. Shreyans Sancheti",
      whoIsHe: "Co-Founder",
      content:
        "A TEDx Speaker, BITS Pilani Goa Alumni, and the Co-Founder of Bluelearn, the largest and smartest student community.",
    },
  ];
  const curation = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702976878/compressed%20team%20img/gtnxrcavr7nikgrbaoam_2_af2kkx.webp",
      name: "Sanwara Chandak",
      whoIsHe: "Curator",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Vedant",
      whoIsHe: "Curator",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968685/compressed%20team%20img/xkac7biufspehaup1n0f_p477uu.webp",
      name: "Vaibhav",
      whoIsHe: "Curator",
    },
  ];
  const sponsership = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702976878/compressed%20team%20img/gtnxrcavr7nikgrbaoam_2_af2kkx.webp",
      name: "Atharva",
      whoIsHe: "Sponsership",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/sakshi-min_u9uqnj.webp",
      name: "Sakshi",
      whoIsShe: "Sponsership",
    },
  ];
  const publicrelation = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968686/compressed%20team%20img/o3tmibbbiuxr9cpv781e_1_b0joht.webp",
      name: "Malhar",
      whoIsHe: "Public Relation",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/amey-min_qlknit.webp",
      name: "Amey",
      whoIsHe: "Public Relation",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968685/compressed%20team%20img/idku65dij5n6svftd0xy_x1az5o.webp",
      name: "Bhagyashree",
      whoIsShe: "Public Relation",
    },
  ];
  const opretionandsupply = [
    {
      img: " ",
      name: "Ayush",
      whoIsHe: "Operation & Supply Chain",
    },
    {
      img: " ",
      name: "Aditya Patil",
      whoIsHe: "Operation & Supply Chain",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Vyankatesh",
      whoIsHe: "Operation & Supply Chain",
    },
  ];
  const marketing = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968687/compressed%20team%20img/jlao1taztkjbiskyjrt7_zeap1w.webp",
      name: "Parth",
      whoIsHe: "Marketing",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Akash",
      whoIsHe: "Marketing",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966707/shailesh-min_exe525.webp",
      name: "Shailesh",
      whoIsHe: "Marketing",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968685/compressed%20team%20img/hglbx0pfveyoxee9ow0m_1_f7ug1h.webp",
      name: "Manas",
      whoIsHe: "Marketing",
    },
  ];
  const salesandcust = [
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966713/kishan-min_v5cosq.webp",
      name: "Kishan",
      whoIsHe: "Sales & Customer Experience",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966713/kishan-min_v5cosq.webp",
      name: "Kishan",
      whoIsHe: "Sales & Customer Experience",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966708/pratham-min_ns1nhd.webp",
      name: "Pratham",
      whoIsHe: "Sales & Customer Experience",
    },
    {
      img: "https://res.cloudinary.com/djmyvz2mx/image/upload/v1702966714/placeholder-male-min_j4ufpc.webp",
      name: "Kaushik",
      whoIsHe: "Sales & Customer Experience",
    },
    {
      img: " ",
      name: "Soham",
      whoIsHe: "Sales & Customer Experience",
    },
  ];
  const technical = [
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968685/compressed%20team%20img/uqwojhtweuqj2wab2lgf_ecwcho.webp",
      name: "Mayur",
      whoIsHe: "Technical",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968686/compressed%20team%20img/vgjgpijs94hksvc00n1a_r0bea9.webp",
      name: "Rohan",
      whoIsHe: "Technical",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1702968686/compressed%20team%20img/vgjgpijs94hksvc00n1a_r0bea9.webp",
      name: "Devesh",
      whoIsHe: "Technical",
    }
  ];

  const eventHeads = [
    {
        img:"https://res.cloudinary.com/da5mmxnn3/image/upload/v1675611745/teamimages/parth-01_scajmz.jpg",
        name:"Parth Chavhan",
        whoIsHe:"Convenor"
    },
    {
        img:"https://res.cloudinary.com/da5mmxnn3/image/upload/v1675611745/teamimages/parth-01_scajmz.jpg",
        name:"Aakash Chavhan",
        whoIsHe:"Co-Convenor"
    },
  ]

  const domainSections = [
    { title: "Event Heads", members: eventHeads },
    { title: "Curation", members: curation },
    { title: "Sponsorship", members: sponsership },
    { title: "Public Relation", members: publicrelation },
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
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

const subHeading =({title})=>{
return (
  <>
    <h1 className="sub-heading bg-gradient-to-r from-[#b74b9b] pt-5 to-white text-transparent bg-clip-text text-2xl font-bold text-center py-8">
      {title}
    </h1>
  </>
);
}

const TeamCard = ({ img, name, whoIsHe }) => {
  return (
    <>
      <div className="h-[10rem] flex items-center" style={{width:"230px" , marginTop:"76px"}}>
        {/* <img src="./scifi.png" alt="" /> */}
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
                <img
                  className="h-8 rounded-xl"
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                  alt=""
                />
                <img
                  className="h-8 rounded-xl"
                  src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
                  alt=""
                />
                <img
                  className="h-8 rounded-xl"
                  src="https://img.freepik.com/premium-vector/x-new-social-network-black-app-icon-twitter-rebranded-as-x-twitter-s-logo-was-changed_277909-568.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamPage;