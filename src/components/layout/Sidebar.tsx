"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  BookMarked,
  Users,
  Compass,
  Wand2,
  User,
  Settings,
  ChevronRight,
} from "lucide-react";

const studentLinks = [
  { href: "/dashboard", icon: LayoutDashboard, labelBn: "ড্যাশবোর্ড" },
  { href: "/courses", icon: BookOpen, labelBn: "কোর্সসমূহ" },
  { href: "/exam", icon: GraduationCap, labelBn: "পরীক্ষা" },
  { href: "/reader", icon: BookMarked, labelBn: "ই-রিডার" },
  { href: "/community", icon: Users, labelBn: "কমিউনিটি" },
  { href: "/explore", icon: Compass, labelBn: "এক্সপ্লোর" },
  { href: "/studio", icon: Wand2, labelBn: "AI স্টুডিও" },
  { href: "/profile", icon: User, labelBn: "প্রোফাইল" },
];

const adminLinks = [
  { href: "/admin/content", icon: BookOpen, labelBn: "কন্টেন্ট" },
  { href: "/admin/exams", icon: GraduationCap, labelBn: "পরীক্ষা ব্যবস্থাপনা" },
  { href: "/admin/students", icon: Users, labelBn: "শিক্ষার্থীগণ" },
  { href: "/admin/settings", icon: Settings, labelBn: "সেটিংস" },
];

interface SidebarProps {
  userRole?: string;
}

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const isAdmin = userRole === "ADMIN" || userRole === "TEACHER";
  const links = isAdmin ? [...adminLinks, ...studentLinks] : studentLinks;

  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-border bg-background py-6 px-3">
      {isAdmin && (
        <div className="mb-4">
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            অ্যাডমিন
          </p>
          {adminLinks.map((link) => (
            <SidebarLink key={link.href} link={link} active={pathname.startsWith(link.href)} />
          ))}
          <div className="my-3 border-t border-border" />
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            শিক্ষার্থী ভিউ
          </p>
        </div>
      )}
      {!isAdmin && links.map((link) => (
        <SidebarLink key={link.href} link={link} active={pathname.startsWith(link.href)} />
      ))}
      {isAdmin && studentLinks.map((link) => (
        <SidebarLink key={link.href} link={link} active={pathname.startsWith(link.href)} />
      ))}
    </aside>
  );
}

function SidebarLink({ link, active }: { link: typeof studentLinks[0]; active: boolean }) {
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium mb-0.5 transition-colors group",
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:text-foreground hover:bg-accent"
      )}
    >
      <link.icon className="h-4 w-4 flex-shrink-0" />
      <span className="flex-1">{link.labelBn}</span>
      {active && <ChevronRight className="h-3 w-3 opacity-60" />}
    </Link>
  );
}
