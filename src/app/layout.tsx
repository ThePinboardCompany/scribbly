import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Scribbly - Scribble your mind in realtime",
  description:
    "A collaborative online whiteboard to brainstorm, plan, and visualize ideas in real-time",
  applicationName: "Scribbly",
  authors: [
    {
      name: "The Pinboard Company",
      url: "https://github.com/ThePinboardCompany",
    },
  ],
  keywords: [
    "scribbly",
    "scribble",
    "whiteboard",
    "collaboration",
    "brainstorm",
    "plan",
    "visualize",
    "realtime",
    "the pinboard company",
  ],
  creator: "The Pinboard Company",
  publisher: "The Pinboard Company",
  robots: {
    index: true,
    follow: true,
    notranslate: true,
    "max-video-preview": 5,
    "max-image-preview": "standard",
    "max-snippet": 10,
  },
  icons: [
    {
      url: "/light.svg",
      media: "(prefers-color-scheme: light)",
      rel: "icon",
      type: "image/svg+xml",
    },
    {
      url: "/dark.svg",
      media: "(prefers-color-scheme: dark)",
      rel: "icon",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
