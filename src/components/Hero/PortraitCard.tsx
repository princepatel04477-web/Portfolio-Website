import React, { useRef } from 'react';
import princeImage from '../../assets/Prince.png';

interface PortraitCardProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  innerRef: React.RefObject<HTMLDivElement | null>;
  onMouseEnterSheen?: () => void;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({ 
  cardRef, 
  innerRef, 
  onMouseEnterSheen 
}) => {
  const tiltWrapperRef = useRef<HTMLDivElement>(null);

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 1024) return;
    const card = tiltWrapperRef.current;
    if (!card) return;

    const rect = rectRef.current || card.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X inside card
    const y = e.clientY - rect.top;  // cursor Y inside card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation: Normalize from -1 to 1, then scale to max 8deg tilt
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    // Apply values to CSS variables for GPU-friendly styling
    card.style.setProperty('--tilt-x', `${rotateX}deg`);
    card.style.setProperty('--tilt-y', `${rotateY}deg`);

    // Track coordinates inside card for spotlight glow overlay
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.setProperty('--glow-x', `${glowX}%`);
    card.style.setProperty('--glow-y', `${glowY}%`);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth <= 1024) return;
    const card = tiltWrapperRef.current;
    if (card) {
      rectRef.current = card.getBoundingClientRect(); // Cache bounding box on enter
      card.classList.add('is-hovering');
      card.style.setProperty('--tilt-scale', '1.02');
      card.style.setProperty('--glow-opacity', '1');
    }
    if (onMouseEnterSheen) {
      onMouseEnterSheen();
    }
  };

  const handleMouseLeave = () => {
    const card = tiltWrapperRef.current;
    if (card) {
      rectRef.current = null; // Clear cache on exit
      card.classList.remove('is-hovering');
      // Reset properties back to neutral (CSS transition will interpolate)
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--tilt-scale', '1');
      card.style.setProperty('--glow-opacity', '0');
    }
  };

  return (
    <div className="portrait-card-wrapper">
      <div className="parallax-inner" ref={innerRef as React.RefObject<HTMLDivElement>}>
        
        {/* Layer 1: Float Wrapper (CSS Animation) */}
        <div className="float-wrapper">
          
          {/* Orbiting Ring Back */}
          <div className="orbiting-ring orbiting-ring-bg" />
          
          {/* Layer 2: Tilt Wrapper */}
          <div 
            className="tilt-wrapper"
            ref={tiltWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Layer 3: The actual card */}
            <div 
              className="portrait-card" 
              ref={cardRef as React.RefObject<HTMLDivElement>}
            >
              {/* Dynamic spotlight glow overlay */}
              <div className="portrait-glow-overlay" />
              
              {/* Card Front Face */}
              <div className="scroll-card-face scroll-card-front">
                <div className="portrait-glass-reflection" />
                <div className="portrait-sheen-sweep" />
                <div className="portrait-card-glow" />
                
                {/* Top Left Availability Indicator */}
                <div className="portrait-card-overlay-top">
                  <span className="status-dot"></span>
                  <span className="status-text">Available for Projects</span>
                </div>
                
                <img 
                  src={princeImage} 
                  alt="Prince Patel Portrait" 
                  className="portrait-image"
                />

                {/* Bottom Left Name and Roles */}
                <div className="portrait-card-overlay-bottom">
                  <h3 className="card-overlay-name">Prince Patel</h3>
                  <p className="card-overlay-role">AI Engineer • Designer • Developer</p>
                </div>
              </div>
              
              {/* Card Back Face */}
              <div className="scroll-card-face scroll-card-back">
                <div className="dark-card-overlay">
                  <span className="overlay-name">Prince Patel</span>
                  <span className="overlay-role">AI Engineer &amp; CTO</span>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Orbiting Ring Front */}
          <div className="orbiting-ring-two orbiting-ring-fg" />
          
        </div>
        
      </div>
    </div>
  );
};

export default PortraitCard;
