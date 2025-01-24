import { FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useCountUp } from '../../../hooks/useCountUp';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import './media2.css';

const fetchLatestPosts = async (platform) => {
  // Mock function to fetch multiple posts. Replace with actual API calls.
  const mockPosts = {
    Youtube: [
      // { type: 'video', content: 'https://www.youtube.com/embed/ZBqbC8Kdg60?si=3xAuLcNd8Z_obVoJ' },
      // { type: 'video', content: 'https://www.youtube.com/embed/sample2' },
      // { type: 'video', content: 'https://www.youtube.com/embed/sample3' },
    ],
    Instagram: [
      // { type: 'image', content: 'https://media.licdn.com/dms/image/v2/D4D22AQH1rMVuiSXq5A/feedshare-shrink_800/B4DZP03k.XGgAg-/0/1734980032162?e=1738195200&v=beta&t=t0V7lFv6JkKeZghhYKuyD4wXbSAGN0RhTQxgDs37Kcw' },
      // { type: 'image', content: 'https://res.cloudinary.com/.../Instagram_post2.png' },
      // { type: 'image', content: 'https://res.cloudinary.com/.../Instagram_post3.png' },
    ],
    LinkedIn: [
      // { type: 'image', content: 'https://media.licdn.com/.../post1.png' },
      // { type: 'image', content: 'https://media.licdn.com/.../post2.png' },
      // { type: 'image', content: 'https://media.licdn.com/.../post3.png' },
    ],
    Twitter: [
      // { type: 'image', content: 'Latest tweet content 1' },
      // { type: 'image', content: 'Latest tweet content 2' },
      // { type: 'image', content: 'Latest tweet content 3' },
    ],
  };
  return mockPosts[platform];
};

const Media2 = () => {
  const [startCount, setStartCount] = useState(false);
  const [latestPosts, setLatestPosts] = useState({});
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const socialSectionRef = useRef(null);

  const socialLinks = [
    {
      name: 'Youtube',
      icon: <FaYoutube />,
      color: '#ff0000',
      username: '@youtubeuser',
      followers: 5000,
      displayText: '5000+ Subscribers',
      profile: 'Yt',
      url: 'https://www.youtube.com/@edcviit',
    },
    // Other social platforms here...
    {
      name: 'Instagram',
      icon: <FaInstagram />, 
      color: '#e6683c',
      username: '@username',
      followers: 3200,
      displayText: '3200+ Followers',
      profile: 'Ing',
      url: 'https://www.instagram.com/edcviit/',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      color: '#0077b5',
      username: '@linkedinuser',
      followers: 2300,
      displayText: '2300+ Connections',
      profile: 'in',
      url: 'https://www.linkedin.com/company/entrepreneurship-development-cell-viit/',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      color: '#1da1f2',
      username: '@twitteruser',
      followers: 1200,
      displayText: '1200+ Followers',
      profile: 'Tw',
      url: 'https://x.com/edcviit',
    },
  ];

  const testimonials = [
    {
      name: 'Lucie.F',
      role: 'Passenger',
      quote: 'Thanks to Karos I spend 40 to 20 minutes of travel and in addition I met that cool people!',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Antoine.O',
      role: 'Passenger',
      quote: 'Very good carpooling app for everyday life. Hyper simple and without detours. I recommend!',
      avatar: '/api/placeholder/32/32'
    }
  ];
    
  useEffect(() => {
    const fetchData = async () => {
      const posts = {};
      for (const social of socialLinks) {
        const post = await fetchLatestPosts(social.name);
        posts[social.name] = post;
      }
      setLatestPosts(posts);
    };
    fetchData();
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="main-heading mb-2">Social Media</h1>
      <div className="max-w-4xl mx-auto p-4">
 
      {/* <div className="mb-6 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="text-white text-xl mb-2">
            <img 
              src="/image/Post1.jpg" 
              alt="EDC Post 1" 
              className="h-10 mb-4"
            />
            <div className="text-4xl font-bold text-white text-center">
              RADIO Campus
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        className="mb-6 rounded-lg shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(128, 0, 128, 0.6), rgba(255, 105, 180, 0.6)), url('/image/Post1.jpg')`,
          backgroundBlendMode: 'overlay',
          height: '200px', // Replace with the height from the original code
          width: '100%',   // Replace with the width from the original code
        }}
      ></div> */}

      <div
        className="mb-6 rounded-lg shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(128, 0, 128, 0.6), rgba(255, 105, 180, 0.6)), url('/image/Post1.jpg')`,
          backgroundBlendMode: 'overlay',
          backgroundSize: '100% 100%', // Ensures the image stretches to fit the div size
          backgroundPosition: 'center', // Centers the image within the div
          height: '200px', // Height of the div
          width: '100%', // Width of the div
        }}
      ></div>





      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              index === 0 ? 'bg-gradient-to-r from-red-400 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-purple-600'
            } text-white`}
          >
            <div className="flex items-start space-x-4">
              <Quote className="w-8 h-8 mt-1 opacity-50" />
              <div className="flex-1">
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-75">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="social-icons-container" ref={socialSectionRef}>
        {socialLinks.map((social, index) => {
          const count = useCountUp(startCount ? social.followers : 0);
          const latestPost = latestPosts[social.name]?.[currentPostIndex];

          return (
            <div className="tooltip-container" href={social.url} key={index}>
              <div className="tooltip">
                {latestPost ? (
                  latestPost.type === 'image' ? (
                    <img src={latestPost.content} alt={`${social.name} post`} />
                  ) : latestPost.type === 'video' ? (
                    <iframe
                      src={latestPost.content}
                      title={`${social.name} post`}
                      allowFullScreen
                    ></iframe>
                  ) : (
                      
                    <p>{latestPost.content}</p>
                  )
                ) : (
                  <p></p>
                )}
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
              <div className="follower-count" style={{ color: social.color }}>
                {count.toLocaleString()}+
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Media2;
