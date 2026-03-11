"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function FloatingShape({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function DecorativeElements() {
  return (
    <>
      {/* Sticky Notes */}
      <FloatingShape
        className="top-1/4 left-8 w-16 h-16 bg-yellow-300/40 rounded-lg shadow-md p-2 rotate-[-8deg]"
        delay={0}
      >
        <div className="w-full h-1 bg-yellow-400/60 rounded mb-1" />
        <div className="w-3/4 h-1 bg-yellow-400/60 rounded" />
      </FloatingShape>

      <FloatingShape
        className="top-1/3 right-12 w-14 h-14 bg-pink-300/40 rounded-lg shadow-md p-1.5 rotate-[5deg]"
        delay={0.3}
      >
        <div className="w-full h-1 bg-pink-400/60 rounded mb-1" />
        <div className="w-2/3 h-1 bg-pink-400/60 rounded" />
      </FloatingShape>

      <FloatingShape
        className="bottom-1/3 left-1/4 w-12 h-12 bg-blue-300/40 rounded-lg shadow-md p-1 rotate-2"
        delay={0.6}
      >
        <div className="w-full h-0.5 bg-blue-400/60 rounded" />
      </FloatingShape>

      {/* Arrows */}
      <div className="absolute top-1/2 left-1/3 text-2xl text-primary/30 animate-float" style={{ animationDelay: "0.2s" }}>
        →
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-2xl text-accent/30 animate-float" style={{ animationDelay: "0.5s" }}>
        ↗
      </div>

      {/* Shapes */}
      <FloatingShape
        className="bottom-1/4 right-1/4 w-20 h-20 border-2 border-primary/20 rounded-full"
        delay={0.4}
      />
      <FloatingShape
        className="top-1/4 right-1/3 w-16 h-16 border-2 border-accent/20 rotate-45"
        delay={0.7}
      />

      {/* Connector lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <path
          d="M 100 200 Q 200 150 300 250"
          stroke="rgba(124, 58, 237, 0.1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4"
          className="animate-dash"
        />
        <path
          d="M 600 300 Q 500 350 400 320"
          stroke="rgba(236, 72, 153, 0.1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4"
          className="animate-dash"
        />
      </svg>
    </>
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-blue-500 to-pink-500 animate-gradient-shift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.2),transparent_50%)]" />

      {/* Floating background shapes */}
      <FloatingShape
        className="w-72 h-72 bg-white/5 rounded-full blur-3xl top-10 left-1/4"
        delay={0}
      />
      <FloatingShape
        className="w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -bottom-20 right-20"
        delay={0.5}
      />
      <FloatingShape
        className="w-52 h-52 bg-pink-400/10 rounded-full blur-3xl top-1/2 -left-10"
        delay={1}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DecorativeElements />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <div
          className={`text-center space-y-6 max-w-lg transition-all duration-700 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white text-balance leading-tight" style={{textShadow: '0 0 0px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)'}}>
            Something went wrong
          </h1>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-xl text-white text-balance leading-relaxed" style={{textShadow: '0 0 20px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.5)'}}>
              An unexpected error occurred while loading this page.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/">
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold text-base hover:bg-white/95 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg">
                Go to Homepage
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="px-8 py-3 bg-white/20 text-white border-2 border-white/80 rounded-full font-semibold text-base hover:bg-white/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto" style={{textShadow: '0 0 12px rgba(0, 0, 0, 0.6)'}}>
                Open Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        :global(.animate-dash) {
          animation: dash 1s linear infinite;
        }
        @keyframes gradient-shift {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
