import Image from "next/image";

export default function AboutFounderPlaceholder() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="relative h-40 w-40 md:h-52 md:w-52 rounded-full overflow-hidden ring-8 ring-[#6C63FF]/60 shadow-2xl">
        <Image
          src="/images/founder-gb-v1.jpg"
          alt="Dr Greg Blackburn — Founder of Zaza Technologies"
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="mt-6 text-sm opacity-80 text-center">
        Dr Greg Blackburn — Founder of Zaza Technologies
      </p>
    </div>
  );
}
