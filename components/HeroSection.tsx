import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundCellCore } from "@/components/ui/background-cell-core";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn, FaThreads } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiHandWaving } from "react-icons/pi";

const socialLinks = [
	{ href: "https://github.com/DevAnuhas", icon: FaGithub, label: "GitHub" },
	{
		href: "https://linkedin.com/in/profile-anuhas",
		icon: FaLinkedinIn,
		label: "LinkedIn",
	},
	{
		href: "https://www.threads.net/@im_anuhas",
		icon: FaThreads,
		label: "Threads",
	},
];

export default function HeroSection() {
	return (
		<section className="px-8 md:pt-24 pt-16 pb-8 relative flex justify-center items-center">
			<div className="container max-w-5xl">
				<BackgroundCellCore />
				<div>
					<Spotlight
						className="top-10 -left-20 md:-left-32 md:-top-20 h-screen"
						fill="rgb(254 215 170)"
					/>
					<Spotlight
						className="md:h-[80vh] md:w-[50vw] -top-30 md:top-10 left-full"
						fill="rgb(251 146 60)"
					/>
					<Spotlight
						className="left-10 -top-10 md:left-80 md:top-28 md:h-[80vh] md:w-[50vw]"
						fill="rgb(255 247 237)"
					/>
				</div>
				<div className="my-20 grid lg:grid-cols-2 lg:gap-12 gap-6 items-center">
					{/* Left Column - Content */}
					<div className="flex justify-center items-center lg:justify-end z-50 pointer-events-none">
						<div className="max-w-sm md:max-w-[50vw] lg:max-w-[60vw] flex flex-col justify-center md:space-y-6 space-y-4">
							<div className="flex items-center space-x-2 mb-0 pointer-events-none select-none">
								<HiOutlineSparkles className="w-5 h-5 text-neutral-400 animate-pulse" />
								<p className="uppercase tracking-widest text-xs text-neutral-400 max-w-80">
									Dynamic Web Magic with Next.js
								</p>
							</div>

							<TextGenerateEffect
								words={"Full-Stack Developer"}
								className="text-6xl md:text-7xl md:mb-4 mb-2 md:leading-20 leading-16 tracking-wide pointer-events-none select-none"
							/>

							<p className="md:tracking-wider leading-relaxed font-extralight text-sm md:text-lg lg:text-xl pointer-events-none select-none">
								Hi! I&apos;m Anuhas, a Full-Stack Developer
								<br />
								specializing in Next.js and TypeScript.
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

							<Link href="/contact">
								<Button
									variant="glossy"
									size={"lg"}
									className="pointer-events-auto"
								>
									<PiHandWaving className="mr-1 !w-5 !h-5 animate-wiggle" />
									Say Hello
								</Button>
							</Link>
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="flex justify-center lg:justify-end relative -top-25 -right-12 lg:inset-0 z-50 pointer-events-none select-none">
						<Image
							src="/anuhas-headshot.png"
							alt="Anuhas Dissanayake - Full-Stack Developer"
							width={500}
							height={400}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
