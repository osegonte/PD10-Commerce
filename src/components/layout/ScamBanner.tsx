"use client";

import { useState, useEffect } from "react";

export default function ScamBanner() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("scam-banner-seen")) return;
    const showTimer = setTimeout(() => setVisible(true), 1500);
    const hideTimer = setTimeout(() => dismiss(), 8000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("scam-banner-seen", "1");
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-3rem)] max-w-[520px]"
      style={{
        transform: `translateX(-50%) translateY(${leaving ? "20px" : "0px"})`,
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      <div className="bg-red-600 text-white px-5 py-4 flex items-start gap-4 shadow-2xl">
        {/* Icon */}
        <div className="shrink-0 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white/60">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] tracking-[0.15em] uppercase text-white/50 mb-1">
            Security Notice
          </p>
          <p className="text-[13px] text-white/80 font-light leading-relaxed">
            This is the <span className="text-white font-medium">ONLY</span> official RATELS Store. Do not send money to any DM or WhatsApp seller.
          </p>
        </div>
        {/* Close */}
        <button
          onClick={dismiss}
          className="shrink-0 text-white/30 hover:text-white transition-colors duration-200 mt-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Progress bar */}
      <div className="h-[2px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-white/30"
          style={{
            animation: "shrink 6.5s linear forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%;   }
        }
      `}</style>
    </div>
  );
}