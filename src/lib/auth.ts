import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Resend from "next-auth/providers/resend";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { z } from "zod";
import { authConfig } from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  providers: [
    Resend({
      from: process.env.EMAIL_FROM!,
      sendVerificationRequest: async ({ identifier, url }) => {
        const { Resend: ResendClient } = await import("resend");
        const resend = new ResendClient(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.EMAIL_FROM!,
          to: identifier,
          subject: "EduSocial BD — Sign in link",
          html: `<p>Click <a href="${url}">here</a> to sign in to EduSocial BD. Link expires in 24 hours.</p>`,
        });
      },
    }),
    Credentials({
      name: "phone",
      credentials: {
        phone: { label: "Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const parsed = z
          .object({ phone: z.string(), otp: z.string().length(6) })
          .safeParse(credentials);
        if (!parsed.success) return null;

        const token = await db.verificationToken.findFirst({
          where: {
            identifier: parsed.data.phone,
            token: parsed.data.otp,
            expires: { gt: new Date() },
          },
        });
        if (!token) return null;

        await db.verificationToken.delete({ where: { token: token.token } });

        let user = await db.user.findUnique({ where: { phone: parsed.data.phone } });
        if (!user) {
          user = await db.user.create({ data: { phone: parsed.data.phone } });
        }
        return user;
      },
    }),
  ],
});
