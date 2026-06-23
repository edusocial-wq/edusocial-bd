import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.union([
  z.object({ name: z.string().min(1), email: z.string().email() }),
  z.object({ name: z.string().min(1), phone: z.string().min(11) }),
]);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "তথ্য সঠিক নয়।" }, { status: 400 });
  }

  const data = parsed.data;

  try {
    if ("email" in data) {
      const existing = await db.user.findUnique({ where: { email: data.email } });
      if (existing) {
        return NextResponse.json({ error: "ALREADY_EXISTS" }, { status: 409 });
      }
      await db.user.create({ data: { name: data.name, email: data.email } });
    } else {
      const existing = await db.user.findUnique({ where: { phone: data.phone } });
      if (existing) {
        if (!existing.name) {
          await db.user.update({ where: { phone: data.phone }, data: { name: data.name } });
        }
        return NextResponse.json({ ok: true });
      }
      await db.user.create({ data: { name: data.name, phone: data.phone } });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "নিবন্ধনে সমস্যা হয়েছে।" }, { status: 500 });
  }
}
