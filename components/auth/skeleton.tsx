"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function AuthLayoutSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-blue-500 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.3),transparent_50%)]" />

      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 relative z-10 opacity-100 translate-x-0">
        <div className="max-w-lg space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-80 bg-white/20" />
            <Skeleton className="h-6 w-96 bg-white/20" />
            <Skeleton className="h-6 w-80 bg-white/20" />
          </div>

          <div className="relative w-full max-w-md">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/20">
                <Skeleton className="h-2.5 w-2.5 rounded-full" />
                <Skeleton className="h-2.5 w-2.5 rounded-full" />
                <Skeleton className="h-2.5 w-2.5 rounded-full" />
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-6 w-6 rounded-md" />
                  ))}
                </div>
              </div>

              <Skeleton className="h-48 w-full rounded-xl" />

              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/20">
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-4 w-32 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 relative z-10 opacity-100 translate-y-0">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border/50">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignInSkeleton() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Skeleton className="h-7 w-48 mx-auto" />
        <Skeleton className="h-4 w-56 mx-auto" />
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="flex justify-end">
          <Skeleton className="h-4 w-32" />
        </div>

        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      <div className="text-center">
        <Skeleton className="h-4 w-48 mx-auto" />
      </div>
    </div>
  );
}

export function SignUpSkeleton() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Skeleton className="h-7 w-56 mx-auto" />
        <Skeleton className="h-4 w-52 mx-auto" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <Skeleton className="h-10 w-full rounded-xl mt-2" />
      </div>

      <div className="text-center">
        <Skeleton className="h-4 w-48 mx-auto" />
      </div>
    </div>
  );
}

export function VerificationSkeleton() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Skeleton className="h-7 w-40 mx-auto" />
        <Skeleton className="h-4 w-56 mx-auto" />
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      <div className="text-center">
        <Skeleton className="h-4 w-40 mx-auto" />
      </div>
    </div>
  );
}
