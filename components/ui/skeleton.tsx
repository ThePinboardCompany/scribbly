/**
 * Skeleton loading component - displays a pulsing placeholder
 * while content is loading
 */

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`bg-muted animate-skeleton rounded-md ${className}`}
    />
  );
}

export function SkeletonText({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-4 w-full ${className}`} />;
}

export function SkeletonHeading({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-8 w-3/4 ${className}`} />;
}

export function SkeletonButton({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-10 w-24 rounded-full ${className}`} />;
}

export function SkeletonCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`bg-card rounded-2xl border border-border/50 p-8 ${className}`}>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-8 w-8 rounded-full ${className}`} />;
}

export function SkeletonBadge({ className = "" }: SkeletonProps) {
  return <Skeleton className={`h-6 w-20 rounded-full ${className}`} />;
}
