import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.union([
  z.object({ name: z.string().min(1), email: z.string().email(), phone: z.undefined() }),
  z.object({ name: z.string().min(1), phone: z.string().min(11), email: z.undefined() }),
]);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "তথ্য সঠিক নয়।" }, { status: 400 });
  }

  const { name, email, phone } = parsed.data;

  try {
    if (email) {
      const existing = await db.user.findUnique({ where: { email } });
      if (existing) {
        // Already registered — just send the magic link, no error
        return NextResponse.json({ ok: true });
      }
      await db.user.create({ data: { name, email } });
    } else if (phone) {
      const existing = await db.user.findUnique({ where: { phone } });
      if (existing) {
        // Update name if not set
        if (!existing.name) await db.user.update({ where: { phone }, data: { name } });
        return NextResponse.json({ ok: true });
      }
      await db.user.create({ data: { name, phone } });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "নিবন্ধনে সমস্যা হয়েছে।" }, { status: 500 });
  }
}
