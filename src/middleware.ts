import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

const PUBLIC_PATHS = ["/", "/login", "/register", "/api/auth", "/api/payment/sslcommerz/ipn"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isPublic = PUBLIC_PATHS.some((p) => pathname.startsWith(p));

  if (!req.auth && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Premium gate: if path starts with /premium and user tier is FREE, redirect
  if (pathname.startsWith("/premium") && req.auth?.user?.tier === "FREE") {
    return NextResponse.redirect(new URL("/upgrade", req.url));
  }

  // Admin gate
  if (
    pathname.startsWith("/admin") &&
    req.auth?.user?.role !== "ADMIN" &&
    req.auth?.user?.role !== "TEACHER"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|fonts).*)"],
};
