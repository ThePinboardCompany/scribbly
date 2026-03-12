"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { UserIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@/components/ui/icons";
import { FieldError } from "@/components/auth/ui/field-eror";

export function SignUpForm() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const isLoading = fetchStatus === "fetching";

  const handleSubmit = async (formData: FormData) => {
    setPasswordError("");

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    const { error } = await signUp.password({
      emailAddress: formData.get("email") as string,
      password,
      username: formData.get("username") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
    });

    if (error) return;

    await signUp.verifications.sendEmailCode();
    setVerifying(true);
  };

  const handleVerify = async (formData: FormData) => {
    const code = formData.get("code") as string;

    await signUp.verifications.verifyEmailCode({ code });

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ decorateUrl }) => {
          const url = decorateUrl("/dashboard");
          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url);
          }
        },
      });
    }
  };

  if (verifying) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-card-foreground">
            Check your email
          </h2>
          <p className="text-muted-foreground">
            We sent a verification code to your email address.
          </p>
        </div>

        <form action={handleVerify} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-card-foreground"
            >
              Verification code
            </label>
            <input
              id="code"
              name="code"
              type="text"
              placeholder="Enter your code"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
            {errors.fields.code && (
              <FieldError message={`Code ${errors.fields.code.message}`} />
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <p className="text-center text-muted-foreground text-sm">
          Didn&apos;t receive a code?{" "}
          <button
            onClick={() => signUp.verifications.sendEmailCode()}
            className="text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Resend
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-card-foreground">
          Create your Scribbly account
        </h2>
        <p className="text-muted-foreground">
          Join Scribbly and visualize your thoughts!
        </p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-card-foreground"
            >
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-card-foreground"
            >
              Last Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-card-foreground"
          >
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Choose a username"
              className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-card-foreground"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-card-foreground"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full pl-10 pr-12 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-card-foreground transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-card-foreground"
          >
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full pl-10 pr-12 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-card-foreground transition-colors"
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {errors.fields.firstName && (
          <FieldError message={errors.fields.firstName.message} />
        )}
        {errors.fields.lastName && (
          <FieldError message={errors.fields.lastName.message} />
        )}
        {errors.fields.username && (
          <FieldError message={errors.fields.username.message} />
        )}
        {errors.fields.emailAddress && (
          <FieldError message={errors.fields.emailAddress.message} />
        )}
        {errors.fields.password && (
          <FieldError message={errors.fields.password.message} />
        )}
        {passwordError && <FieldError message={passwordError} />}

        <div id="clerk-captcha" />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      <p className="text-center text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
