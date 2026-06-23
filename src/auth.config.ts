import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Relative callback URLs → resolve against the app origin
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Same-origin absolute URLs are allowed through (e.g. /dashboard)
      try {
        if (new URL(url).origin === baseUrl) return url;
      } catch {
        // fall through
      }
      // Default landing after auth
      return `${baseUrl}/dashboard`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "STUDENT";
        token.tier = (user as { tier?: string }).tier ?? "FREE";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.tier = token.tier as string;
      }
      return session;
    },
  },
};
