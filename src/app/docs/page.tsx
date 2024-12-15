export const runtime = 'edge';

import { type Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Docs - Scribbly',
};

export default function Documentation() {
	return (
		<main className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<h1 className="text-4xl font-extrabold">Docs: Coming soon...</h1>
		</main>
	);
}
