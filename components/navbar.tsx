"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";
import Link from "next/link";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </a>
          </div>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <MoonIcon className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <SunIcon className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            )}
            <Link
              href="/signin"
              className="hidden sm:block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
