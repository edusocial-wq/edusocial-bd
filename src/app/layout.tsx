import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],       // latin excluded — its "1" glyph is ambiguous next to Bengali script
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "EduSocial BD — ICT Learning for Class 11-12",
  description:
    "Bangladesh's best educational platform for HSC ICT. Textbook content, practice exams, e-reader, and a student community.",
  keywords: ["HSC ICT", "Bangladesh education", "Class 11 ICT", "NCTB ICT"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${hindSiliguri.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
