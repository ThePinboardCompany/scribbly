"use client";

import { useState } from "react";
import Link from "next/link";

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 4l4 2m-2-8l2-1m-2 1l-2-1" />
    </svg>
  );
}

function BoardsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m0 0H3m4 0v4m0-11h4a2 2 0 012 2v4m0 0h4m-4 0v4M9 3v4m4-4v4m4-4v4m-4 4v4m0-11h4a2 2 0 012 2v4" />
    </svg>
  );
}

function SharedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 19H9a6 6 0 016-6h0a6 6 0 016 6v1M6.75 7.756a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TemplatesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "My Boards",
    href: "/dashboard/boards",
    icon: BoardsIcon,
  },
  {
    label: "Shared With Me",
    href: "/dashboard/shared",
    icon: SharedIcon,
  },
  {
    label: "Templates",
    href: "/dashboard/templates",
    icon: TemplatesIcon,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Fixed Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen z-50 border-r border-border bg-card transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border">
            <div className={`text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${isCollapsed ? "hidden" : ""}`}>
              Scribbly
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground"
              aria-label="Toggle sidebar"
            >
              <ChevronDown className={`w-5 h-5 transition-transform ${isCollapsed ? "rotate-90" : "-rotate-90"}`} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                  item.href === "/dashboard"
                    ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          {!isCollapsed && (
            <div className="px-4 py-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                © 2024 Scribbly. Made by The Pinboard Company.
              </p>
            </div>
          )}
        </div>
      </aside>

      {/* Spacer for fixed sidebar */}
      <div className={`transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`} />
    </>
  );
}
