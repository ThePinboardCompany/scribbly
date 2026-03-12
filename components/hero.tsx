"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


function FloatingElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function WhiteboardIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative bg-card rounded-2xl shadow-2xl p-6 border border-border">
        {/* Toolbar */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1" />
          <div className="flex gap-2">
            {["pencil", "square", "circle", "text"].map((tool) => (
              <div
                key={tool}
                className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-muted-foreground/30 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Canvas area */}
        <div className="relative h-64 bg-muted rounded-xl overflow-hidden">
          {/* Sticky notes */}
          <FloatingElement
            delay={0}
            className="absolute top-4 left-4 w-24 h-24 bg-yellow-200 rounded-lg shadow-md p-3 -rotate-3"
          >
            <div className="w-full h-2 bg-yellow-400/50 rounded mb-2" />
            <div className="w-3/4 h-2 bg-yellow-400/50 rounded" />
          </FloatingElement>

          <FloatingElement
            delay={0.5}
            className="absolute top-8 right-8 w-24 h-24 bg-pink-200 rounded-lg shadow-md p-3 rotate-2"
          >
            <div className="w-full h-2 bg-pink-400/50 rounded mb-2" />
            <div className="w-2/3 h-2 bg-pink-400/50 rounded" />
          </FloatingElement>

          <FloatingElement
            delay={1}
            className="absolute bottom-8 left-1/4 w-28 h-24 bg-blue-200 rounded-lg shadow-md p-3 rotate-1"
          >
            <div className="w-full h-2 bg-blue-400/50 rounded mb-2" />
            <div className="w-4/5 h-2 bg-blue-400/50 rounded" />
          </FloatingElement>

          {/* Connectors */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <path
              d="M 80 60 Q 140 40 160 80"
              stroke="#7c3aed"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4"
              className="animate-dash"
            />
            <path
              d="M 180 100 Q 200 140 160 170"
              stroke="#ec4899"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4"
              className="animate-dash"
            />
          </svg>

          {/* Shapes */}
          <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-primary rounded-full opacity-60" />
          <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-accent rotate-45 opacity-60" />
        </div>

        {/* Collaboration avatars */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium ring-2 ring-card">
              A
            </div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-medium ring-2 ring-card">
              B
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium ring-2 ring-card">
              C
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            3 collaborating now
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Scribbly is still Under Development!
              </span>
              <Link href="/changelog" className="text-sm text-primary hover:underline cursor-pointer">
                Learn more
              </Link>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Think Visually.
              <br />
              <span className="text-primary">Brainstorm Faster.</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              The collaborative online whiteboard designed to help teams and individuals brainstorm, plan, and visualize ideas in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up" className="px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg hover:opacity-90 transition-all hover:scale-105">
                Start Brainstorming
              </Link>
              <Link href="/docs" className="px-8 py-4 bg-transparent border-2 border-border text-foreground rounded-full font-medium text-lg hover:bg-secondary transition-all hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <WhiteboardIllustration />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotate, 0deg));
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
