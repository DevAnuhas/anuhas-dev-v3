import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data";

export default function Footer() {
	return (
		<footer className="w-full px-8 pt-20 pb-10 relative">
			{/* Background grid */}
			<div className="w-full absolute bottom-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,transparent_50%,black)]">
				<Image
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-50"
					width={960}
					height={960}
				/>
			</div>

			<div className="container mx-auto flex gap-8 mt-16 md:flex-row flex-col-reverse justify-between items-center">
				<p className="md:text-md text-sm md:font-normal font-light text-muted-foreground">
					Copyright © {new Date().getFullYear()} Anuhas Dissanayake. All rights
					reserved.
				</p>
				{/* Social Links */}
				<div className="flex space-x-4 mb-8 pointer-events-auto">
					{socialLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="glass glass-hover p-3 rounded-full group block"
						>
							<link.icon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
							<span className="sr-only">{link.label}</span>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
