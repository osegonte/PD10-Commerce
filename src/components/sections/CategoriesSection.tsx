import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Phones",
    href: "/phones",
    sub: "iPhones & Android",
    src: "/categories/phones.jpg",
  },
  {
    name: "Laptops",
    href: "/laptops",
    sub: "Student & mid-range",
    src: "/categories/laptops.jpg",
  },
  {
    name: "Student Essentials",
    href: "/student-essentials",
    sub: "Flash drives, headphones & more",
    src: "/categories/student-essentials.jpg",
  },
  {
    name: "Ghetto Essentials",
    href: "/ghetto-essentials",
    sub: "Power banks, cables & earbuds",
    src: "/categories/ghetto-essentials.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">

      {/* Section header */}
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-10">
        <p className="text-[#aaa] text-[10px] tracking-[0.35em] uppercase mb-2">
          Browse by category
        </p>
        <h2
          className="text-[#1a1a1a] text-[28px] sm:text-[34px] font-light leading-none"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          What are you looking for?
        </h2>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{ gap: "1px", backgroundColor: "#e8e8e8" }}
      >
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group block bg-[#0a0a0a] relative overflow-hidden"
            style={{ aspectRatio: "3 / 4" }}
          >
            {/* Image — object-cover crops from center automatically */}
            <Image
              src={cat.src}
              alt={cat.name}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/75 transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 z-10">

              {/* Top — number */}
              <p className="text-white/25 text-[11px] tracking-[0.3em] uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Bottom — name + sub + arrow */}
              <div>
                <p
                  className="text-white text-[17px] sm:text-[20px] font-light leading-snug mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {cat.name}
                </p>
                <p className="text-white/45 text-[11px] leading-relaxed mb-4 hidden sm:block">
                  {cat.sub}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/45 group-hover:text-white/80 transition-colors duration-300">
                    Shop now
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 text-white/45 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom border accent on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-500 z-10" />
          </Link>
        ))}
      </div>
    </section>
  );
}