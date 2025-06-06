"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import { navItems } from "@/data/index";

export function Navbar() {
	const pathname = usePathname();
	const { scrollYProgress } = useScroll();
	const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
	const [bgIndicatorBounds, setBgIndicatorBounds] = useState({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		active: false,
	});
	// Set true for the initial state so that nav bar is visible in the hero section
	const [visible, setVisible] = useState(true);
	const [isScrollable, setIsScrollable] = useState(true);

	// Check if the page is scrollable
	useEffect(() => {
		const checkIfScrollable = () => {
			const pageHeight = document.documentElement.scrollHeight;
			const viewportHeight = window.innerHeight;
			setIsScrollable(pageHeight > viewportHeight);
		};

		// Initial check
		checkIfScrollable();

		// Check whenever window is resized
		window.addEventListener("resize", checkIfScrollable);

		// Check when the DOM might have changed
		const observer = new MutationObserver(checkIfScrollable);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			window.removeEventListener("resize", checkIfScrollable);
			observer.disconnect();
		};
	}, [pathname]);

	useMotionValueEvent(scrollYProgress, "change", (current: number) => {
		// If page is not scrollable, always keep navbar visible
		if (!isScrollable) {
			setVisible(true);
			return;
		}

		const direction = current! - scrollYProgress.getPrevious()!;

		if (scrollYProgress.get() < 0.05) {
			// Set true for the initial state
			setVisible(true);
		} else {
			if (direction < 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}
	});

	// Function to update the background indicator bounds
	const updateBgBounds = (element: HTMLLIElement) => {
		const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
		setBgIndicatorBounds({
			left: offsetLeft,
			top: offsetTop,
			width: offsetWidth,
			height: offsetHeight,
			active: true,
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
		setBgIndicatorBounds((prev) => ({
			...prev,
			active: false,
		}));
	};

	return (
		<AnimatePresence mode="wait">
			<nav className="fixed top-6 left-0 right-0 z-100 flex justify-center">
				<motion.div
					initial={{
						opacity: 1,
						y: -100,
					}}
					animate={{
						y: visible || !isScrollable ? 0 : -100,
						opacity: visible || !isScrollable ? 1 : 0,
					}}
					transition={{
						duration: 0.2,
					}}
					className="glass rounded-full px-2 py-2"
					onMouseLeave={handleMouseLeave}
				>
					<ul className="flex items-center space-x-2 relative">
						{/* Background indicator */}
						<motion.div
							className="absolute bg-white/10 backdrop-blur-sm rounded-full z-0"
							initial={false}
							animate={{
								width: bgIndicatorBounds.width,
								height: bgIndicatorBounds.height,
								left: bgIndicatorBounds.left,
								top: bgIndicatorBounds.top,
								scale: bgIndicatorBounds.active ? 1 : 0,
								opacity: bgIndicatorBounds.active ? 1 : 0,
							}}
							style={{
								boxShadow:
									"0 4px 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
								transformOrigin: "center center",
							}}
							transition={{
								type: "spring",
								stiffness: 380,
								damping: 30,
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
				</motion.div>
			</nav>
		</AnimatePresence>
	);
}
