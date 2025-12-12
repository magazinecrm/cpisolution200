"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

type ShiningStar = {
  x: number;
  y: number;
  size: number;
  pulse: number;
  pulseSpeed: number;
};

type ParticleBackgroundProps = {
  particleCount?: number;
  starCount?: number;
  starBrightness?: number; // 0..1 multiplier
};

function ParticleBackground({
  particleCount = 150,
  starCount = 8,
  starBrightness = 1,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const shiningStarsRef = useRef<ShiningStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const width = Math.max(1, canvas.clientWidth);
      const height = Math.max(1, canvas.clientHeight);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      // Reset any transform and apply devicePixelRatio once
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;

      particlesRef.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 1.5 + Math.random() * 3.5,
      }));
      shiningStarsRef.current = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 8 + Math.random() * 16,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.04 + Math.random() * 0.06,
      }));
    };

    let running = true;

    const render = () => {
      if (!running) return;

      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;

      // clear using CSS pixels (transform already set)
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const shiningStars = shiningStarsRef.current;

      // small drifting particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // bright blinking stars
      for (const star of shiningStars) {
        star.pulse += star.pulseSpeed;
        const base = (Math.sin(star.pulse) + 1) / 2; // 0..1
        const rawIntensity = (0.5 + base * 0.5) * Math.max(0, starBrightness); // allow >1 but clamp below
        const intensity = Math.min(1, rawIntensity);

        // soft blue star color (visible on light backgrounds)
        const starRGB = `180,200,255`;

        // glow (stronger to ensure visibility on light backgrounds)
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.shadowBlur = star.size * 10;
        ctx.shadowColor = `rgba(${starRGB},${intensity})`;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${starRGB},${intensity})`;
        ctx.arc(star.x, star.y, star.size * (1 + base * 0.6), 0, Math.PI * 2);
        ctx.fill();

        // sparkle cross (slightly brighter center)
        ctx.strokeStyle = `rgba(${starRGB},${Math.min(1, intensity * 1.1)})`;
        ctx.lineWidth = Math.max(1, star.size * 0.18);

        ctx.beginPath();
        ctx.moveTo(star.x - star.size * 2.8, star.y);
        ctx.lineTo(star.x + star.size * 2.8, star.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(star.x, star.y - star.size * 2.8);
        ctx.lineTo(star.x, star.y + star.size * 2.8);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // initial setup
    resize();
    initParticles();
    render();

    window.addEventListener("resize", () => {
      resize();
      // re-init particle positions to fit new size
      initParticles();
    });

    return () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block" }}
      />

      {/* Subtle radial darkening to make stars pop on light backgrounds */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(0,0,0,0.06), transparent 25%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.04), transparent 35%)',
        }}
      />
    </div>
  );
}

export default ParticleBackground;