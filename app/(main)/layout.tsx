import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="relative min-h-screen">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
