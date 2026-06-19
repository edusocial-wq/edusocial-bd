import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { validatePayment } from "@/lib/sslcommerz";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const valId = formData.get("val_id") as string;
  const tranId = formData.get("tran_id") as string;
  const status = formData.get("status") as string;

  if (status !== "VALID" && status !== "VALIDATED") {
    return NextResponse.json({ ok: false });
  }

  // Validate with SSLCommerz
  const isValid = await validatePayment(valId);
  if (!isValid) {
    return NextResponse.json({ ok: false });
  }

  // Find subscription by tranId and activate it
  const subscription = await db.subscription.findFirst({
    where: { paymentRef: tranId },
  });

  if (!subscription) {
    return NextResponse.json({ ok: false });
  }

  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  await Promise.all([
    db.subscription.update({
      where: { id: subscription.id },
      data: { expiresAt, startsAt: new Date() },
    }),
    db.user.update({
      where: { id: subscription.userId },
      data: { tier: "PREMIUM" },
    }),
  ]);

  return NextResponse.json({ ok: true });
}
