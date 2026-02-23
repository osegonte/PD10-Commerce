export default function AboutSection() {
  return (
    <section
      className="w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-24"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Eyebrow */}
        <p
          className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-10 underline underline-offset-4 decoration-white/20"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Why RATELS
        </p>

        {/* Headline */}
        <h2
          className="text-white text-[34px] sm:text-[48px] lg:text-[56px] font-light leading-[1.15] mb-12 tracking-tight"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Good tech should not cost a kidney.
        </h2>

        {/* Body */}
        <p
          className="text-white/55 text-[16px] sm:text-[18px] font-light leading-[1.9] max-w-xl mx-auto mb-5"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Tech in Nigeria is overpriced. Middlemen, markups, and scams
          have made buying a decent phone or laptop feel impossible.
        </p>

        <p
          className="text-white/55 text-[16px] sm:text-[18px] font-light leading-[1.9] max-w-xl mx-auto mb-20"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          RATELS exists to fix that. Verified devices, honest prices,
          no unnecessary fees. Real tech, direct to you.
        </p>

        {/* Divider */}
        <div className="w-px h-10 bg-white/10 mx-auto mb-16" />

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
          {[
            { value: "100%", label: "Verified Devices" },
            { value: "0", label: "Hidden Fees" },
            { value: "Direct", label: "From Source" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="text-white text-[38px] font-light tracking-tight mb-2"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                {item.value}
              </p>
              <p
                className="text-white/35 text-[11px] tracking-[0.35em] uppercase"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}