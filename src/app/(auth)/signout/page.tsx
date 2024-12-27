export const runtime = 'edge';

import { auth, signOut } from '~/server/auth';
import { Button } from '~/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '~/components/ui/card';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';

export const metadata: Metadata = {
	title: 'Sign Out - Scribbly',
};

export default async function SignOut() {
	const session = await auth();
	if (!session) return redirect('/signin');

	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md">
				<Card className="mx-auto w-full max-w-md">
					<CardHeader>
						<CardTitle>Sign out</CardTitle>
						<CardDescription>
							Are you sure you want to sign out?
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-10 w-10 rounded-lg">
									<AvatarImage
										src={session.user?.image ? session.user.image : undefined}
										alt={
											session.user?.name ? session.user.name.slice(0, 2) : ''
										}
									/>
									<AvatarFallback className="rounded-lg">
										{session.user?.name?.slice(0, 2)}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-base leading-tight">
									<span className="truncate font-semibold">
										{session.user?.name}
									</span>
									<span className="truncate text-sm">
										{session.user?.email}
									</span>
								</div>
							</div>
						</div>
						<form
							action={async _formData => {
								'use server';
								await signOut({ redirectTo: '/' });
							}}
						>
							<Button type="submit" className="w-full">
								Sign out
							</Button>
						</form>
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
