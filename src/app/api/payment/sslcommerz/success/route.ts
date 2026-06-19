import { NextRequest, NextResponse } from "next/server";
import { validatePayment } from "@/lib/sslcommerz";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const tranId = searchParams.get("tranId");
  const valId = searchParams.get("val_id");

  if (!valId || !tranId) {
    return NextResponse.redirect(new URL("/upgrade?status=failed", req.url));
  }

  const isValid = await validatePayment(valId);
  if (!isValid) {
    return NextResponse.redirect(new URL("/upgrade?status=failed", req.url));
  }

  const subscription = await db.subscription.findFirst({ where: { paymentRef: tranId } });
  if (subscription) {
    await db.user.update({
      where: { id: subscription.userId },
      data: { tier: "PREMIUM" },
    });
  }

  return NextResponse.redirect(new URL("/dashboard?status=premium_activated", req.url));
}
