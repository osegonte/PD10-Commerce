"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminSetupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [alreadySetup, setAlreadySetup] = useState(false);

  // If any admin already exists, lock this page down
  useEffect(() => {
    supabase
      .from("admins")
      .select("id", { count: "exact", head: true })
      .then(({ count }) => {
        if ((count ?? 0) > 0) setAlreadySetup(true);
        setChecking(false);
      });
  }, []);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    // 1. Create the Supabase Auth user
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (!authData.user) {
      setError("Account created but could not retrieve user. Try logging in.");
      setLoading(false);
      return;
    }

    // 2. Insert into admins table
    const { error: adminError } = await supabase.from("admins").insert({
      email: email.trim().toLowerCase(),
      created_by: "setup",
    });

    if (adminError) {
      setError("Auth account created but failed to set admin role: " + adminError.message);
      setLoading(false);
      return;
    }

    // 3. Sign in immediately
    await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    router.push("/admin");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <p className="text-[#aaa] text-[13px] tracking-wide">Checking...</p>
      </div>
    );
  }

  if (alreadySetup) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-[13px] text-[#1a1a1a] mb-2">Admin account already exists.</p>
        <p className="text-[12px] text-[#aaa] mb-8">This setup page is disabled.</p>
        <Link
          href="/login"
          className="bg-[#1a1a1a] text-white px-8 py-3.5 text-[12px] tracking-[0.15em] uppercase hover:bg-[#333] transition-colors"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center justify-center px-6">

      <Link href="/" className="text-[13px] tracking-[0.3em] uppercase text-[#1a1a1a] font-medium mb-12">
        RATELS
      </Link>

      <div className="w-full max-w-sm bg-white border border-neutral-200 p-8">

        <h1 className="text-[18px] font-light text-[#1a1a1a] mb-1">Create Admin Account</h1>
        <p className="text-[12px] text-[#aaa] mb-8">
          One-time setup. This page locks after your account is created.
        </p>

        <form onSubmit={handleSetup} className="flex flex-col gap-4">

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8580] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-neutral-200 px-4 py-4 text-[15px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors bg-white"
              placeholder="you@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8580] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-neutral-200 px-4 py-4 text-[15px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors bg-white"
              placeholder="Min. 8 characters"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8580] mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border border-neutral-200 px-4 py-4 text-[15px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors bg-white"
              placeholder="Repeat password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-[13px]">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a1a1a] text-white py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Creating account..." : "Create Admin Account"}
          </button>
        </form>
      </div>

      <Link href="/login" className="mt-8 text-[11px] text-[#aaa] hover:text-[#1a1a1a] transition-colors tracking-wide">
        Already have an account? Sign in
      </Link>
    </div>
  );
}