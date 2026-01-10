import { useEffect, useRef } from 'react';

interface AuroraProps {
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
  amplitude?: number;
  className?: string;
}

const Aurora = ({
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  speed = 0.5,
  blend = 0.5,
  amplitude = 1.0,
  className = "",
}: AuroraProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      timeRef.current += 0.01 * speed;
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Animate color positions
      const offset1 = Math.sin(timeRef.current) * 0.3 + 0.2;
      const offset2 = Math.sin(timeRef.current + 2) * 0.3 + 0.5;
      const offset3 = Math.sin(timeRef.current + 4) * 0.3 + 0.8;
      
      gradient.addColorStop(Math.max(0, Math.min(1, offset1)), colorStops[0]);
      gradient.addColorStop(Math.max(0, Math.min(1, offset2)), colorStops[1]);
      gradient.addColorStop(Math.max(0, Math.min(1, offset3)), colorStops[2]);
      
      // Clear with blend
      ctx.globalAlpha = blend;
      ctx.fillStyle = 'hsl(222, 47%, 8%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw aurora waves
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height * 0.4 + 
            Math.sin(x * 0.005 + timeRef.current + i) * 100 * amplitude +
            Math.sin(x * 0.01 + timeRef.current * 1.5 + i) * 50 * amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorStops, speed, blend, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ background: 'hsl(222, 47%, 8%)' }}
    />
  );
};

export default Aurora;
