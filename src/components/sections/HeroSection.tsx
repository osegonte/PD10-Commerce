"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "min(100svh, 960px)",
        minHeight: "560px",
      }}
    >
      <Image
        src="/hero/hero.jpg"
        alt="RATELS STORE"
        fill
        priority
        unoptimized
        style={{
          objectFit: "cover",
          objectPosition: "75% 60%",
        }}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 pointer-events-none z-10" />

      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "none" : "translateY(20px)",
          transition: "opacity 1s ease 200ms, transform 1.1s cubic-bezier(0.16,1,0.3,1) 200ms",
        }}
      >
        <p className="text-white/50 text-[10px] tracking-[0.45em] uppercase mb-6">
          Official Store
        </p>

        <h1
          className="text-white font-light leading-[1.1] mb-4"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "clamp(36px, 7vw, 88px)",
            letterSpacing: "-0.02em",
          }}
        >
          RATELS STORE
        </h1>

        <p className="text-white/70 text-[14px] sm:text-[16px] font-light leading-relaxed mb-10 max-w-[480px]">
          Verified Devices. No Scams. Direct Deals.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/phones"
            className="bg-white text-[#0a0a0a] px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white/90 transition-colors duration-300 min-w-[180px] text-center"
          >
            Shop Phones
          </Link>
          <Link
            href="/ghetto-essentials"
            className="border border-white/40 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-light hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[180px] text-center"
          >
            Ghetto Essentials
          </Link>
        </div>
      </div>

      <p
        className="absolute bottom-8 left-6 z-20 text-white/40 text-[10px] tracking-[0.4em] uppercase font-light pointer-events-none"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1s" }}
      >
        ratels.store
      </p>

      <p
        className="absolute bottom-8 right-6 z-20 text-white/40 text-[10px] tracking-[0.3em] uppercase font-light pointer-events-none"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.1s" }}
      >
        ✔ Verified Source
      </p>
    </section>
  );
}