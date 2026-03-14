"use client";

import { useState } from "react";
import { BoardCard } from "./board-card";

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

// Mock board data
const mockBoards = [
  { id: 1, title: "Q1 Marketing Strategy", lastEdited: "2 hours ago", collaborators: [{ initials: "AB", color: "bg-blue-500" }, { initials: "CD", color: "bg-purple-500" }] },
  { id: 2, title: "Product Roadmap 2024", lastEdited: "Yesterday", collaborators: [{ initials: "JD", color: "bg-pink-500" }] },
  { id: 3, title: "Design System Update", lastEdited: "3 days ago", collaborators: [{ initials: "SK", color: "bg-emerald-500" }, { initials: "MK", color: "bg-yellow-500" }, { initials: "LR", color: "bg-red-500" }] },
  { id: 4, title: "Sprint Planning", lastEdited: "5 hours ago", collaborators: [{ initials: "TP", color: "bg-indigo-500" }] },
  { id: 5, title: "User Research Insights", lastEdited: "1 week ago", collaborators: [{ initials: "EC", color: "bg-cyan-500" }, { initials: "NB", color: "bg-orange-500" }] },
  { id: 6, title: "Brand Guidelines", lastEdited: "2 weeks ago", collaborators: [{ initials: "RH", color: "bg-lime-500" }] },
];

// Mock activity data
const mockActivity = [
  { id: 1, user: "Alice Brown", action: "edited", board: "Q1 Marketing Strategy", timestamp: "2 hours ago" },
  { id: 2, user: "Charlie Davis", action: "created", board: "Sprint Planning", timestamp: "5 hours ago" },
  { id: 3, user: "Sarah Kim", action: "commented on", board: "Design System Update", timestamp: "Yesterday" },
  { id: 4, user: "Mike Kumar", action: "shared", board: "Product Roadmap 2024", timestamp: "2 days ago" },
  { id: 5, user: "Emma Chen", action: "edited", board: "User Research Insights", timestamp: "1 week ago" },
];

export function DashboardContent() {
  const [boards, setBoards] = useState(mockBoards);

  return (
    <main className="flex-1 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Your Boards</h1>
          <p className="text-muted-foreground">Create and manage your brainstorming spaces</p>
        </div>

        {/* New Board Button */}
        <div className="mb-8 flex gap-4">
          <button className="group px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            New Board
          </button>
        </div>

        {/* Boards Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Create New Board Card */}
            <div className="h-40 rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-card/30 hover:bg-card/60 transition-all duration-300 flex items-center justify-center cursor-pointer group">
              <div className="text-center">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <PlusIcon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="font-semibold text-foreground text-sm">Create New Board</p>
              </div>
            </div>

            {/* Board Cards */}
            {boards.map((board, idx) => (
              <div
                key={board.id}
                style={{
                  animationDelay: `${idx * 75}ms`,
                }}
                className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              >
                <BoardCard
                  title={board.title}
                  lastEdited={board.lastEdited}
                  collaborators={board.collaborators}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
          <div className="space-y-3">
            {mockActivity.map((activity) => (
              <div
                key={activity.id}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/20 hover:bg-card/60 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
                    <span className="font-semibold text-primary group-hover:underline cursor-pointer">
                      {activity.board}
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <ClockIcon className="w-3 h-3" />
                    {activity.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Boards</p>
                <p className="text-3xl font-bold text-foreground">{boards.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <PlusIcon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Recent Edits</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Collaborators</p>
                <p className="text-3xl font-bold text-foreground">8</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
