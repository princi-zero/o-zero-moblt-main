import Link from "next/link";

export default function OpenDataCTASection() {
  return (
    <section className="w-full bg-[#1a46c4] py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight max-w-3xl">
          Ready to Experience This Level of Transparency
        </h2>
        <p className="text-base text-blue-200 max-w-lg leading-relaxed">
          Check routes pricing and availability for your child and see how Zero MobIt fits into your daily routine
        </p>
        <Link
          href="/get-price"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold px-8 py-3.5 text-sm transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Check Coverage & Fare
        </Link>
      </div>
    </section>
  );
}