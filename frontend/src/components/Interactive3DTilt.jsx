import React, { useRef, useState, useCallback } from "react";

/**
 * Interactive3DTilt Component
 * Adds realistic GPU-accelerated 3D perspective rotation and specular glare
 * that tracks the user's cursor or touch movement.
 */
export const Interactive3DTilt = ({
  children,
  className = "",
  maxTilt = 12, // Max rotation in degrees
  perspective = 1000,
  scale = 1.02,
  glare = true,
}) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)",
  });

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      // On devices without fine pointer/hover (e.g. phones/tablets), avoid sticky tilt
      if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(hover: hover)").matches) {
        return;
      }
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateX = -percentY * maxTilt;
      const rotateY = percentX * maxTilt;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: "transform 0.1s ease-out",
      });

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          opacity: 0.35,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(196, 164, 218, 0.45) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255,255,255,0) 80%)`,
        });
      }
    },
    [maxTilt, perspective, scale, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
    setGlareStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      onTouchCancel={handleMouseLeave}
      className={`relative preserve-3d will-change-transform ${className}`}
      style={style}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300 z-30"
          style={{
            ...glareStyle,
            borderRadius: "inherit",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Interactive3DTilt;
