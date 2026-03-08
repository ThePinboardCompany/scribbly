"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function FloatingShape({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function WhiteboardIllustration() {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
        {/* Toolbar */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/20">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1" />
          <div className="flex gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white/40 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="relative h-48 bg-white/5 rounded-xl overflow-hidden">
          {/* Sticky notes */}
          <div
            className="absolute top-3 left-3 w-20 h-20 bg-yellow-300/90 rounded-lg shadow-lg p-2 rotate-[-3deg] animate-float"
            style={{ animationDelay: "0s" }}
          >
            <div className="w-full h-1.5 bg-yellow-500/50 rounded mb-1.5" />
            <div className="w-3/4 h-1.5 bg-yellow-500/50 rounded" />
          </div>

          <div
            className="absolute top-6 right-6 w-20 h-20 bg-pink-300/90 rounded-lg shadow-lg p-2 rotate-[2deg] animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-full h-1.5 bg-pink-500/50 rounded mb-1.5" />
            <div className="w-2/3 h-1.5 bg-pink-500/50 rounded" />
          </div>

          <div
            className="absolute bottom-6 left-1/4 w-24 h-20 bg-blue-300/90 rounded-lg shadow-lg p-2 rotate-[1deg] animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-1.5 bg-blue-500/50 rounded mb-1.5" />
            <div className="w-4/5 h-1.5 bg-blue-500/50 rounded" />
          </div>

          {/* Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 65 50 Q 110 30 130 65"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4"
              className="animate-dash"
            />
            <path
              d="M 150 85 Q 165 115 135 135"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4"
              className="animate-dash"
            />
          </svg>

          {/* Shapes */}
          <div className="absolute bottom-3 right-3 w-12 h-12 border-2 border-white/50 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-10 h-10 border-2 border-white/50 rotate-45" />
        </div>

        {/* Avatars */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/20">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white/20">
              A
            </div>
            <div className="w-7 h-7 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white/20">
              B
            </div>
            <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white/20">
              C
            </div>
          </div>
          <span className="text-sm text-white/80">3 collaborating now</span>
        </div>
      </div>
    </div>
  );
}

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.3),transparent_50%)]" />

      {/* Floating shapes */}
      <FloatingShape
        className="w-64 h-64 bg-white/5 rounded-full blur-3xl top-20 left-10"
        delay={0}
      />
      <FloatingShape
        className="w-96 h-96 bg-purple-400/10 rounded-full blur-3xl bottom-20 right-10"
        delay={0.5}
      />
      <FloatingShape
        className="w-48 h-48 bg-pink-400/10 rounded-full blur-3xl top-1/2 left-1/3"
        delay={1}
      />

      {/* Left Section - Desktop Only */}
      <div
        className={`hidden lg:flex flex-1 flex-col justify-center items-center p-12 relative z-10 transition-all duration-700 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="max-w-lg space-y-8">
          <Link href="/" className="text-3xl font-bold text-white">
            Scribbly
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight text-balance">
              Think visually with Scribbly
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              The collaborative whiteboard for teams who brainstorm in sketches,
              sticky notes, and visual connections. Bring your ideas to life
              together in real-time.
            </p>
          </div>

          <WhiteboardIllustration />
        </div>
      </div>

      {/* Right Section - Auth Card */}
      <div
        className={`flex-1 flex items-center justify-center p-6 sm:p-8 relative z-10 transition-all duration-700 delay-150 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Scribbly
            </Link>
          </div>

          {/* Auth Card */}
          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border/50">
            {children}
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
            transform: translateY(-15px);
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
      `}</style>
    </div>
  );
}
