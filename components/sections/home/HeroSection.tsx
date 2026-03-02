import Image from "next/image";
import Button from "@/components/ui/Button";
import type { HeroData } from "@/types";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HeroSection({ data }: { data: HeroData }) {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-72px)] overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        {/* Image: full width on mobile (top portion), right side on md+ */}
        <div className="absolute right-0 top-0 w-full h-[55%] md:h-full md:w-[75%] lg:w-[72%]">
          <Image
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 72vw"
          />
        </div>

        {/*
          Mobile: gradient goes bottom-to-top (white from bottom ~45%, fading into transparent at top)
          Desktop (md+): gradient goes left-to-right as before
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-white from-45% via-white/95 via-55% to-transparent to-75% md:bg-gradient-to-r md:from-white md:from-30% md:via-white/90 md:via-45% md:to-transparent md:to-65%" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 flex items-end md:items-center min-h-[calc(100vh-72px)] py-12 md:py-20">
        <div className="max-w-[540px] lg:max-w-[580px] flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {data.socialProof.avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white"
                  style={{ zIndex: data.socialProof.avatars.length - i }}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">{data.socialProof.text}</p>
          </div>

          <TextGenerateEffect words={data.heading} />
          <p className="text-base text-gray-600 leading-relaxed max-w-[460px]">
            {data.subheading}
          </p>
          <div className="pt-2">
            <Button href={data.cta.href} variant="primary" size="lg">
              {data.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}