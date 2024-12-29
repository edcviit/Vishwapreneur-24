import { FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useCountUp } from '../../../hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';
import './media2.css';

const Media2 = () => {
  const [startCount, setStartCount] = useState(false);
  const socialSectionRef = useRef(null);

  const socialLinks = [
    {
      name: 'Youtube',
      name2: 'Youtube',
      icon: <FaYoutube />,
      color: '#ff0000',
      username: '@youtubeuser',
      followers: 5000,
      displayText: '5000+ Subscribers',
      profile: 'Yt',
      url: 'https://www.youtube.com/@edcviit'
    },
    {
      name: 'Instagram',
      icon: <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </svg>,
      color: '#e6683c',
      username: '@username',
      followers: 3200,
      displayText: '3200+ Followers',
      profile: 'Ing',
      url: 'https://www.instagram.com/edcviit/'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      color: '#0077b5',
      username: '@linkedinuser',
      followers: 2300,
      displayText: '2300+ Connections',
      profile: 'in',
      url: 'https://www.linkedin.com/company/entrepreneurship-development-cell-viit/'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      color: '#1da1f2',
      username: '@twitteruser',
      followers: 1200,
      displayText: '1200+ Followers',
      profile: 'Tw',
      url: 'https://x.com/edcviit'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (socialSectionRef.current) {
      observer.observe(socialSectionRef.current);
    }

    return () => {
      if (socialSectionRef.current) {
        observer.unobserve(socialSectionRef.current);
      }
    };
  }, []);

  return (
    <><div class="nine">
      <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center ">
        Social Media
      </h1>
    </div><div className="social-icons-container" ref={socialSectionRef}>

        {socialLinks.map((social, index) => {
          const count = useCountUp(startCount ? social.followers : 0);

          return (
            <div className="tooltip-container " key={index}>
              <div className="tooltip">
                <div className="profile">
                  <div className="user">
                    <div className="img" style={{ color: social.color }}>{social.profile}</div>
                    <div className="details">
                      <div className="name">{social.name}</div>
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="username">
                        {social.username}
                      </a>
                    </div>
                  </div>
                  <div className="about">{social.displayText}</div>
                </div>
              </div>
              
              <div id="icons" className="text">
                <a className="icon" href={social.url} target="_blank" rel="noopener noreferrer">
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className={`socialSVG ${social.name.toLowerCase()}SVG`}>
                      {social.icon}
                    </span>
                  </div>
                  <div className="text text2">{social.name}</div>
                </a>
              </div>
              <div className="follower-count " style={{ color: social.color }}>
                {count.toLocaleString() + "+"}

              </div>
            </div>
          );
        })}
      </div></>
  );
};

export default Media2;