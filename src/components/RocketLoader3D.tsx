
import React from 'react';

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
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <iframe 
        src='https://my.spline.design/rocket-aed46de1424c318548d6d0fe21224612/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        title="3D Rocket"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default RocketLoader3D;
