"use client";

import { useEffect, useRef, useState } from "react";

export function Preview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="preview" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            See Scribbly in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A canvas that adapts to how you think. Collaborate without limits.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main preview container */}
          <div className="relative bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-muted-foreground ml-4">
                  Team Brainstorm - Q1 Planning
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["bg-primary", "bg-accent", "bg-blue-500", "bg-green-500"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-xs font-medium ring-2 ring-card`}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    )
                  )}
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Share
                </button>
              </div>
            </div>

            {/* Side toolbar */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-card rounded-xl shadow-lg border border-border p-2">
              {[
                "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
                "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343",
                "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101",
              ].map((path, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={path}
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Canvas */}
            <div className="relative h-[500px] bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]">
              {/* Sticky notes */}
              <div className="absolute top-12 left-24 w-44 h-36 bg-yellow-100 rounded-lg shadow-lg p-4 rotate-[-2deg] hover:scale-105 transition-transform cursor-pointer group">
                <div className="font-medium text-yellow-900 mb-2">
                  User Research
                </div>
                <div className="text-sm text-yellow-700 space-y-1">
                  <div className="w-full h-2 bg-yellow-200 rounded" />
                  <div className="w-3/4 h-2 bg-yellow-200 rounded" />
                  <div className="w-5/6 h-2 bg-yellow-200 rounded" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="absolute top-8 left-80 w-44 h-36 bg-pink-100 rounded-lg shadow-lg p-4 rotate-[1deg] hover:scale-105 transition-transform cursor-pointer group">
                <div className="font-medium text-pink-900 mb-2">
                  Design Sprint
                </div>
                <div className="text-sm text-pink-700 space-y-1">
                  <div className="w-full h-2 bg-pink-200 rounded" />
                  <div className="w-2/3 h-2 bg-pink-200 rounded" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="absolute top-48 left-52 w-44 h-36 bg-blue-100 rounded-lg shadow-lg p-4 rotate-[2deg] hover:scale-105 transition-transform cursor-pointer group">
                <div className="font-medium text-blue-900 mb-2">
                  Development
                </div>
                <div className="text-sm text-blue-700 space-y-1">
                  <div className="w-full h-2 bg-blue-200 rounded" />
                  <div className="w-4/5 h-2 bg-blue-200 rounded" />
                  <div className="w-3/4 h-2 bg-blue-200 rounded" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Right side notes */}
              <div className="absolute top-16 right-24 w-48 h-40 bg-card rounded-xl shadow-lg border border-border p-4 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground">Metrics</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completion</span>
                    <span className="font-medium text-foreground">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-24 right-32 w-40 h-32 bg-green-100 rounded-lg shadow-lg p-4 rotate-[-1deg] hover:scale-105 transition-transform cursor-pointer group">
                <div className="font-medium text-green-900 mb-2">Launch</div>
                <div className="text-sm text-green-700 space-y-1">
                  <div className="w-full h-2 bg-green-200 rounded" />
                  <div className="w-1/2 h-2 bg-green-200 rounded" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Connectors */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#7c3aed"
                      className="opacity-60"
                    />
                  </marker>
                </defs>
                <path
                  d="M 240 100 C 280 100, 280 140, 290 180"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                  markerEnd="url(#arrowhead)"
                />
                <path
                  d="M 380 140 C 380 180, 360 200, 340 220"
                  stroke="#ec4899"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                />
              </svg>

              {/* Cursor indicators */}
              <div className="absolute top-32 left-[420px] animate-pulse">
                <div className="relative">
                  <svg
                    className="w-5 h-5 text-primary transform -rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4l16 6-6 2-2 6z" />
                  </svg>
                  <span className="absolute top-4 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs rounded font-medium whitespace-nowrap">
                    Alice
                  </span>
                </div>
              </div>

              <div className="absolute bottom-32 left-[500px] animate-pulse animation-delay-500">
                <div className="relative">
                  <svg
                    className="w-5 h-5 text-accent transform -rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4l16 6-6 2-2 6z" />
                  </svg>
                  <span className="absolute top-4 left-3 px-2 py-1 bg-accent text-accent-foreground text-xs rounded font-medium whitespace-nowrap">
                    Bob
                  </span>
                </div>
              </div>

              {/* Shapes */}
              <div className="absolute bottom-16 left-24 w-24 h-24 border-2 border-dashed border-primary/40 rounded-2xl" />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-accent/40 rounded-full" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
