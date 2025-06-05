import { Navbar } from "@/components/layout/navbar";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="relative min-h-screen">
			<Navbar />
			{children}
		</main>
	);
}
