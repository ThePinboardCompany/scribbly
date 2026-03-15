import { AuthLayout } from "@/components/auth/auth-layout";
import { SignInForm } from "@/components/auth/sign-in-form";
import { AuthLayoutSkeleton, SignInSkeleton } from "@/components/auth/skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign In - Scribbly",
};

export default function SignInPage() {
  return (
    <Suspense fallback={<AuthLayoutSkeleton><SignInSkeleton /></AuthLayoutSkeleton>}>
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </Suspense>
  );
}
