import { auth } from "@clerk/nextjs/server";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Preview } from "@/components/preview";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

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
