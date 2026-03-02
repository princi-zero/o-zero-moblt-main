import Image from "next/image";
import type { CityData } from "@/types/index";
import { StatCardUI, DataSectionWrapper, MapPinIcon, BuildingIcon, RouteIcon } from "./OpenDataUI";

const ICONS = [<MapPinIcon />, <BuildingIcon />, <RouteIcon />];

export default function CitiesServedSection({ data }: { data: CityData }) {
  return (
    <DataSectionWrapper
      heading="Cities & Schools Served"
      subheading="Growing our network to serve more communities safely and reliably."
      bg="bg-[#f5f5f0]"
    >
      {/* 3 stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.stats.map((s, i) => <StatCardUI key={s.label} card={s} icon={ICONS[i]} />)}
      </div>

      {/* Map card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <p className="text-sm font-bold text-gray-800 mb-1">{data.map.title}</p>
        <p className="text-xs text-gray-400 mb-4">{data.map.subtitle}</p>
        <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden">
          <Image
            src={data.map.imageSrc}
            alt={data.map.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </DataSectionWrapper>
  );
}