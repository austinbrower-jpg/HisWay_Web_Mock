import {
  Briefcase,
  Building2,
  CalendarDays,
  Church,
  Flag,
  Gift,
  GraduationCap,
  HardHat,
  PenTool,
  Shirt,
  Signpost,
  Spool,
  Store,
  Truck,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types";

const icons: Record<IconKey, LucideIcon> = {
  signpost: Signpost,
  shirt: Shirt,
  spool: Spool,
  truck: Truck,
  flag: Flag,
  gift: Gift,
  pen: PenTool,
  utensils: Utensils,
  hardhat: HardHat,
  graduation: GraduationCap,
  church: Church,
  building: Building2,
  briefcase: Briefcase,
  store: Store,
  calendar: CalendarDays,
};

interface IconProps {
  name: IconKey;
  className?: string;
}

/** Maps data-layer icon keys to Lucide components so data files stay serializable. */
export function Icon({ name, className }: IconProps) {
  const Component = icons[name];
  return <Component className={className} strokeWidth={1.75} aria-hidden="true" />;
}
