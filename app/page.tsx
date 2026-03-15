import { auth } from "@clerk/nextjs/server";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Preview } from "@/components/home/preview";
import { CTA } from "@/components/home/cta";
import { Footer } from "@/components/home/footer";
import { Suspense } from "react";
import {
  HeroSkeleton,
  FeaturesSkeleton,
  PreviewSkeleton,
  CTASkeleton,
} from "@/components/home/skeleton";

export default async function Home() {
  const { userId } = await auth()

  return (
    <main className="min-h-screen">
      <Navbar isSignedIn={!!userId} />
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>
      <Suspense fallback={<PreviewSkeleton />}>
        <Preview />
      </Suspense>
      <Suspense fallback={<CTASkeleton />}>
        <CTA />
      </Suspense>
      <Footer />
    </main>
  );
}
