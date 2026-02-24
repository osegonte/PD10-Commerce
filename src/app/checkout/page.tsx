import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order at RATELS Store.",
};

export default function CheckoutPage() {
  return (
    <>
      <Header alwaysDark />
      <section className="bg-white pt-14 sm:pt-16 min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#f2f2f0] flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-[#8a8580]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
          </div>

          <h1 className="text-[#1a1a1a] text-[22px] font-light mb-3">
            Checkout Coming Soon
          </h1>
          <p className="text-[#8a8580] text-[14px] leading-relaxed mb-2">
            Online payment is being set up.
          </p>
          <p className="text-[#8a8580] text-[14px] leading-relaxed mb-8">
            To complete your order now, please{" "}
            <Link href="/contact" className="text-[#1a1a1a] underline underline-offset-2 hover:opacity-60 transition-opacity">
              contact us directly
            </Link>{" "}
            and we&apos;ll sort you out immediately.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full bg-[#1a1a1a] text-white py-4 text-[12px] tracking-[0.15em] uppercase hover:bg-[#333] transition-colors text-center"
            >
              Contact to Order
            </Link>
            <Link
              href="/cart"
              className="w-full border border-neutral-200 text-[#1a1a1a] py-4 text-[12px] tracking-[0.15em] uppercase hover:border-[#1a1a1a] transition-colors text-center"
            >
              Back to Bag
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}