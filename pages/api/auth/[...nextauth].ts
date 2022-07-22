import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      if (user.email === process.env.ADMIN_EMAIL) {
        await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            role: "ADMIN",
          },
        });
      }
      return true;
    },
    session: async ({ session, user, token }) => {
      if (user.role === "ADMIN") {
        session.admin = true;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
