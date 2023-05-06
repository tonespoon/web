import { getConfig } from "@/config/config.service";
import { CustomSession } from "@/types";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";

const config = getConfig();

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },

  providers: [
    SpotifyProvider({
      clientId: config.spotifyClientId,
      clientSecret: config.spotifyClientSecret,
      authorization: {
        params: {
          scope: `
            playlist-read-private
            playlist-read-collaborative
            user-top-read
            user-library-read
            user-read-recently-played
            user-read-email
            user-read-private
            user-follow-read
        `,
        },
      },
    }),
  ],
  callbacks: {
    // JWT is called when a JWT is created (i.e. at sign in)
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (account?.refresh_token) {
        token.refreshToken = account.refresh_token;
      }

      return token;
    },

    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },

    // Session is called when a session is checked (i.e. on any request from a client)
    async session({ session, token }: { session: CustomSession; token: JWT }) {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(authOptions);
