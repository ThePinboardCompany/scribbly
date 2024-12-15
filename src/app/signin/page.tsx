import { signIn } from '~/server/auth';
import { Button } from '~/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '~/components/ui/card';
import { capitalizeFristChar } from '~/lib/utils';
import { type Metadata } from 'next';

const providers = ['github', 'discord'];

export const metadata: Metadata = {
	title: 'Sign In - Scribbly',
};

export default function SignIn() {
	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md">
				<Card className="mx-auto w-full max-w-md">
					<CardHeader>
						<CardTitle>Sign In</CardTitle>
						<CardDescription>
							Choose the following options to access your account.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						{providers.map(provider => (
							<form
								action={async () => {
									'use server';
									await signIn(provider, { redirectTo: '/dashboard' });
								}}
								key={provider}
							>
								<Button type="submit" className="w-full">
									Continue with {capitalizeFristChar(provider)}
								</Button>
							</form>
						))}
					</CardContent>
					<CardFooter className="flex justify-center">
						<CardDescription>
							© 2024 The Pinboard Company. All Rights Reserved.
						</CardDescription>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
