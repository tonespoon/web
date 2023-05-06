import { Session } from "next-auth";

// This is a custom type that extends the default NextAuth session.
// It's been added as it was removed in V4, but this change requires storing the tokens somewhere...
// If I don't want to use a DB, they have to be added to the token.
export interface CustomSession extends Session {
  accessToken?: string;
  refreshToken?: string;
}
