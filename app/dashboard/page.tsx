import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TopNav } from "@/components/dashboard/top-nav";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard - Scribbly",
  description: "Manage and access your Scribbly boards",
};

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopNav />
      <DashboardContent />
    </div>
  );
}
