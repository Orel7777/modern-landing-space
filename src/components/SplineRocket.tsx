
import React, { useEffect } from 'react';

interface SplineRocketProps {
  className?: string;
  flipped?: boolean;
}

const SplineRocket: React.FC<SplineRocketProps> = ({ className = "", flipped = false }) => {
  useEffect(() => {
    // Load the Spline viewer script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.74/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div 
      className={`${className} overflow-hidden ${flipped ? 'scale-x-[-1]' : ''}`} 
      style={{ height: '120px', width: '120px' }}
    >
      {/* @ts-ignore - Custom element */}
      <spline-viewer 
        url="https://prod.spline.design/2Jcs2gZ4UmQH7bVZ/scene.splinecode" 
        loading-anim
        background="transparent"
        hide-ui="true"
      />
    </div>
  );
};

export default SplineRocket;
