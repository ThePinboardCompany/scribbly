import { AuthLayout } from "@/components/auth/auth-layout";
import { SignInForm } from "@/components/auth/sign-in-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Scribbly",
};

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
