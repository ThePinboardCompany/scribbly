import type { Metadata } from "next";
import { Suspense } from "react";
import { DashboardContainerSkeleton } from "@/components/dashboard/skeleton";

export const metadata: Metadata = {
  title: "Dashboard - Scribbly",
};

async function DashboardContent() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between p-6 border-b border-border bg-background">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <span className="text-sm text-muted-foreground">Welcome back!</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" />
          <button className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" />
          <button className="h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" />
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 border-r border-border bg-card">
          <div className="p-6 space-y-6">
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors">
              + New Board
            </button>

            <nav className="space-y-2">
              <div className="px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors">
                Recent
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Starred
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Shared
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Archived
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Trash
              </div>
            </nav>

            <div className="pt-4 border-t border-border space-y-2">
              <div className="text-xs text-muted-foreground font-semibold px-4 py-2">
                WORKSPACES
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Personal
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Team
              </div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors rounded-lg">
                Create workspace
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Your Boards
              </h2>
              <p className="text-muted-foreground">
                Create and manage your collaborative whiteboards
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <input
                type="text"
                placeholder="Search boards..."
                className="flex-1 max-w-md px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                Sort
              </button>
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border p-6 space-y-4 hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        Board {i + 1}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Last updated today
                      </p>
                    </div>
                    <button className="h-8 w-8 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        3 collaborators
                      </span>
                      <span className="text-xs font-medium text-primary">
                        Public
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-primary rounded-full" />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                      Open
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardContainerSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}
