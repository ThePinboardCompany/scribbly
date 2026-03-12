"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { UserIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@/components/ui/icons";
import { FieldError } from "@/components/auth/ui/field-eror";

type Step = "signin" | "forgot-email" | "forgot-code" | "forgot-password";

export function SignInForm() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const isLoading = fetchStatus === "fetching";

  const [step, setStep] = useState<Step>("signin");

  const handleSubmit = async (formData: FormData) => {
  const identifier = formData.get("identifier") as string;
  const password = formData.get("password") as string;

  const { error } = await signIn.password({
    identifier,
    password,
  });

  if (error) return;

  if (signIn.status === "complete") {
    await signIn.finalize({
      navigate: ({ decorateUrl }) => {
        const url = decorateUrl("/dashboard");
        if (url.startsWith("http")) {
          window.location.href = url;
        } else {
          router.push(url);
        }
      },
    });
  } else if (
    signIn.status === "needs_second_factor" ||
    signIn.status === "needs_client_trust"
  ) {
    await signIn.mfa.sendEmailCode();
  }
  };

  const handleVerify = async (formData: FormData) => {
    const code = formData.get("code") as string;

    await signIn.mfa.verifyEmailCode({ code });

    if (signIn.status === "complete") {
      await signIn.finalize({
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

  const handleSendCode = async (formData: FormData) => {
    const emailAddress = formData.get("email") as string;

    const { error: createError } = await signIn.create({ identifier: emailAddress });
    if (createError) return;

    const { error: sendError } = await signIn.resetPasswordEmailCode.sendCode();
    if (sendError) return;

    setStep("forgot-code");
  };

  const handleVerifyCode = async (formData: FormData) => {
    const code = formData.get("code") as string;

    const { error } = await signIn.resetPasswordEmailCode.verifyCode({ code });
    if (error) return;

    setStep("forgot-password");
  };

  const handleSetPassword = async (formData: FormData) => {
    const password = formData.get("password") as string;

    const { error } = await signIn.resetPasswordEmailCode.submitPassword({ password });
    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({
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

  if (
    signIn.status === "needs_second_factor" ||
    signIn.status === "needs_client_trust"
  ) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-card-foreground">
            Check your email
          </h2>
          <p className="text-muted-foreground">
            We sent a verification code to your inbox.
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
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
          </div>

          {errors.fields.code && (
            <FieldError message={errors.fields.code.message} />
          )}            

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
            onClick={() => signIn.mfa.sendEmailCode()}
            className="text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Resend
          </button>
        </p>
      </div>
    );
  }

  if (step === "forgot-email") {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-card-foreground">Forgot password?</h2>
        <p className="text-muted-foreground">
          Enter your email and we&apos;ll send you a reset code.
        </p>
      </div>

      <form action={handleSendCode} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
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
          {errors.fields.identifier && (
            <FieldError message={errors.fields.identifier.message} />
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send reset code"}
        </button>
      </form>

      <p className="text-center text-muted-foreground text-sm">
        Remembered it?{" "}
        <button
          onClick={() => setStep("signin")}
          className="text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Back to sign in
        </button>
      </p>
    </div>
  );
}

if (step === "forgot-code") {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-card-foreground">Check your email</h2>
        <p className="text-muted-foreground">Enter the reset code we sent you.</p>
      </div>

      <form action={handleVerifyCode} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="code" className="block text-sm font-medium text-card-foreground">
            Reset code
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
          {isLoading ? "Verifying..." : "Verify code"}
        </button>
      </form>

      <p className="text-center text-muted-foreground text-sm">
        Didn&apos;t get the code?{" "}
        <button
          onClick={() => setStep("forgot-email")}
          className="text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Try again
        </button>
      </p>
    </div>
  );
}

if (step === "forgot-password") {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-card-foreground">Set new password</h2>
        <p className="text-muted-foreground">Choose a strong password for your account.</p>
      </div>

      <form action={handleSetPassword} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-card-foreground">
            New password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
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
          {errors.fields.password && (
            <FieldError message={errors.fields.password.message} />
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Updating..." : "Set new password"}
        </button>
      </form>
    </div>
  );
}

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-card-foreground">
          Sign in to Scribbly
        </h2>
        <p className="text-muted-foreground">
          Welcome back! Please enter your details.
        </p>
      </div>

      <form action={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="identifier"
            className="block text-sm font-medium text-card-foreground"
          >
            Email or username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="identifier"
              name="identifier"
              type="text"
              placeholder="Email or username"
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
              placeholder="Enter your password"
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

        {errors.fields.identifier && (
          <FieldError message={errors.fields.identifier.message} />
        )}

        {errors.fields.password && (
          <FieldError message={errors.fields.password.message} />
        )}

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setStep("forgot-email")}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <p className="text-center text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
