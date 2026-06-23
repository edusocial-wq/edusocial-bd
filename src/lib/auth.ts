import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Resend from "next-auth/providers/resend";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { z } from "zod";
import { authConfig } from "@/auth.config";

function signInEmailHtml(url: string): string {
  return `
  <!DOCTYPE html>
  <html lang="bn">
    <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
              <!-- Header -->
              <tr>
                <td style="background-color:#0f172a;padding:28px 32px;text-align:center;">
                  <div style="display:inline-block;width:44px;height:44px;line-height:44px;border-radius:10px;background-color:#2563eb;color:#ffffff;font-size:22px;font-weight:800;">E</div>
                  <div style="color:#f1f5f9;font-size:20px;font-weight:700;margin-top:12px;">EduSocial BD</div>
                  <div style="color:#94a3b8;font-size:13px;margin-top:2px;">HSC ICT শেখার প্ল্যাটফর্ম</div>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding:32px;">
                  <h1 style="margin:0 0 12px;font-size:20px;color:#0f172a;font-weight:700;">সাইন-ইন করুন</h1>
                  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#475569;">
                    নিচের বাটনে ক্লিক করে EduSocial BD-তে নিরাপদে সাইন-ইন করুন। এই লিঙ্কটি <strong>২৪ ঘণ্টা</strong> পর্যন্ত কার্যকর থাকবে।
                  </p>
                  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                    <tr>
                      <td style="border-radius:10px;background-color:#2563eb;">
                        <a href="${url}" target="_blank" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:10px;">
                          সাইন-ইন করুন →
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#94a3b8;">
                    বাটন কাজ না করলে এই লিঙ্কটি ব্রাউজারে কপি করুন:
                  </p>
                  <p style="margin:0;font-size:12px;line-height:1.5;color:#2563eb;word-break:break-all;">${url}</p>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="padding:20px 32px;border-top:1px solid #e2e8f0;">
                  <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;">
                    আপনি যদি এই সাইন-ইন অনুরোধটি না করে থাকেন, তাহলে এই ইমেইলটি নিরাপদে উপেক্ষা করুন।
                  </p>
                  <p style="margin:8px 0 0;font-size:12px;color:#cbd5e1;">© EduSocial BD</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

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
          subject: "EduSocial BD — সাইন-ইন লিঙ্ক",
          html: signInEmailHtml(url),
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
