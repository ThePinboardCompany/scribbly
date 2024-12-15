import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type NextAuthConfig } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import GithubProvider from 'next-auth/providers/github';

import { db } from '~/server/db';
import {
	accounts,
	sessions,
	users,
	verificationTokens,
} from '~/server/db/schema';

// import { type DefaultSession } from 'next-auth';
// declare module 'next-auth' {
// 	interface Session extends DefaultSession {
// 		user: {
// 			id: string;
// 			// role: UserRole;
// 		} & DefaultSession['user'];
// 	}

// 	interface User {
// 	  role: UserRole;
// 	}
// }

export const authConfig = {
	providers: [GithubProvider, DiscordProvider],
	pages: {
		signIn: '/signin',
	},
	debug: true,
	adapter: DrizzleAdapter(db, {
		usersTable: users,
		accountsTable: accounts,
		sessionsTable: sessions,
		verificationTokensTable: verificationTokens,
	}),
	// callbacks: {
	// 	session: ({ session, user }) => ({
	// 		...session,
	// 		user: {
	// 			...session.user,
	// 			id: user.id,
	// 		},
	// 	}),
	// },
} satisfies NextAuthConfig;
