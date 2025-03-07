
import React, { useEffect, useRef } from 'react';

interface RocketLoader3DProps {
  className?: string;
  width?: string;
  height?: string;
}

const RocketLoader3D: React.FC<RocketLoader3DProps> = ({ 
  className = "", 
  width = "100px", 
  height = "100px" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.74/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`} 
      style={{ width, height }}
    >
      <spline-viewer 
        url="https://prod.spline.design/dNkrcQSKbEyaiNHs/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
          pointerEvents: 'none'
        }} 
      />
    </div>
  );
};

export default RocketLoader3D;
