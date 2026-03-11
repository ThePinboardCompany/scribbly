"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-red-500/50 bg-red-500/10">
      <svg
        className="w-4 h-4 text-red-500 shrink-0 mr-1.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <p className="text-sm">{message}</p>
    </div>
  );
}

export function SignInForm() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [verificationCode, setVerificationCode] = useState("");

  const isLoading = fetchStatus === "fetching";

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
        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="identifier"
            className="block text-sm font-medium text-card-foreground"
          >
            Email or username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              id="identifier"
              name="identifier"
              type="text"
              placeholder="Email or username"
              value={formData.identifier}
              onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Password Field */}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            href="#"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
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

      {/* Sign Up Link */}
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
