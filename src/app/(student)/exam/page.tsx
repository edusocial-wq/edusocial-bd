import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap, Lock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function ExamListPage() {
  const session = await auth();
  const isPremium = session?.user?.tier === "PREMIUM";

  const exams = await db.exam.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    include: {
      course: { select: { title_bn: true } },
      _count: { select: { questions: true, attempts: true } },
    },
  });

  // Find in-progress attempts for this user
  const inProgress = await db.examAttempt.findMany({
    where: { userId: session!.user.id, status: "IN_PROGRESS" },
    select: { examId: true, id: true },
  });
  const inProgressMap = Object.fromEntries(inProgress.map((a) => [a.examId, a.id]));

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-2">পরীক্ষাসমূহ</h1>
      <p className="text-muted-foreground mb-8">MCQ ও রচনামূলক পরীক্ষায় অংশ নিন।</p>

      <div className="space-y-4">
        {exams.map((exam) => {
          const isLocked = exam.isPremium && !isPremium;
          const attemptId = inProgressMap[exam.id];
          const isScheduled = exam.mode === "SCHEDULED";
          const notStartedYet =
            isScheduled && exam.scheduledAt && exam.scheduledAt > new Date();

          return (
            <div
              key={exam.id}
              className={`rounded-xl border border-border bg-card p-6 flex items-start justify-between gap-4 ${isLocked ? "opacity-70" : ""}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {exam.type === "MCQ" ? "MCQ" : exam.type === "WRITTEN" ? "রচনামূলক" : "মিশ্র"}
                  </span>
                  {isScheduled && (
                    <span className="text-xs font-medium bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded-full">
                      শিডিউলড
                    </span>
                  )}
                  {exam.isPremium && (
                    <span className="text-xs font-medium bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Lock className="h-2.5 w-2.5" /> প্রিমিয়াম
                    </span>
                  )}
                </div>
                <h2 className="font-semibold text-foreground">{exam.title_bn}</h2>
                <p className="text-sm text-muted-foreground mt-0.5">{exam.course.title_bn}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" />
                    {exam._count.questions} প্রশ্ন
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {exam.durationMins} মিনিট
                  </span>
                  {isScheduled && exam.scheduledAt && (
                    <span>{formatDate(exam.scheduledAt)}</span>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0">
                {isLocked ? (
                  <Link href="/upgrade">
                    <Button size="sm" variant="outline">
                      <Lock className="h-3.5 w-3.5 mr-1" />
                      আপগ্রেড করুন
                    </Button>
                  </Link>
                ) : notStartedYet ? (
                  <Button size="sm" disabled>
                    শুরু হয়নি
                  </Button>
                ) : attemptId ? (
                  <Link href={`/exam/${exam.id}`}>
                    <Button size="sm" variant="success">চালিয়ে যান</Button>
                  </Link>
                ) : (
                  <Link href={`/exam/${exam.id}`}>
                    <Button size="sm">শুরু করুন</Button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}

        {exams.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <GraduationCap className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>এখনো কোনো পরীক্ষা প্রকাশিত হয়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
