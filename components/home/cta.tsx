"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function CTA() {
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
    <section id="cta" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-foreground text-background p-12 md:p-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Start your next idea on Scribbly
            </h2>
            <p className="text-xl text-background/70 mb-10 max-w-xl mx-auto">
              Join thousands of teams turning chaos into clarity. Free to start, visualize your ideas in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="px-8 py-4 bg-background text-foreground rounded-full font-medium text-lg hover:opacity-90 transition-all hover:scale-105">
                Create Your Board
              </Link>
              <Link href="/docs" className="px-8 py-4 bg-transparent border-2 border-background/30 text-background rounded-full font-medium text-lg hover:bg-background/10 transition-all hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
