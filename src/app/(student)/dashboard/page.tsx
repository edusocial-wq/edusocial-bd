import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Trophy, TrendingUp, Clock, Star } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [progress, attempts, badges, upcomingExams] = await Promise.all([
    db.lessonProgress.count({ where: { userId } }),
    db.examAttempt.findMany({
      where: { userId, status: "GRADED" },
      orderBy: { submittedAt: "desc" },
      take: 5,
      include: { exam: { select: { title_bn: true } } },
    }),
    db.badge.findMany({ where: { userId }, orderBy: { earnedAt: "desc" } }),
    db.exam.findMany({
      where: { mode: "SCHEDULED", scheduledAt: { gte: new Date() }, published: true },
      orderBy: { scheduledAt: "asc" },
      take: 3,
      include: { course: { select: { title_bn: true } } },
    }),
  ]);

  const avgScore =
    attempts.length > 0
      ? Math.round(
          attempts.reduce((sum: number, a) => sum + ((a.score ?? 0) / (a.totalMarks || 1)) * 100, 0) /
            attempts.length
        )
      : null;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          স্বাগতম, {session?.user?.name ?? "শিক্ষার্থী"} 👋
        </h1>
        <p className="text-muted-foreground mt-1">আজকের অগ্রগতি দেখুন এবং শেখা চালিয়ে যান।</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={BookOpen}
          value={String(progress)}
          label="পাঠ সম্পন্ন"
          color="bg-blue-500/10 text-blue-600"
        />
        <StatCard
          icon={GraduationCap}
          value={String(attempts.length)}
          label="পরীক্ষা দিয়েছেন"
          color="bg-green-500/10 text-green-600"
        />
        <StatCard
          icon={TrendingUp}
          value={avgScore !== null ? `${avgScore}%` : "—"}
          label="গড় স্কোর"
          color="bg-purple-500/10 text-purple-600"
        />
        <StatCard
          icon={Trophy}
          value={String(badges.length)}
          label="ব্যাজ অর্জিত"
          color="bg-yellow-500/10 text-yellow-600"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent exam results */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            সাম্প্রতিক পরীক্ষার ফলাফল
          </h2>
          {attempts.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-muted-foreground text-sm mb-3">এখনো কোনো পরীক্ষা দেননি।</p>
              <Link href="/exam">
                <Button size="sm">পরীক্ষা দিন</Button>
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {attempts.map((attempt) => {
                const pct = Math.round(((attempt.score ?? 0) / (attempt.totalMarks || 1)) * 100);
                return (
                  <li key={attempt.id} className="flex items-center justify-between text-sm">
                    <span className="text-foreground truncate max-w-[60%]">
                      {attempt.exam.title_bn}
                    </span>
                    <span
                      className={`font-semibold ${
                        pct >= 70 ? "text-success" : pct >= 40 ? "text-warning" : "text-destructive"
                      }`}
                    >
                      {pct}%
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Upcoming scheduled exams */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            আসন্ন শিডিউলড পরীক্ষা
          </h2>
          {upcomingExams.length === 0 ? (
            <p className="text-muted-foreground text-sm py-6 text-center">
              কোনো আসন্ন শিডিউলড পরীক্ষা নেই।
            </p>
          ) : (
            <ul className="space-y-3">
              {upcomingExams.map((exam) => (
                <li key={exam.id} className="text-sm">
                  <div className="font-medium text-foreground">{exam.title_bn}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    {exam.course.title_bn} •{" "}
                    {exam.scheduledAt ? formatDate(exam.scheduledAt) : ""}
                    {" "}• {exam.durationMins} মিনিট
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Badges */}
        <div className="rounded-xl border border-border bg-card p-6 md:col-span-2">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="h-4 w-4 text-primary" />
            অর্জিত ব্যাজসমূহ
          </h2>
          {badges.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-muted-foreground text-sm mb-1">এখনো কোনো ব্যাজ অর্জন করেননি।</p>
              <p className="text-muted-foreground text-xs">পরীক্ষা দিন এবং পাঠ সম্পন্ন করুন ব্যাজ পেতে!</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center gap-1 bg-muted rounded-lg p-3 min-w-[72px]"
                >
                  <span className="text-2xl">{badgeEmoji(badge.type)}</span>
                  <span className="text-xs text-muted-foreground text-center leading-tight">
                    {badgeLabel(badge.type)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/courses"><Button variant="outline" size="sm">📚 কোর্স শুরু করুন</Button></Link>
        <Link href="/exam"><Button variant="outline" size="sm">✏️ পরীক্ষা দিন</Button></Link>
        <Link href="/reader"><Button variant="outline" size="sm">📖 বই পড়ুন</Button></Link>
        <Link href="/community"><Button variant="outline" size="sm">💬 কমিউনিটিতে যান</Button></Link>
        <Link href="/studio"><Button variant="outline" size="sm">🎨 AI স্টুডিও</Button></Link>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${color} mb-3`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function badgeEmoji(type: string) {
  const map: Record<string, string> = {
    FIRST_EXAM: "🎯",
    STREAK_7: "🔥",
    CHAPTER_COMPLETE: "📖",
    COURSE_COMPLETE: "🏆",
    TOP_SCORER: "⭐",
    CREATIVE_POST: "🎨",
  };
  return map[type] ?? "🏅";
}

function badgeLabel(type: string) {
  const map: Record<string, string> = {
    FIRST_EXAM: "প্রথম পরীক্ষা",
    STREAK_7: "৭ দিন স্ট্রিক",
    CHAPTER_COMPLETE: "অধ্যায় সম্পন্ন",
    COURSE_COMPLETE: "কোর্স সম্পন্ন",
    TOP_SCORER: "শীর্ষ স্কোরার",
    CREATIVE_POST: "ক্রিয়েটিভ পোস্ট",
  };
  return map[type] ?? type;
}
