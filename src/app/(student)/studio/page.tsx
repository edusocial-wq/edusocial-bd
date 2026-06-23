import ComingSoon from "@/components/ComingSoon";
import { Wand2 } from "lucide-react";

export const metadata = { title: "AI স্টুডিও — EduSocial BD" };

export default function StudioPage() {
  return (
    <ComingSoon
      icon={Wand2}
      titleBn="AI স্টুডিও"
      titleEn="Creative Studio"
      descBn="কবিতা লেখা, AI আর্ট, ছবি এডিটিং ও মিউজিক তৈরির সৃজনশীল টুলস। এই ফিচারটি শীঘ্রই চালু হবে।"
    />
  );
}
