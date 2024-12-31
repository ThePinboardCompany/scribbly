import '~/styles/globals.css';
import { Inter } from 'next/font/google';

import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title:
		'Scribbly - Collaborate, sketch, and create on your digital whiteboard in real time.',
	description:
		'A collaborative online whiteboard to brainstorm, plan, and visualize ideas in real-time',
	applicationName: 'Scribbly',
	authors: [
		{
			name: 'The Pinboard Company',
			url: 'https://github.com/ThePinboardCompany',
		},
	],
	keywords: [
		'scribbly',
		'scribble',
		'whiteboard',
		'collaboration',
		'brainstorm',
		'plan',
		'visualize',
		'realtime',
		'the pinboard company',
	],
	creator: 'The Pinboard Company',
	publisher: 'The Pinboard Company',
	robots: {
		index: true,
		follow: true,
		'max-video-preview': 5,
		'max-image-preview': 'standard',
		'max-snippet': 10,
	},
	alternates: {
		canonical: 'https://scribbly.pages.dev',
	},
	icons: [
		{
			rel: 'icon',
			url: '/light.svg',
			media: '(prefers-color-scheme: light)',
			type: 'image/svg+xml',
		},
		{
			rel: 'icon',
			url: '/dark.svg',
			media: '(prefers-color-scheme: dark)',
			type: 'image/svg+xml',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning className={inter.variable}>
			<head>
				<link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</head>
			<body>
				<ThemeProvider
					storageKey="theme"
					defaultTheme="system"
					attribute="class"
					enableSystem
					enableColorScheme
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
