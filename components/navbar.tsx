"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-foreground">
            Scribbly
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#preview"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </a>
            <a
              href="#cta"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2.5 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
