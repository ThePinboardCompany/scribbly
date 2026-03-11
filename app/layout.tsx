import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
			<ClerkProvider>
				{children}
			</ClerkProvider>
		</ThemeProvider>
      </body>
    </html>
  );
}
