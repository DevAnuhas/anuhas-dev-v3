"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

const navItems = [
	{ href: "/", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export function Navbar() {
	const pathname = usePathname();
	const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
	const [bgIndicatorBounds, setBgIndicatorBounds] = useState({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
	});

	// Function to update the background indicator bounds
	const updateBgBounds = (element: HTMLLIElement) => {
		const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
		setBgIndicatorBounds({
			left: offsetLeft,
			top: offsetTop,
			width: offsetWidth,
			height: offsetHeight,
		});
	};

	// Handle mouse enter for hover effect
	const handleMouseEnter = (href: string, index: number) => {
		const element = itemsRef.current[index];
		if (element) {
			updateBgBounds(element);
		}
	};

	// Handle mouse leave to hide the background indicator
	const handleMouseLeave = () => {
		// Keep position but set width to 0 to make it disappear in place
		setBgIndicatorBounds((prev) => ({
			...prev,
			width: 0,
			height: 0,
		}));
	};

	return (
		<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
			<div
				className="glass rounded-full px-2 py-2"
				onMouseLeave={handleMouseLeave}
			>
				<ul className="flex items-center space-x-2 relative">
					{/* Background indicator */}
					<motion.div
						layoutId="backgroundIndicator"
						className="absolute bg-white/10 backdrop-blur-sm rounded-full z-0 transform -translate-x-1/2 -translate-y-1/2"
						initial={false}
						style={{
							opacity: bgIndicatorBounds.width === 0 ? 0 : 1,
							boxShadow:
								"0 4px 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
						}}
						transition={{
							type: "spring",
							stiffness: 380,
							damping: 30,
						}}
						animate={{
							left: bgIndicatorBounds.left + bgIndicatorBounds.width / 2,
							top: bgIndicatorBounds.top + bgIndicatorBounds.height / 2,
							width: bgIndicatorBounds.width,
							height: bgIndicatorBounds.height,
						}}
					/>

					{navItems.map((item, index) => {
						const isActive = pathname === item.href;
						return (
							<li
								key={item.href}
								ref={(el) => {
									itemsRef.current[index] = el;
								}}
								onMouseEnter={() => handleMouseEnter(item.href, index)}
								className="relative"
							>
								<Link
									href={item.href}
									className={cn(
										"relative block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full z-10",
										isActive ? "text-primary" : "text-muted-foreground"
									)}
								>
									{item.label}
									{isActive && (
										<motion.div
											layoutId="activeIndicator"
											className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										/>
									)}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
