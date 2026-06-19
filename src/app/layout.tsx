import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
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
      <body className={`${notoSansBengali.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
