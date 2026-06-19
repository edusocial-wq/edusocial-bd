"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  GraduationCap,
  Users,
  Compass,
  Wand2,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";

interface NavbarProps {
  user?: { name?: string | null; email?: string | null; role?: string } | null;
  locale?: string;
}

const navLinks = [
  { href: "/courses", labelEn: "Courses", labelBn: "কোর্সসমূহ", icon: BookOpen },
  { href: "/exam", labelEn: "Exams", labelBn: "পরীক্ষা", icon: GraduationCap },
  { href: "/community", labelEn: "Community", labelBn: "কমিউনিটি", icon: Users },
  { href: "/explore", labelEn: "Explore", labelBn: "এক্সপ্লোর", icon: Compass },
  { href: "/studio", labelEn: "Studio", labelBn: "স্টুডিও", icon: Wand2 },
];

export default function Navbar({ user, locale = "bn" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isBn = locale === "bn";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              E
            </div>
            <span className="font-bold text-lg text-foreground">
              {isBn ? "এডুসোশ্যাল BD" : "EduSocial BD"}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname.startsWith(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <link.icon className="h-4 w-4" />
                {isBn ? link.labelBn : link.labelEn}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <LayoutDashboard className="h-4 w-4" />
                    {isBn ? "ড্যাশবোর্ড" : "Dashboard"}
                  </Button>
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    {user.name ?? (isBn ? "আমার প্রোফাইল" : "My Profile")}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute right-0 mt-1 w-40 rounded-md border border-border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-accent">
                      {isBn ? "প্রোফাইল" : "Profile"}
                    </Link>
                    <form action="/api/auth/signout" method="POST">
                      <button className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent flex items-center gap-2">
                        <LogOut className="h-3 w-3" />
                        {isBn ? "লগআউট" : "Logout"}
                      </button>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    {isBn ? "লগইন" : "Login"}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">
                    {isBn ? "নিবন্ধন" : "Register"}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium",
                pathname.startsWith(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
              onClick={() => setMobileOpen(false)}
            >
              <link.icon className="h-4 w-4" />
              {isBn ? link.labelBn : link.labelEn}
            </Link>
          ))}
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            {user ? (
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  {isBn ? "ড্যাশবোর্ড" : "Dashboard"}
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">{isBn ? "লগইন" : "Login"}</Button>
                </Link>
                <Link href="/register" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">{isBn ? "নিবন্ধন" : "Register"}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
