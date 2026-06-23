import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, type LucideIcon } from "lucide-react";

interface ComingSoonProps {
  icon: LucideIcon;
  titleBn: string;
  titleEn: string;
  descBn: string;
}

export default function ComingSoon({ icon: Icon, titleBn, titleEn, descBn }: ComingSoonProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
        <Icon className="h-8 w-8" />
      </div>
      <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
        শীঘ্রই আসছে · Coming Soon
      </span>
      <h1 className="text-2xl font-bold text-foreground mb-1">{titleBn}</h1>
      <p className="text-sm text-muted-foreground mb-1">{titleEn}</p>
      <p className="max-w-md text-sm text-muted-foreground mt-3 leading-relaxed">{descBn}</p>
      <Link href="/dashboard" className="mt-8">
        <Button variant="outline" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          ড্যাশবোর্ডে ফিরে যান
        </Button>
      </Link>
    </div>
  );
}
