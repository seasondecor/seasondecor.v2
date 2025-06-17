import NextAuth, { Account, User, Session, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import BaseRequest from "@/config/axios.config";
import { JWT } from "next-auth/jwt";
import axios from "axios";

// Define custom types for API responses
interface LoginSuccessResponse {
  token: string;
  roleId: number;
  accountId: number;
}

// Extend NextAuth's types
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    roleId?: number;
    accountId?: number;
    error?: string | null;
  }

  interface User extends DefaultUser {
    accessToken?: string;
    roleId?: number;
    accountId?: number;
    error?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    roleId?: number;
    accountId?: number;
    error?: string | null;
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password");
        }

        try {
          const response = await BaseRequest.Post<LoginSuccessResponse>(
            `/api/Auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (!response?.token) {
            throw new Error("Invalid email or password");
          }

          const user: User = {
            id: response.accountId.toString(),
            accessToken: response.token,
            roleId: response.roleId,
            accountId: response.accountId,
          };
          return user;
        } catch (error: unknown) {
          let errorMessage = "An unknown error occurred";
          if (axios.isAxiosError(error) && error.response?.data?.message) {
            errorMessage = error.response.data.message;
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }
          throw new Error(errorMessage);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],

  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account: Account | null;
      user?: User;
    }) {
      try {
        if (user) {
          // Credentials login
          token.accessToken = user.accessToken;
          token.roleId = user.roleId;
          token.accountId = user.accountId;
          token.error = null;
        }

        if (account?.id_token) {
          // Google login
          try {
            const response = await BaseRequest.Post<LoginSuccessResponse>(
              "/api/Auth/google-login",
              {
                idToken: account.id_token,
              }
            );

            if (!response?.token) {
              throw new Error("Google login failed");
            }

            token.accessToken = response.token;
            token.roleId = response.roleId;
            token.accountId = response.accountId;
            token.error = null;
          } catch (error: unknown) {
            let errorMessage = "Google login failed";
            if (axios.isAxiosError(error) && error.response?.data?.message) {
              errorMessage = error.response.data.message;
            }
            console.error("Google login error:", errorMessage);
            token.error = errorMessage;
          }
        }
      } catch (error: unknown) {
        let errorMessage = "An unexpected error occurred in JWT callback";
        if (axios.isAxiosError(error) && error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
        console.error("JWT Callback Error:", errorMessage);
        token.error = errorMessage;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken;
      session.roleId = token.roleId;
      session.accountId = token.accountId;
      session.error = token.error;

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
