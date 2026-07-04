import React, { useState, useEffect } from 'react';

const LiveClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      try {
        const timeString = new Date().toLocaleTimeString('en-US', options);
        setCurrentTime(`${timeString} GMT+5:30`);
      } catch (e) {
        const now = new Date();
        const hrs = String(now.getUTCHours() + 5).padStart(2, '0');
        const mins = String(now.getUTCMinutes() + 30).padStart(2, '0');
        setCurrentTime(`${hrs}:${mins} GMT+5:30`);
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return <span className="hero-location">Surat, India — {currentTime}</span>;
};

export default React.memo(LiveClock);
