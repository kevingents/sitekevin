import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BellOff,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code,
  CreditCard,
  Database,
  FileCheck,
  FileSpreadsheet,
  Files,
  GraduationCap,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plug,
  Presentation,
  Quote,
  Repeat,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Centrale icon-map. Alle UI gebruikt SVG-iconen (lucide) — geen emoji.
 * Voeg hier nieuwe iconen toe i.p.v. los te importeren in pagina's.
 */
const ICONS = {
  // content / domein
  files: Files,
  table: FileSpreadsheet,
  "bell-off": BellOff,
  repeat: Repeat,
  "message-square-off": Inbox,
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  users: Users,
  briefcase: Briefcase,
  "layout-dashboard": LayoutDashboard,
  plug: Plug,
  "shield-check": ShieldCheck,
  presentation: Presentation,
  "life-buoy": LifeBuoy,
  code: Code,
  "credit-card": CreditCard,
  // UI
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "arrow-left": ArrowLeft,
  check: Check,
  "check-check": CheckCheck,
  "check-circle": CheckCircle2,
  "chevron-down": ChevronDown,
  menu: Menu,
  x: X,
  phone: MessageCircle,
  mail: Mail,
  "message-circle": MessageCircle,
  calendar: Calendar,
  sparkles: Sparkles,
  quote: Quote,
  "map-pin": MapPin,
  send: Send,
  loader: Loader2,
  alert: TriangleAlert,
  clock: Clock,
  "trending-up": TrendingUp,
  lock: Lock,
  database: Database,
  "file-check": FileCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp className={cn("h-5 w-5", className)} strokeWidth={strokeWidth} aria-hidden="true" />;
}
