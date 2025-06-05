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
		<section className="pt-24 pb-12 relative flex justify-center items-center">
			<div className="container max-w-5xl">
				<BackgroundCellCore />
				<div>
					<Spotlight
						className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
						fill="rgb(254 215 170)"
					/>
					<Spotlight
						className="h-[80vh] w-[50vw] top-10 left-full"
						fill="rgb(251 146 60)"
					/>
					<Spotlight
						className="left-80 top-28 h-[80vh] w-[50vw]"
						fill="rgb(255 247 237)"
					/>
				</div>
				<div className="my-20 grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Column - Content */}
					<div className="flex justify-center lg:justify-end z-50 pointer-events-none">
						<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center space-y-6">
							<div className="flex items-center space-x-2 mb-0 pointer-events-none select-none">
								<HiOutlineSparkles className="w-5 h-5 text-neutral-400 animate-pulse" />
								<p className="uppercase tracking-widest text-xs text-neutral-400 max-w-80">
									Dynamic Web Magic with Next.js
								</p>
							</div>

							<TextGenerateEffect
								words={"Full-Stack Developer"}
								className="text-5xl md:text-6xl lg:text-7xl mb-4 pointer-events-none select-none"
							/>

							<p className="md:tracking-wider leading-relaxed font-extralight text-sm md:text-lg lg:text-xl max-w-md pointer-events-none select-none">
								Hi! I&apos;m Anuhas, a Full-Stack Developer specializing in
								Next.js and TypeScript.
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

							<Link href="/contact" className="pointer-events-auto">
								<Button variant="glossy" size={"lg"}>
									<PiHandWaving className="mr-1 !w-5 !h-5 animate-wiggle" />
									Say Hello
								</Button>
							</Link>
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="flex justify-center lg:justify-end z-50 pointer-events-none select-none">
						<Image
							src="/images/anuhas-headshot.png"
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
