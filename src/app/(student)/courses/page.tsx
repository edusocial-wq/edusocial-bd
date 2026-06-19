import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Lock, ChevronRight } from "lucide-react";

export default async function CoursesPage() {
  const session = await auth();
  const isPremium = session?.user?.tier === "PREMIUM";

  const curricula = await db.curriculum.findMany({
    orderBy: { order: "asc" },
    include: {
      subjects: {
        orderBy: { order: "asc" },
        include: {
          courses: {
            where: { published: true },
            orderBy: { order: "asc" },
            include: {
              _count: { select: { chapters: true } },
            },
          },
        },
      },
    },
  });

  // Get enrollments for current user
  const enrollments = await db.enrollment.findMany({
    where: { userId: session!.user.id },
    select: { courseId: true },
  });
  const enrolledSet = new Set(enrollments.map((e) => e.courseId));

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-2">কোর্সসমূহ</h1>
      <p className="text-muted-foreground mb-8">পাঠ্যক্রম অনুযায়ী কোর্স বেছে নিন।</p>

      {curricula.map((curriculum) => (
        <div key={curriculum.id} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-foreground">{curriculum.name}</h2>
            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
              {curriculum.board}
            </span>
          </div>

          {curriculum.subjects.map((subject) => (
            <div key={subject.id} className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                {subject.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {subject.courses.map((course) => {
                  const isLocked = !course.isFree && !isPremium;
                  const isEnrolled = enrolledSet.has(course.id);

                  return (
                    <div
                      key={course.id}
                      className={`rounded-xl border border-border bg-card p-5 flex flex-col gap-3 ${isLocked ? "opacity-70" : ""}`}
                    >
                      {course.thumbnail && (
                        <div className="h-32 rounded-lg bg-muted overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={course.thumbnail}
                            alt={course.title_bn}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            {course.isFree ? (
                              <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">বিনামূল্যে</span>
                            ) : (
                              <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Lock className="h-2.5 w-2.5" /> প্রিমিয়াম
                              </span>
                            )}
                          </div>
                          <h4 className="font-semibold text-foreground">{course.title_bn}</h4>
                          {course.desc_bn && (
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{course.desc_bn}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">
                            <BookOpen className="h-3 w-3 inline mr-1" />
                            {course._count.chapters} টি অধ্যায়
                          </p>
                        </div>
                      </div>
                      {isLocked ? (
                        <Link href="/upgrade">
                          <Button size="sm" variant="outline" className="w-full">
                            <Lock className="h-3.5 w-3.5 mr-1" /> আপগ্রেড করুন
                          </Button>
                        </Link>
                      ) : (
                        <Link href={`/courses/${course.slug}`}>
                          <Button size="sm" className="w-full" variant={isEnrolled ? "outline" : "default"}>
                            {isEnrolled ? "চালিয়ে যান" : "শুরু করুন"}
                            <ChevronRight className="h-3.5 w-3.5 ml-1" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {curriculum.subjects.every((s) => s.courses.length === 0) && (
            <p className="text-muted-foreground text-sm">এই পাঠ্যক্রমে এখনো কোনো কোর্স নেই।</p>
          )}
        </div>
      ))}

      {curricula.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p>এখনো কোনো কোর্স প্রকাশিত হয়নি।</p>
        </div>
      )}
    </div>
  );
}
