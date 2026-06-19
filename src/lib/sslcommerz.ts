const SSLCOMMERZ_API =
  process.env.SSLCOMMERZ_SANDBOX === "true"
    ? "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"
    : "https://securepay.sslcommerz.com/gwprocess/v4/api.php";

const VALIDATION_API =
  process.env.SSLCOMMERZ_SANDBOX === "true"
    ? "https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php"
    : "https://securepay.sslcommerz.com/validator/api/validationserverAPI.php";

export interface SSLCommerzPayload {
  tranId: string;
  amount: number;
  currency?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productName: string;
  successUrl: string;
  failUrl: string;
  cancelUrl: string;
  ipnUrl: string;
}

export async function initiatePayment(payload: SSLCommerzPayload) {
  const params = new URLSearchParams({
    store_id: process.env.SSLCOMMERZ_STORE_ID!,
    store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD!,
    total_amount: String(payload.amount),
    currency: payload.currency ?? "BDT",
    tran_id: payload.tranId,
    success_url: payload.successUrl,
    fail_url: payload.failUrl,
    cancel_url: payload.cancelUrl,
    ipn_url: payload.ipnUrl,
    cus_name: payload.customerName,
    cus_email: payload.customerEmail,
    cus_phone: payload.customerPhone,
    product_name: payload.productName,
    product_category: "education",
    product_profile: "general",
    shipping_method: "NO",
    num_of_item: "1",
    cus_add1: "Bangladesh",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",
  });

  const res = await fetch(SSLCOMMERZ_API, {
    method: "POST",
    body: params,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const data = await res.json();

  if (data.status !== "SUCCESS") {
    throw new Error(`SSLCommerz init failed: ${data.failedreason}`);
  }

  return { gatewayUrl: data.GatewayPageURL, sessionKey: data.sessionkey };
}

export async function validatePayment(valId: string): Promise<boolean> {
  const params = new URLSearchParams({
    val_id: valId,
    store_id: process.env.SSLCOMMERZ_STORE_ID!,
    store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD!,
    format: "json",
  });

  const res = await fetch(`${VALIDATION_API}?${params.toString()}`);
  const data = await res.json();

  return data.status === "VALID" || data.status === "VALIDATED";
}
