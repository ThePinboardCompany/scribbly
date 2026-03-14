import { auth } from "@clerk/nextjs/server";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Preview } from "@/components/home/preview";
import { CTA } from "@/components/home/cta";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  const { userId } = await auth()

  return (
    <main className="min-h-screen">
      <Navbar isSignedIn={!!userId} />
      <Hero />
      <Features />
      <Preview />
      <CTA />
      <Footer />
    </main>
  );
}
