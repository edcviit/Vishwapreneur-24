import { FaYoutube, FaLinkedin, FaTwitter,FaInstagram } from 'react-icons/fa';
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
      icon: <FaInstagram/>,
      color: '#E1306C',
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