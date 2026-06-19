import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { auth } from "@/lib/auth";
import {
  BookOpen,
  GraduationCap,
  Users,
  Wand2,
  Trophy,
  Clock,
  Newspaper,
  BookMarked,
  Star,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    titleBn: "পাঠ্যপুস্তকের বিষয়বস্তু",
    titleEn: "Textbook Content",
    descBn: "NCTB ICT পাঠ্যপুস্তকের সম্পূর্ণ বিশ্লেষণ, সহজ উদাহরণ সহ।",
    descEn: "Full analysis of NCTB ICT textbook with easy examples.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: GraduationCap,
    titleBn: "MCQ ও রচনামূলক পরীক্ষা",
    titleEn: "MCQ & Written Exams",
    descBn: "HSC পরীক্ষার মতো প্রশ্নপত্র — টাইমার সহ বা নিজের গতিতে।",
    descEn: "HSC-style question papers — timed or self-paced.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: BookMarked,
    titleBn: "ই-রিডার",
    titleEn: "E-Reader",
    descBn: "সম্পূর্ণ পাঠ্যপুস্তক অনলাইনে পড়ুন, বুকমার্ক রাখুন।",
    descEn: "Read the full textbook online with bookmarks.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Users,
    titleBn: "শিক্ষার্থী কমিউনিটি",
    titleEn: "Student Community",
    descBn: "প্রশ্ন করুন, মতামত শেয়ার করুন, বন্ধুদের সাথে যোগাযোগ করুন।",
    descEn: "Ask questions, share views, connect with friends.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Trophy,
    titleBn: "ব্যাজ ও লিডারবোর্ড",
    titleEn: "Badges & Leaderboard",
    descBn: "পরীক্ষায় ভালো করুন, ব্যাজ অর্জন করুন, শীর্ষে থাকুন।",
    descEn: "Excel in exams, earn badges, stay at the top.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Clock,
    titleBn: "সাপ্তাহিক রিপোর্ট কার্ড",
    titleEn: "Weekly Report Card",
    descBn: "প্রতি সপ্তাহে আপনার অগ্রগতির বিস্তারিত বিশ্লেষণ।",
    descEn: "Detailed analysis of your progress every week.",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: Newspaper,
    titleBn: "সংবাদ ও বৃত্তি",
    titleEn: "News & Scholarships",
    descBn: "শিক্ষা সংক্রান্ত সর্বশেষ সংবাদ ও বৃত্তির তথ্য।",
    descEn: "Latest education news and scholarship opportunities.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Wand2,
    titleBn: "AI ক্রিয়েটিভ স্টুডিও",
    titleEn: "AI Creative Studio",
    descBn: "কবিতা লিখুন, সঙ্গীত তৈরি করুন, ছবি সম্পাদনা করুন AI দিয়ে।",
    descEn: "Write poems, create music, edit photos with AI.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

const stats = [
  { valueBn: "১০,০০০+", valueEn: "10,000+", labelBn: "শিক্ষার্থী", labelEn: "Students" },
  { valueBn: "৫০০+", valueEn: "500+", labelBn: "পাঠ", labelEn: "Lessons" },
  { valueBn: "২,০০০+", valueEn: "2,000+", labelBn: "প্রশ্ন", labelEn: "Questions" },
  { valueBn: "৯৫%", valueEn: "95%", labelBn: "সন্তুষ্টি", labelEn: "Satisfaction" },
];

const freePremium = [
  { featureBn: "৩টি বিনামূল্যে কোর্স", featureEn: "3 free courses", free: true, premium: true },
  { featureBn: "MCQ অনুশীলন", featureEn: "MCQ practice", free: true, premium: true },
  { featureBn: "কমিউনিটি অ্যাক্সেস", featureEn: "Community access", free: true, premium: true },
  { featureBn: "সম্পূর্ণ পাঠ্যক্রম", featureEn: "Full curriculum", free: false, premium: true },
  { featureBn: "রচনামূলক পরীক্ষা", featureEn: "Written exams", free: false, premium: true },
  { featureBn: "সম্পূর্ণ ই-রিডার", featureEn: "Full e-reader", free: false, premium: true },
  { featureBn: "সাপ্তাহিক রিপোর্ট কার্ড", featureEn: "Weekly report card", free: false, premium: true },
  { featureBn: "AI স্টুডিও (সব টুল)", featureEn: "AI Studio (all tools)", free: false, premium: true },
  { featureBn: "শিডিউলড পরীক্ষা", featureEn: "Scheduled exams", free: false, premium: true },
];

export default async function LandingPage() {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <Navbar user={session?.user} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium mb-6">
            <Star className="h-3.5 w-3.5" />
            বাংলাদেশের #1 ICT লার্নিং প্ল্যাটফর্ম
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            ICT শিখুন।{" "}
            <span className="text-primary">HSC জয় করুন।</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10">
            একাদশ-দ্বাদশ শ্রেণির ICT-র জন্য বাংলাদেশের সেরা প্ল্যাটফর্ম।
            পাঠ্যপুস্তকের বিষয়বস্তু, অনুশীলন পরীক্ষা, ই-রিডার এবং একটি সক্রিয় শিক্ষার্থী সম্প্রদায়।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={session ? "/dashboard" : "/register"}>
              <Button size="xl">
                {session ? "ড্যাশবোর্ডে যান" : "বিনামূল্যে শুরু করুন"}
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="xl" variant="outline">
                কোর্স দেখুন
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.valueBn}>
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.valueBn}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.labelBn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              সব কিছু এক জায়গায়
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              পড়াশোনা থেকে শুরু করে সৃজনশীল কার্যকলাপ পর্যন্ত — EduSocial BD-তে সব আছে।
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.titleBn}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${f.color} mb-4`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.titleBn}</h3>
                <p className="text-sm text-muted-foreground">{f.descBn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Premium */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">বিনামূল্যে শুরু করুন</h2>
            <p className="text-muted-foreground">প্রিমিয়ামে আপগ্রেড করুন সব সুবিধা পেতে।</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-1">বিনামূল্যে</h3>
              <p className="text-3xl font-bold text-foreground mt-4 mb-6">৳০<span className="text-base font-normal text-muted-foreground">/মাস</span></p>
              <ul className="space-y-3">
                {freePremium.map((item) => (
                  <li key={item.featureBn} className={`flex items-center gap-2 text-sm ${item.free ? "text-foreground" : "text-muted-foreground line-through"}`}>
                    <CheckCircle className={`h-4 w-4 flex-shrink-0 ${item.free ? "text-success" : "text-muted-foreground"}`} />
                    {item.featureBn}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="block mt-8">
                <Button variant="outline" className="w-full">শুরু করুন</Button>
              </Link>
            </div>
            {/* Premium */}
            <div className="rounded-xl border-2 border-primary bg-card p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  সেরা মান
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">প্রিমিয়াম</h3>
              <p className="text-3xl font-bold text-primary mt-4 mb-6">
                ৳৩৯৯<span className="text-base font-normal text-muted-foreground">/মাস</span>
              </p>
              <ul className="space-y-3">
                {freePremium.map((item) => (
                  <li key={item.featureBn} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-success" />
                    {item.featureBn}
                  </li>
                ))}
              </ul>
              <Link href="/upgrade" className="block mt-8">
                <Button className="w-full">প্রিমিয়াম পান — bKash / Nagad</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            আজই যোগ দিন হাজারো শিক্ষার্থীর সাথে
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            বিনামূল্যে নিবন্ধন করুন এবং ICT পাঠ্যক্রম অন্বেষণ শুরু করুন।
          </p>
          <Link href="/register">
            <Button size="xl" variant="secondary">
              বিনামূল্যে নিবন্ধন করুন
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">EduSocial BD</h4>
              <p className="text-sm text-muted-foreground">
                HSC শিক্ষার্থীদের জন্য বাংলাদেশের সেরা শিক্ষা প্ল্যাটফর্ম।
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">শিক্ষা</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses" className="hover:text-foreground">কোর্সসমূহ</Link></li>
                <li><Link href="/exam" className="hover:text-foreground">পরীক্ষা</Link></li>
                <li><Link href="/reader" className="hover:text-foreground">ই-রিডার</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">কমিউনিটি</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/community" className="hover:text-foreground">ফোরাম</Link></li>
                <li><Link href="/explore" className="hover:text-foreground">সংবাদ ও বৃত্তি</Link></li>
                <li><Link href="/studio" className="hover:text-foreground">AI স্টুডিও</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">পেমেন্ট</h4>
              <div className="flex flex-wrap gap-2">
                {["bKash", "Nagad", "Rocket", "Card"].map((p) => (
                  <span key={p} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © 2024 EduSocial BD. সকল স্বত্ব সংরক্ষিত।
          </div>
        </div>
      </footer>
    </div>
  );
}
