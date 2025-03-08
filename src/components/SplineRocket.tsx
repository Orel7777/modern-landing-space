
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
    
    // Enhanced watermark removal - extremely aggressive approach
    const style = document.createElement('style');
    style.textContent = `
      .spline-watermark, 
      [data-tippy-root],
      .tippy-box,
      spline-viewer::part(watermark),
      spline-viewer::shadow(.spline-watermark),
      spline-viewer .spline-watermark {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        position: absolute !important;
        z-index: -9999 !important;
        clip: rect(0, 0, 0, 0) !important;
        margin: -1px !important;
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);
    
    // Add a small delay to apply additional cleanup
    const timeoutId = setTimeout(() => {
      const watermarks = document.querySelectorAll('.spline-watermark, [data-tippy-root], .tippy-box');
      watermarks.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.remove();
        }
      });
    }, 500);
    
    return () => {
      // Clean up
      document.body.removeChild(script);
      document.head.removeChild(style);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <div 
      className={`${className} overflow-hidden ${flipped ? 'scale-x-[-1]' : ''}`} 
      style={{ height: '180px', width: '180px' }}
    >
      {/* @ts-ignore - Custom element */}
      <spline-viewer 
        url="https://prod.spline.design/2Jcs2gZ4UmQH7bVZ/scene.splinecode" 
        loading-anim
        background="transparent"
        hide-ui="true"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default SplineRocket;
