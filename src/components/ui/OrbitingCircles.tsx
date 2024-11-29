import React from 'react';

interface OrbitingCirclesProps {
  radius: number;
  duration: number;
  reverse?: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  radius,
  duration,
  reverse = false,
  delay = 0,
  className = '',
  children,
}) => {
  const orbitingStyle = {
    animation: `orbiting ${duration}s linear infinite`,
    animationDelay: `${delay}s`,
    transformOrigin: `center center -${radius}px`,
    animationDirection: reverse ? 'reverse' : 'normal',
  };

  return (
    <div
      className={`orbiting-circle ${className}`}
      style={orbitingStyle}
    >
      {children}
    </div>
  );
};

export default OrbitingCircles;
