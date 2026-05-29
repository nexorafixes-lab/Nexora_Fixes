"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  tags: string[];
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const rotationRef = useRef(0);
  const isAutoRotatingRef = useRef(true);
  const targetRotationRef = useRef<number | null>(null);
  const suppressNextClickRef = useRef(false);
  const touchStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frameId = 0;
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      let delta = now - lastTime;
      if (delta > 50) delta = 50;
      if (delta < 0) delta = 0;
      lastTime = now;

      if (isAutoRotatingRef.current) {
        rotationRef.current = (rotationRef.current + delta * 0.003) % 360;
        setRotationAngle(Number(rotationRef.current.toFixed(3)));
      } else if (targetRotationRef.current !== null) {
        const  current = rotationRef.current;
        const  target = targetRotationRef.current;

        let diff = (target - current) % 360;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        if (Math.abs(diff) < 0.5) {
          rotationRef.current = target;
          targetRotationRef.current = null;
        } else {
          rotationRef.current = current + diff * (1 - Math.exp(-delta * 0.008));
        }
        setRotationAngle(Number(rotationRef.current.toFixed(3)));
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    return {
      angle,
      zIndex: Math.round(100 + 50 * Math.cos(radian)),
    };
  };

  const toggleItem = (id: number, index: number) => {
    if (activeNodeId === id) {
      setActiveNodeId(null);
      isAutoRotatingRef.current = true;
      targetRotationRef.current = null;
      return;
    }

    const targetAngle = (index / timelineData.length) * 360;

    setActiveNodeId(id);
    isAutoRotatingRef.current = false;
    targetRotationRef.current = 270 - targetAngle;
  };

  return (
    <div className="relative aspect-square w-full min-w-[300px] max-w-[640px] overflow-visible [container-type:inline-size]">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={
          {
            "--orbit-size": "clamp(290px, 82cqw, 530px)",
            "--orbit-radius": "calc(var(--orbit-size) * 0.42)",
          } as React.CSSProperties
        }
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(var(--orbit-size)*1.04)] w-[calc(var(--orbit-size)*1.04)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.82)_34%,rgba(0,0,0,0.42)_62%,rgba(0,0,0,0)_78%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(var(--orbit-size)*0.84)] w-[calc(var(--orbit-size)*0.84)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,176,0,0.16)_0%,rgba(255,122,0,0.08)_36%,transparent_68%)] blur-xl" />

        <div className="absolute z-10 flex h-[calc(var(--orbit-size)*0.16)] min-h-16 w-[calc(var(--orbit-size)*0.16)] min-w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-1 via-primary-2 to-secondary shadow-[0_0_44px_rgba(255,122,0,0.12)]">
          <div className="absolute h-[calc(var(--orbit-size)*0.2)] w-[calc(var(--orbit-size)*0.2)] animate-ping rounded-full border border-secondary-2/80 opacity-70" />
          <div
            className="absolute h-[calc(var(--orbit-size)*0.26)] w-[calc(var(--orbit-size)*0.26)] animate-ping rounded-full border border-primary-2/30 opacity-50"
            style={{ animationDelay: "0.5s" }}
          />
          <div className="grid h-[calc(var(--orbit-size)*0.1)] min-h-10 w-[calc(var(--orbit-size)*0.1)] min-w-10 place-items-center rounded-full bg-black/90 backdrop-blur-md">
            <Image src="/assets/icon.png" alt="Nexora icon" width={24} height={24} />
          </div>
        </div>

        <div className="absolute h-[calc(var(--orbit-size)*0.7)] w-[calc(var(--orbit-size)*0.7)] rounded-full border border-primary-2/50 shadow-[0_0_22px_rgba(255,154,0,0.1),inset_0_0_22px_rgba(255,154,0,0.12)]" />
        <div className="absolute h-[var(--orbit-size)] w-[var(--orbit-size)] rounded-full border border-primary-2/30 shadow-[0_0_34px_rgba(255,154,0,0.35),inset_0_0_28px_rgba(255,154,0,0.1)]" />

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const Icon = item.icon;
          const isActive = activeNodeId === item.id;

          const nodeStyle = {
            transform: `rotate(${position.angle}deg) translateX(var(--orbit-radius)) rotate(${-position.angle}deg)`,
            zIndex: isActive ? 200 : position.zIndex,
          };

          return (
            <div
              key={item.id}
              className="absolute h-0 w-0 touch-manipulation select-none"
              style={nodeStyle}
            >
              <button
                type="button"
                aria-expanded={isActive}
                aria-label={`Open ${item.title}`}
                className="absolute left-0 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full outline-none"
                onTouchStart={(event) => {
                  const touch = event.changedTouches[0];
                  touchStartRef.current = { x: touch.clientX, y: touch.clientY };
                }}
                onTouchEnd={(event) => {
                  const touch = event.changedTouches[0];
                  const dx = touch.clientX - touchStartRef.current.x;
                  const dy = touch.clientY - touchStartRef.current.y;

                  if (Math.hypot(dx, dy) > 14) return;

                  event.preventDefault();
                  event.stopPropagation();
                  suppressNextClickRef.current = true;
                  toggleItem(item.id, index);
                }}
                onClick={(event) => {
                  event.stopPropagation();

                  if (suppressNextClickRef.current) {
                    suppressNextClickRef.current = false;
                    return;
                  }

                  toggleItem(item.id, index);
                }}
              >
                <span
                  className={`pointer-events-none absolute rounded-full ${isActive ? "animate-pulse" : ""
                    }`}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,154,0,0.32) 0%, rgba(255,75,0,0) 70%)",
                    width: `${item.energy * 0.5 + 42}px`,
                    height: `${item.energy * 0.5 + 42}px`,
                  }}
                />

                <span
                  className={`
                    relative flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all duration-300
                    ${isActive
                      ? "scale-150 border-2 border-secondary-1 shadow-lg shadow-secondary/40"
                      : "border border-secondary-1/60"
                    }
                  `}
                >
                  <Icon size={17} />
                </span>
              </button>

              {!isActive && (
                <div className="pointer-events-none absolute left-0 top-7 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wider text-white transition-all duration-300">
                  {item.title}
                </div>
              )}

              {isActive && (
                <Card className="absolute left-0 top-16 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 overflow-visible border-primary-1/30 bg-[radial-gradient(circle_at_50%_0%,rgba(255,75,0,0.18),rgba(0,0,0,0.96)_38%,rgba(0,0,0,0.92)_100%)] backdrop-blur-lg">
                  <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-secondary/60" />
                  <CardHeader className="p-5 pb-2">
                    <div className="flex items-center justify-between">
                      <Badge className="border-transparent bg-gradient-to-r from-primary-2 to-secondary-1 px-3 py-1 text-xs text-background shadow-[0_0_18px_rgba(255,154,0,0.25)] hover:from-primary-2 hover:to-secondary-1">
                        {item.title}
                      </Badge>
                      <span className="font-mono text-xs text-white/50">
                        {item.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 text-sm text-white/80">
                    <p className="leading-6">{item.content}</p>

                    <div className="mt-4 border-t border-white/10 pt-3">
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <Zap size={10} className="mr-1 text-secondary" />
                          Impact Level
                        </span>
                        <span className="font-mono">{item.energy}%</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-primary-1 to-secondary"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
                      {item.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary-1/25 bg-primary-1/10 px-2.5 py-1 text-xs font-semibold text-accent-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
