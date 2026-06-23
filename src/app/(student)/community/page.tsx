import ComingSoon from "@/components/ComingSoon";
import { Users } from "lucide-react";

export const metadata = { title: "কমিউনিটি — EduSocial BD" };

export default function CommunityPage() {
  return (
    <ComingSoon
      icon={Users}
      titleBn="কমিউনিটি"
      titleEn="Community"
      descBn="শিক্ষার্থীদের প্রশ্নোত্তর, আলোচনা ও পোস্ট শেয়ার করার জায়গা। এই ফিচারটি শীঘ্রই চালু হবে।"
    />
  );
}
