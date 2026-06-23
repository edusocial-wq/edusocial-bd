import ComingSoon from "@/components/ComingSoon";
import { Compass } from "lucide-react";

export const metadata = { title: "এক্সপ্লোর — EduSocial BD" };

export default function ExplorePage() {
  return (
    <ComingSoon
      icon={Compass}
      titleBn="এক্সপ্লোর"
      titleEn="Explore"
      descBn="শিক্ষা ও প্রযুক্তির খবর, বৃত্তি ও ক্যারিয়ার গাইড — সব এক জায়গায়। এই ফিচারটি শীঘ্রই চালু হবে।"
    />
  );
}
