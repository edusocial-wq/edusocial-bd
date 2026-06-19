"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { validateBDPhone, normalizeBDPhone } from "@/lib/utils";

type Mode = "email" | "phone";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("resend", { email, redirect: false });
    setLoading(false);
    if (res?.error) {
      setError("ইমেইল পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } else {
      setMessage("আপনার ইমেইলে একটি সাইন-ইন লিঙ্ক পাঠানো হয়েছে।");
    }
  }

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    if (!validateBDPhone(phone)) {
      setError("সঠিক বাংলাদেশী নম্বর দিন (01XXXXXXXXX)");
      return;
    }
    setLoading(true);
    setError("");
    const normalized = normalizeBDPhone(phone);
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: normalized }),
    });
    setLoading(false);
    if (res.ok) {
      setOtpSent(true);
      setMessage("OTP পাঠানো হয়েছে। আপনার ফোনে চেক করুন।");
    } else {
      setError("OTP পাঠাতে সমস্যা হয়েছে।");
    }
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const normalized = normalizeBDPhone(phone);
    const res = await signIn("credentials", {
      phone: normalized,
      otp,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("OTP সঠিক নয় বা মেয়াদ শেষ। আবার চেষ্টা করুন।");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg mb-4">
              E
            </Link>
            <h1 className="text-2xl font-bold text-foreground">লগইন করুন</h1>
            <p className="text-muted-foreground text-sm mt-1">
              EduSocial BD-তে আপনাকে স্বাগতম
            </p>
          </div>

          {/* Mode tabs */}
          <div className="flex rounded-lg border border-border p-1 mb-6">
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${mode === "email" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => { setMode("email"); setError(""); setMessage(""); }}
            >
              ইমেইল
            </button>
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${mode === "phone" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => { setMode("phone"); setError(""); setMessage(""); }}
            >
              ফোন OTP
            </button>
          </div>

          {message && (
            <div className="mb-4 rounded-lg bg-success/10 border border-success/20 p-3 text-sm text-success">
              {message}
            </div>
          )}
          {error && (
            <div className="mb-4 rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {mode === "email" ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button className="w-full" disabled={loading}>
                {loading ? "পাঠানো হচ্ছে..." : "ম্যাজিক লিঙ্ক পাঠান"}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      ফোন নম্বর
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      বাংলাদেশী নম্বর (01 দিয়ে শুরু)
                    </p>
                  </div>
                  <Button className="w-full" disabled={loading}>
                    {loading ? "পাঠানো হচ্ছে..." : "OTP পাঠান"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      ৬ সংখ্যার OTP
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                      placeholder="123456"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-center text-lg tracking-widest placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <Button className="w-full" disabled={loading}>
                    {loading ? "যাচাই হচ্ছে..." : "যাচাই করুন ও লগইন করুন"}
                  </Button>
                  <button
                    type="button"
                    className="w-full text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => { setOtpSent(false); setOtp(""); setMessage(""); }}
                  >
                    নম্বর পরিবর্তন করুন
                  </button>
                </form>
              )}
            </div>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            অ্যাকাউন্ট নেই?{" "}
            <Link href="/register" className="text-primary hover:underline font-medium">
              নিবন্ধন করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
