import { AuthLayout } from "@/components/auth/auth-layout";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { AuthLayoutSkeleton, SignUpSkeleton } from "@/components/auth/skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign Up - Scribbly",
};

export default function SignUpPage() {
  return (
    <Suspense fallback={<AuthLayoutSkeleton><SignUpSkeleton /></AuthLayoutSkeleton>}>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </Suspense>
  );
}
