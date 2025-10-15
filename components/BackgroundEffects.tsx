import React, { useEffect, useRef } from 'react';

// A classe Particle foi convertida para uma função construtora de JS puro
function Particle(canvas) {
  this.canvas = canvas;
  this.x = Math.random() * this.canvas.width;
  this.y = Math.random() * this.canvas.height;
  this.size = Math.random() * 2 + 1;
  this.speedX = Math.random() * 0.4 - 0.2;
  this.speedY = Math.random() * 0.4 - 0.2;

  this.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.1) this.size -= 0.01;
    
    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
  };

  this.draw = function(ctx, color) {
    ctx.fillStyle = `rgba(${color}, ${this.size / 3})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
}

const BackgroundEffects = ({ activeCampaign }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);

  // Utility to convert hex to rgb
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const neonColor = activeCampaign.colors.neon;
    const rgbColor = hexToRgb(neonColor);
    const particleColor = rgbColor ? `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}` : '255, 255, 255';


    const initParticles = () => {
        particlesRef.current = [];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < numberOfParticles; i++) {
            particlesRef.current.push(new Particle(canvas));
        }
    }
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        particle.update();
        particle.draw(ctx, particleColor);
        if (particle.size <= 0.1) {
          particlesRef.current[i] = new Particle(canvas);
        }
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [activeCampaign.colors.neon]); // Only re-run when the color changes

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-1" />;
};

export default BackgroundEffects;