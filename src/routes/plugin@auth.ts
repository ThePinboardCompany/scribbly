import { QwikAuth$ } from "@auth/qwik";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GitHub from "@auth/qwik/providers/github";
import Discord from "@auth/qwik/providers/discord";
import { db } from "~/db";
import { accounts, sessions, users, verificationTokens } from "~/db/schema";

// declare module "@auth/qwik" {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       // role: UserRole;
//     } & DefaultSession["user"];
//   }
// }

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub, Discord],
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    }),
    // callbacks: {
    //   session: ({ session, user }) => ({
    //     ...session,
    //     user: {
    //       ...session.user,
    //       id: user.id,
    //     },
    //   }),
    // },
  }),
);
