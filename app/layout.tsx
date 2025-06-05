import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Full-Stack Developer | AnuhasDev",
		template: "%s | AnuhasDev",
	},
	description:
		"Anuhas Dissanayake - Full-Stack Developer skilled in Next.js, TypeScript, and AI-driven solutions. Explore my innovative projects, technical expertise, and insightful blogs at anuhas.dev.",
	keywords: [
		"Anuhas",
		"Anuhas Dissanayake",
		"AnuhasDev",
		"Fullstack developer",
		"Frontend developer",
		"Backend developer",
		"Web developer",
		"Software developer",
		"Next.js developer",
		"React developer",
		"Node.js developer",
		"JavaScript developer",
		"TypeScript developer",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
