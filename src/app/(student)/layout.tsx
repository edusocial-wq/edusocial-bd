import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={session.user} />
      <div className="flex flex-1">
        <Sidebar userRole={session.user.role} />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
