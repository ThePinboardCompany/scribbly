"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-48 rounded-full" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-5/6" />
            </div>
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-48 rounded-full" />
              <Skeleton className="h-12 w-48 rounded-full" />
            </div>
          </div>

          {/* Right content - Illustration placeholder */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="relative bg-card rounded-2xl border border-border p-6 space-y-4">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-3 rounded-full" />
                <div className="flex-1" />
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-8 rounded-lg" />
                  ))}
                </div>
              </div>
              <Skeleton className="h-64 w-full rounded-xl" />
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSkeleton() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-8 bg-card rounded-2xl border border-border space-y-4"
            >
              <Skeleton className="h-14 w-14 rounded-2xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreviewSkeleton() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>

        <div className="relative">
          {/* Main preview container */}
          <div className="relative bg-card rounded-3xl border border-border overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex gap-2">
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-3 w-3 rounded-full" />
                </div>
                <Skeleton className="h-4 w-48 ml-4" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-8 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-8 w-20 rounded-lg" />
              </div>
            </div>

            {/* Canvas area */}
            <Skeleton className="h-125 w-full rounded-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASkeleton() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-12 md:p-20">
          <div className="relative text-center max-w-3xl mx-auto space-y-8">
            <Skeleton className="h-12 w-full bg-background/20" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-background/20" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48 rounded-full bg-background/20" />
              <Skeleton className="h-12 w-48 rounded-full bg-background/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
