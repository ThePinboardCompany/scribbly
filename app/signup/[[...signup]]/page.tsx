import { AuthLayout } from "@/components/auth/auth-layout";
import { SignUpForm } from "@/components/auth/sign-up-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Scribbly",
};

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
