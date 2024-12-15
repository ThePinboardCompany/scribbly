export const runtime = 'edge';

import { type Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About - Scribbly',
};

export default function About() {
	return (
		<main className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<h1 className="text-4xl font-extrabold">About: Coming soon...</h1>
		</main>
	);
}
