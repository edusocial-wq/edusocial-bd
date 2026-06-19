import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { initiatePayment } from "@/lib/sslcommerz";
import { randomUUID } from "crypto";

const MONTHLY_PRICE = 399; // BDT

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { plan = "monthly" } = await req.json();
  const tranId = `ESBD-${randomUUID().replace(/-/g, "").slice(0, 16).toUpperCase()}`;
  const amount = MONTHLY_PRICE;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

  try {
    const { gatewayUrl } = await initiatePayment({
      tranId,
      amount,
      customerName: session.user.name ?? "Student",
      customerEmail: session.user.email ?? "student@edusocial.bd",
      customerPhone: "01000000000",
      productName: `EduSocial BD Premium — ${plan}`,
      successUrl: `${appUrl}/api/payment/sslcommerz/success?tranId=${tranId}`,
      failUrl: `${appUrl}/upgrade?status=failed`,
      cancelUrl: `${appUrl}/upgrade?status=cancelled`,
      ipnUrl: `${appUrl}/api/payment/sslcommerz/ipn`,
    });

    // Store pending transaction
    await db.subscription.create({
      data: {
        userId: session.user.id,
        plan,
        paymentRef: tranId,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // tentative, confirmed on IPN
      },
    });

    return NextResponse.json({ gatewayUrl });
  } catch (err) {
    console.error("SSLCommerz initiate error:", err);
    return NextResponse.json({ error: "Payment initiation failed" }, { status: 500 });
  }
}
