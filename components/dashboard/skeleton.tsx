"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function DashboardHeaderSkeleton() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-border bg-background">
      <div className="flex items-center gap-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-5 w-48 rounded-full" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
}

export function DashboardSidebarSkeleton() {
  return (
    <aside className="w-64 border-r border-border bg-card">
      <div className="p-6 space-y-6">
        <Skeleton className="h-10 w-32 rounded-full" />

        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-lg" />
          ))}
        </div>

        <div className="pt-4 border-t border-border space-y-4">
          <Skeleton className="h-8 w-24 text-xs text-muted-foreground" />
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </aside>
  );
}

export function DashboardGridSkeleton() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <Skeleton className="h-10 w-48 mb-2" />
          <Skeleton className="h-5 w-80" />
        </div>

        {/* Search and filters */}
        <div className="flex gap-4 mb-8">
          <Skeleton className="flex-1 h-10 rounded-lg max-w-md" />
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Skeleton className="h-8 w-8 rounded-lg flex-shrink-0" />
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>

              <div className="flex gap-2 pt-2">
                <Skeleton className="flex-1 h-8 rounded-lg" />
                <Skeleton className="flex-1 h-8 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardContainerSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeaderSkeleton />
      <div className="flex">
        <DashboardSidebarSkeleton />
        <DashboardGridSkeleton />
      </div>
    </div>
  );
}

export function EmptyStateSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 py-12">
      <Skeleton className="h-16 w-16 rounded-full mb-4" />
      <Skeleton className="h-6 w-48 mb-2" />
      <Skeleton className="h-4 w-64 mb-8" />
      <Skeleton className="h-10 w-32 rounded-full" />
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="animate-spin">
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
    </div>
  );
}
