"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center justify-center px-6">

      {/* Logo */}
      <Link
        href="/"
        className="text-[13px] tracking-[0.3em] uppercase text-[#1a1a1a] font-medium mb-12"
      >
        RATELS
      </Link>

      {/* Card */}
      <div className="w-full max-w-sm bg-white border border-neutral-200 p-8">

        <h1 className="text-[18px] font-light text-[#1a1a1a] mb-1">
          Admin Sign In
        </h1>
        <p className="text-[12px] text-[#aaa] mb-8">
          Admin access only.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-[13px]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a1a1a] text-white py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      {/* Back to store */}
      <Link
        href="/"
        className="mt-8 text-[11px] text-[#aaa] hover:text-[#1a1a1a] transition-colors tracking-wide"
      >
        ← Back to store
      </Link>
    </div>
  );
}