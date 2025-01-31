import { useState } from 'react';
import './Terms.css';

function Terms() {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [borderHighlight, setBorderHighlight] = useState([]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;

    // Calculate border proximity
    const borderThreshold = 100; // pixels from border to trigger highlight
    const fromTop = y;
    const fromBottom = rect.height - y;
    const fromLeft = x;
    const fromRight = rect.width - x;

    // Calculate which borders should be highlighted
    const highlightedBorders = [];

    if (fromTop < borderThreshold) highlightedBorders.push('top');
    if (fromBottom < borderThreshold) highlightedBorders.push('bottom');
    if (fromLeft < borderThreshold) highlightedBorders.push('left');
    if (fromRight < borderThreshold) highlightedBorders.push('right');

    setBorderHighlight(highlightedBorders);
    setTransform({ x: rotateX, y: rotateY });
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
    setMousePosition({ x: 0, y: 0 });
    setBorderHighlight([]);
  };

  const getBorderClasses = () => {
    const classes = ['terms-card'];
    borderHighlight.forEach(border => {
      classes.push(`border-highlight-${border}`);
    });
    return classes.join(' ');
  };

  return (
    <div className="terms-container">
      <div 
        className={getBorderClasses()}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(10000px) rotateX(${transform.x}deg) rotateY(${transform.y}deg)`
        }}
      >
        <div 
          className="glow-effect"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            opacity: mousePosition.x && mousePosition.y ? 1 : 0
          }}
        />
        <h1 className="main-heading bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-4xl font-bold text-center py-8 mb-10 mt-2 Previous">
          TERMS AND CONDITIONS 
        </h1>
        
        <div className="terms-content">
          <div className="terms-left">
            <section>
              <h2>Age Limit</h2>
              {/* <p>Any person above the age of 13 is allowed to join us for Vishwapreneur'24</p> */}
              <ul className="list-disc pl-5 space-y-2">
                <li>Any person above the age of 13 is allowed to join us for Vishwapreneur'24</li>
              </ul>
            </section>

            <section>
              <h2>Privacy Policy</h2>
              {/* <p>By registering for Vishwapreneur'24, you consent to the collection and use of this information as set forth.</p> */}
              <ul className="list-disc pl-5 space-y-2">
                <li>By registering for Vishwapreneur'24, you consent to the collection and use of this information as set forth.</li>
              </ul>
            </section>

            <section>
              <h2>Advertisements & Promotions</h2>
              {/* <p>This website may contain links to third-party websites, products, or services, which may be posted by our affiliates, our partners, or our sponsor any kind of promotion regarding them is not allowed.</p> */}
              <ul className="list-disc pl-5 space-y-2">
                <li>This website may contain links to third-party websites, products, or services, which may be posted by our affiliates, our partners, or our sponsor. Any kind of promotion regarding them is not allowed.</li>
              </ul>
            </section>

            <section>
              <h2>Ticket Booking Policy</h2>
              {/* <p>Once you book a seat for this event, it can not be cancelled under any circumstances and any request for fare refund will not be entertained.</p> */}
              <ul className="list-disc pl-5 space-y-2">
                <li>Once you book a seat for this event, it cannot be cancelled under any circumstances, and any request for fare refund will not be entertained.</li>
              </ul>
            </section>
          </div>

          <div className="terms-right">
            <h2>Following actions are impermissible</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the information in any manner that could interfere with, disable, disrupt, overburden, or otherwise impair the Service</li>
              <li>Use the website in any manner that we reasonably believe to be an abuse of or fraud on any payment system.</li>
              <li>Access, search, or collect data about Vishwapreneur by any means (automated or otherwise) except as permitted in these Terms or in a separate agreement with EDC VIIT.</li>
              <li>Any political comment will not be tolerated regarding Vishwapreneur.</li>
              <li>Legal actions will be taken if any kind of malpractice is found.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;