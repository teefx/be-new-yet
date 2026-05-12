"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "./utils";

interface MinMax {
  min: number;
  max: number;
}

export interface FireworksBackgroundProps extends React.ComponentProps<"div"> {
  population?: number;
  color?: string | string[];
  fireworkSpeed?: number | MinMax;
  fireworkSize?: number | MinMax;
  particleSpeed?: number | MinMax;
  particleSize?: number | MinMax;
  canvasProps?: React.ComponentProps<"canvas">;
}

export function FireworksBackground({
  population = 1,
  color,
  fireworkSpeed = { min: 4, max: 8 },
  fireworkSize = { min: 2, max: 5 },
  particleSpeed = { min: 2, max: 7 },
  particleSize = { min: 1, max: 5 },
  canvasProps,
  className,
  ...props
}: FireworksBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const fireworks: Firework[] = [];
    const particles: Particle[] = [];

    const getVal = (val: number | MinMax) =>
      typeof val === "number"
        ? val
        : Math.random() * (val.max - val.min) + val.min;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number = 1;
      decay: number;

      constructor(x: number, y: number, pColor: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = getVal(particleSpeed);
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = getVal(particleSize);
        this.color = pColor;
        this.decay = Math.random() * 0.015 + 0.015;
      }
      update() {
        this.vx *= 0.92;
        this.vy *= 0.92;
        this.vy += 0.1; // gravity
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }
      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.alpha;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.restore();
      }
    }

    class Firework {
      x: number;
      y: number;
      startX: number;
      startY: number;
      targetX: number;
      targetY: number;
      distanceToTarget: number;
      distanceTraveled: number = 0;
      vx: number;
      vy: number;
      color: string;
      size: number;
      exploded: boolean = false;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.startX = this.x;
        this.startY = this.y;
        this.targetX = this.x + (Math.random() * 200 - 100);
        this.targetY = Math.random() * (canvas.height / 2);

        const colors = Array.isArray(color)
          ? color
          : color
            ? [color]
            : ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        const speed = getVal(fireworkSpeed);
        this.size = getVal(fireworkSize);

        const angle = Math.atan2(
          this.targetY - this.startY,
          this.targetX - this.startX,
        );
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.distanceToTarget = Math.hypot(
          this.targetX - this.startX,
          this.targetY - this.startY,
        );
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.distanceTraveled = Math.hypot(
          this.x - this.startX,
          this.y - this.startY,
        );
        if (this.distanceTraveled >= this.distanceToTarget) {
          this.exploded = true;
        }
      }
      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Firework spawn rate based on population
      if (Math.random() < 0.03 * population) {
        fireworks.push(new Firework());
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw(ctx);
        if (fireworks[i].exploded) {
          for (let j = 0; j < 50; j++) {
            particles.push(
              new Particle(fireworks[i].x, fireworks[i].y, fireworks[i].color),
            );
          }
          fireworks.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    population,
    color,
    fireworkSpeed,
    fireworkSize,
    particleSpeed,
    particleSize,
  ]);

  return (
    <div className={cn("relative", className)} {...props}>
      <canvas
        ref={canvasRef}
        className={cn("block w-full h-full", canvasProps?.className)}
        {...canvasProps}
      />
    </div>
  );
}
